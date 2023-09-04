import { useState, , useEffect } from "react";

function getStorageValue(key, defaulValue) {

	const saved = localStorage.getItem(key);
	const initial = JSON.parse(saved);
	return initial || defaulValue;

}

export const useLocalStorage = (key, defaulValue) => {

	const (value, setValue) = useState(() => {
		return getStorageValue(key, defaulValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};