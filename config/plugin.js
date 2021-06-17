module.exports = ({ env }) => ({
    email: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        secure: false,
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "noreply@thamrin.co.id",
        defaultReplyTo: "noreply@thamrin.co.id",
      },
    },
    graphql : {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 1000,
        apolloServer: {
            tracing: false,
        },
    },
  });
  