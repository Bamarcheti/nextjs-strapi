'use strict';

/**
 * movies service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movies.movies');
