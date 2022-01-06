'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
 const axios = require('axios');

module.exports = {
// Para que se ejecute cada vez que creamos un articulo nuevo
afterCreate: async entry => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
        // Ignore
      });
  },

// Para que se ejecute cada vez que actualizamos un articulo
afterUpdate: async entry => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
        // Ignore
      });
  },

// Para que se ejecute cada vez que borramos un articulo
afterDestroy: async entry => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
        // Ignore
      });
  },

};

