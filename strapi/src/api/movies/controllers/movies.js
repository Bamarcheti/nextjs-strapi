'use strict';

/**
 * movies controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::movies.movies');
