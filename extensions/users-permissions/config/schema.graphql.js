module.exports = {
    query: `
        self: UsersPermissionsUser
    `,
    resolver: {
        Query: {
            self: {
                resolverOf: "plugins::users-permissions.user.me",
                resolver: "plugins::users-permissions.user.me",
            },
        },
    },
};
