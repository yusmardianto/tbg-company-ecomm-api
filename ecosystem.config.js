module.exports = {
  apps: [
    {
      name: "ecomm_strapi",
      script: "index.js",
      exec_mode: "fork",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
