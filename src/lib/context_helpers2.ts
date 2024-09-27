import {getContext, setContext} from 'svelte';

// This uses a function instead of a class because of the overloaded type signatures.
// It could be implemented internally with a class like `Svelte_Context`
// but this is less code and seems a bit simpler.
// The memory gains of a class appear minimal given the expected usage patterns.
// See https://github.com/ryanatkn/fuz/pull/56 for more.

// TODO maybe remove `error_message`?

/**
 * Wraps Svelte's `setContext` and `getContext` for better ergonmics.
 * When no value is set in the context,
 * `get` throws an error and `maybe_get` returns `undefined`.
 * If a `fallback` is provided, the `value` argument to `set` is optional
 * and `maybe_get` is omitted from the type.
 */
export function create_context2<T>(fallback: () => T): {
	get: () => T;
	set: (value?: T) => T;
};
export function create_context2<T>(): {
	get: (error_message?: string) => T;
	maybe_get: () => T | undefined;
	set: (value: T) => T;
};
export function create_context2<T>(fallback?: () => T): {
	get: (error_message?: string) => T;
	maybe_get: () => T | undefined;
	set: (value?: T) => T;
} {
	const key = Symbol();
	const maybe_get = () => {
		const value: T | undefined = getContext(key); // treat `null` as a valid value - the `typescript-eslint` rule below is bugged because `??` would clobber nulls, see issue https://github.com/typescript-eslint/typescript-eslint/issues/7842
		return value === undefined ? fallback?.() : value; // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
	};
	return {
		get: (error_message?: string) => {
			const value = maybe_get();
			if (value === undefined) throw Error(error_message ?? 'context value is not set');
			return value;
		},
		maybe_get,
		// this is typesafe, so no runtime check:
		set: (value: T | undefined = fallback?.()) => setContext(key, value)!,
	};
}
