import { EditorPosition, MarkdownView, Notice, Plugin } from "obsidian";

function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min); // Ensure min is an integer
	max = Math.floor(max); // Ensure max is an integer
	// The maximum is inclusive and the minimum is inclusive
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class RandomLinePlugin extends Plugin {
	async onload() {
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: "random-line",
			name: "Random line",
			callback: () => {
				console.log("v6");
				const view =
					this.app.workspace.getActiveViewOfType(MarkdownView);
				if (!view) {
					return;
				}
				const editor = view.editor;
				if (!editor) {
					return;
				}
				editor.focus();
				const line = getRandomInt(0, editor.lastLine());
				const start: EditorPosition = {
					line: line,
					ch: 0,
				};
				const end: EditorPosition = {
					line: line,
					ch: editor.getLine(line).length,
				};
				editor.setSelection(start, end);
			},
		});

		// From https://share.google/aimode/4HjfsUoF0d0fveDIm
		// Register the custom protocol handler
		this.registerObsidianProtocolHandler("randomline", async (e) => {
			new Notice("Hello, stranger!");
			// await this.openNote(name);
		});
	}

	onunload() {}
}
