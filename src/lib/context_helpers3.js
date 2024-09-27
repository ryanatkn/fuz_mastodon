import {getContext, setContext} from 'svelte';
export function create_context3(fallback) {
	const key = Symbol();
	const maybe_get = () => {
		const value = getContext(key); // treat `null` as a valid value - the `typescript-eslint` rule below is bugged because `??` would clobber nulls, see issue https://github.com/typescript-eslint/typescript-eslint/issues/7842
		return value === undefined ? fallback?.() : value; // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
	};
	return {
		get: (error_message) => {
			const value = maybe_get();
			if (value === undefined) throw Error(error_message ?? 'context value is not set');
			return value;
		},
		maybe_get,
		// this is typesafe, so no runtime check:
		set: (value = fallback?.()) => setContext(key, value),
	};
}
