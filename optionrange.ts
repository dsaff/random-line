export { type LineRange, optionRange };

type LineRange = {
	firstLine: number;
	lastLine: number;
};

function isListItem(line: string): boolean {
	return line.startsWith("- ") || line.startsWith("* ");
}

function optionRange(lines: string[], cursor?: number): LineRange {
	if (cursor !== undefined) {
		const currentLine = lines[cursor];
		console.log("currentLine: " + currentLine);
		if (isListItem(currentLine)) {
			let firstLine = cursor;
			while (firstLine > 0 && isListItem(lines[firstLine - 1])) {
				firstLine--;
				console.log("scanning back over: " + lines[firstLine]);
			}
			let lastLine = cursor;
			while (
				lastLine < lines.length - 1 &&
				isListItem(lines[lastLine + 1])
			) {
				lastLine++;
			}
			return { firstLine: firstLine, lastLine: lastLine };
		}
	}
	const optionIndex = lines.indexOf("OPTION");
	if (optionIndex >= 0) {
		let endIndex = lines.indexOf("/OPTION");
		if (endIndex < 0) {
			endIndex = lines.length - 1;
		} else {
			endIndex = endIndex - 1;
		}
		return { firstLine: optionIndex + 1, lastLine: endIndex };
	} else {
		return { firstLine: 0, lastLine: lines.length - 1 };
	}
}
