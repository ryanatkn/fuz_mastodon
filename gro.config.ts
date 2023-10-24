import {type CreateGroConfig, replace_plugin} from '@grogarden/gro';

// This config file can be deleted for projects that want the normal defaults.
// Gro docs: https://github.com/grogarden/gro

const config: CreateGroConfig = async (cfg) => {
	// This template's `package.json` has `"private": true` to protect users,
	// disabling `.well-known/package.json`, but in this case we want to publish it,
	// so we re-enable it here.
	// See the Gro docs for more about `.well-known/package.json`:
	// https://github.com/grogarden/gro/blob/main/src/lib/docs/gro_plugin_sveltekit_frontend.md
	const get_base_plugins = cfg.plugins;
	cfg.plugins = async (ctx) =>
		replace_plugin(
			await get_base_plugins(ctx),
			(await import('@grogarden/gro/gro_plugin_sveltekit_frontend.js')).plugin({
				well_known_package_json: true,
			}),
		);

	return cfg;
};

export default config;
