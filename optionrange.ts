export { type LineRange, optionRange };

type LineRange = {
	firstLine: number;
	lastLine: number;
};

function optionRange(lines: string[]): LineRange {
	const optionIndex = lines.indexOf("OPTION");
	if (optionIndex >= 0) {
		let endIndex = lines.indexOf("/OPTION");
		if (endIndex < 0) {
			endIndex = lines.length - 1;
		} else {
			endIndex = endIndex - 1;
		}
		// SAFF: cheating!
		return { firstLine: optionIndex + 1, lastLine: endIndex };
	} else {
		return { firstLine: 0, lastLine: lines.length - 1 };
	}
}
