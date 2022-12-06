import { defineStore } from "pinia";

import { router } from "@/helpers";
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: localStorage.getItem("user"),
    returnUrl: null,
  }),
  actions: {
    async signInWithGoogle() {
      try {
        const googleProvider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        const dataUser = {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          avatar: user.photoURL,
        };
        if (docs.docs.length === 0) {
          await addDoc(collection(db, "users"), dataUser);
        }

        this.user = dataUser;
        localStorage.setItem("user", JSON.stringify(dataUser));
        router.push(this.returnUrl || "/");
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    },
    setUser(user) {
      this.user = user;
    },
  },
});
