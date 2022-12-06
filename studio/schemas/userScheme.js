export const userScheme = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'username',
            type: 'string',
            title: 'Username',
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password',
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
        },
        {
            name: 'avatar',
            type: 'image',
            title: 'Avatar',
        },
        {
            name: 'email',
            type: 'text',
            title: 'Email',
        }
    ]
}