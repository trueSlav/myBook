import { useState, useEffect } from 'react';

export const useSetLS = (books, initialValue, key) => {
	const getValue = () => {
		const storage = localStorage.getItem(key); //string \ null

		if (storage) {
			return JSON.parse(storage);
		}

		return initialValue;
	};

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
	// localStorage.setItem('u1', books);
};
