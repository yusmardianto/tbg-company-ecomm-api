"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async create(ctx) {
		const decrypted = await strapi.plugins[
			"users-permissions"
		].services.jwt.getToken(ctx);
		let entity;
		if (ctx.is("multipart")) {
			const { data, files } = parseMultipartData(ctx);
			DATA["last_updated_api_by"] = decrypted.id;
			entity = await strapi.services["template-email"].create(data, {
				files,
			});
		} else {
			let data = ctx.request.body;
			DATA["last_updated_api_by"] = decrypted.id;
			entity = await strapi.services["template-email"].create(data);
		}
		var entry = sanitizeEntity(entity, {
			model: strapi.models["template-email"],
		});
		return entry;
	},
	async update(ctx) {
		const { id } = ctx.params;
		const decrypted = await strapi.plugins[
			"users-permissions"
		].services.jwt.getToken(ctx);
		let entity;
		if (ctx.is("multipart")) {
			const { data, files } = parseMultipartData(ctx);
			data["last_updated_api_by"] = decrypted.id;
			entity = await strapi.services["template-email"].update(
				{ id },
				data,
				{
					files,
				}
			);
		} else {
			let data = ctx.request.body;
			data["last_updated_api_by"] = decrypted.id;
			entity = await strapi.services["template-email"].update(
				{ id },
				data
			);
		}
		var entry = sanitizeEntity(entity, {
			model: strapi.models["template-email"],
		});
		return entry;
	},
};