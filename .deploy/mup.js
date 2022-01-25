require('dotenv').config()

module.exports = {
  servers: {
    one: {
      host: 'ec2-18-206-89-180.compute-1.amazonaws.com',
      username: 'ubuntu',
      pem: './gumtree.pem'
    }
  },

  app: {
    name: 'warp',
    path: '../',
    type: 'docker-image',

    servers: {
      one: {},
    },

    env: {
      PORT: 5000,
      SECRET_KEY: process.env.FLASK_SECRET_KEY,
    },

    volumes: {
      "warp-data": "/usr/src/app/data",
    },

    docker: {
      imagePort: 5000,
    },

  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps
  plugins: ['mup-docker-deploy'],

  proxy: {
    domains: 'ctoffice.gumtree.co.za',

    ssl: {
      // Enable Let's Encrypt
      letsEncryptEmail: 'jaswarts@eclassifiedsgroup.com',
      forceSSL: true,
    }
  }
};
