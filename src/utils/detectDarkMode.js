

const detectDarkMode = () => {

	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		return 'dark'
	}
	return 'ltght'

};

export default detectDarkMode;