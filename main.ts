import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

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
			id: 'random-line',
			name: 'Random line',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log("v2");
				const line = getRandomInt(0, editor.lastLine());
				editor.setCursor(line, 0);
			}
		});


	// From https://share.google/aimode/4HjfsUoF0d0fveDIm
        // Register the custom protocol handler
        this.registerObsidianProtocolHandler('randomline', async (e) => {
	    new Notice('Hello, stranger!');
	    // await this.openNote(name);
        });
	
	}

	onunload() {

	}
}
