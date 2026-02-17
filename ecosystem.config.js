module.exports = {
  apps: [
    {
      name: "pwa-studio2",
      cwd: "/var/www/floral_delights",
      script: "yarn",
      args: "start",
      interpreter: "bash",
      env: {
        NODE_ENV: "production",
        PORT: 8081,
        STAGING_SERVER_PORT: 8081,
        STAGING_SERVER_HOST: "0.0.0.0",
        MAGENTO_BACKEND_URL: "https://admin-dev.flowerstruly.co.uk/",
        MAGENTO_BACKEND_GRAPHQL_URL: "https://admin-dev.flowerstruly.co.uk/graphql",
        MAGENTO_BACKEND_CORS_ORIGIN: "https://dev2.flowerstruly.co.uk",
      },
    },
  ],
};

