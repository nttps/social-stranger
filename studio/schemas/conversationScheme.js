export const conversationScheme = {
    name: "conversations",
    type: "document",
    title: "Conversations",
    fields: [
        {
            name: "message",
            type: "text",
            title: "Message",
        },
        {
            name: "created_at",
            type: "datetime",
            title: "Created At",
        },
        {
            name: "image",
            type: "image",
            title: "Image",
        },
        {
            name: "opening",
            type: "boolean",
            title: "Opening ?",
        },
        {
            name: "conversationUserRefernce",
            type: "reference",
            to: [{ type: "users" }],
        },
        {
            name: "userRefernce",
            type: "reference",
            to: [{ type: "users" }],
        },
    ],
};
