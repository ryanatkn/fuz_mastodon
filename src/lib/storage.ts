import {BROWSER} from 'esm-env';

// TODO would be nice to support `to_default_value` not being a function

/**
 * Loads `key` and falls back to `defaultValue`.
 * If `validate` is provided and throws, it removes the `key` and returns `undefined`.
 * @param key
 * @param defaultValue
 * @param validate
 * @returns
 */
export const load_from_storage = <T>(
	key: string,
	to_default_value: () => T,
	validate?: (value: any) => asserts value is T,
): T => {
	if (!BROWSER) return to_default_value();
	try {
		const stored = localStorage.getItem(key);
		if (!stored) return to_default_value();
		const parsed = JSON.parse(stored);
		validate?.(parsed);
		return parsed;
	} catch (err) {
		try {
			localStorage.removeItem(key);
		} catch (_err) {}
		return to_default_value();
	}
};

/**
 * Sets `value` at `key`.
 * Importantly, if `value` is `undefined` the `key` is removed,
 * but a `value` of `null` is stored.
 * @param key
 * @param value
 */
export const set_in_storage = (key: string, value: any): void => {
	if (!BROWSER) return;
	try {
		if (value === undefined) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(value));
		}
	} catch (_err) {}
};
