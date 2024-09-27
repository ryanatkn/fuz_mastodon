import type {Create_Gro_Config} from '@ryanatkn/gro';

const config: Create_Gro_Config = (cfg) => {
	cfg.map_package_json = (pkg) => {
		delete pkg.exports['./context_helpers3.js'];
		return pkg;
	};
	return cfg;
};

export default config;
