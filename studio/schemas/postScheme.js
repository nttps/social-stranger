export const postScheme = {
    name: "posts",
    type: "document",
    title: "Posts",
    fields: [
        {
            name: "message",
            type: "text",
            title: "Message",
        },
        {
            name: "messageId",
            type: "string",
            title: "Message ID",
        },
        {
            name: "created_at",
            type: "datetime",
            title: "Created At",
        },
        {
            name: "userRefernce",
            type: "reference",
            to: [{ type: 'users'}]
        },
    ],
};
