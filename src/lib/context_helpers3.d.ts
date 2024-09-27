/**
 * Wraps Svelte's `setContext` and `getContext` for better ergonmics.
 * When no value is set in the context,
 * `get` throws an error and `maybe_get` returns `undefined`.
 * If a `fallback` is provided, the `value` argument to `set` is optional
 * and `maybe_get` is omitted from the type.
 */
export declare function create_context3<T>(fallback: () => T): {
	get: () => T;
	set: (value?: T) => T;
};
export declare function create_context3<T>(): {
	get: (error_message?: string) => T;
	maybe_get: () => T | undefined;
	set: (value: T) => T;
};
