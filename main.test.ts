import { optionRange, LineRange } from "./optionrange";

describe("Math operations", () => {
	it("should correctly add two numbers", () => {
		expect(2 + 3).toBe(5);
	});
});

describe("option range", () => {
	it("should give the right value without OPTION tag", () => {
		const expected: LineRange = { firstLine: 0, lastLine: 1 };
		expect(optionRange(["a", "b"])).toEqual(expected);
	});

	it("should give the right value with OPTION tag", () => {
		const expected: LineRange = { firstLine: 1, lastLine: 2 };
		expect(optionRange(["OPTION", "a", "b", "/OPTION"])).toEqual(expected);
	});

	it("should give the right value with no end tag", () => {
		const expected: LineRange = { firstLine: 2, lastLine: 3 };
		expect(optionRange(["c", "OPTION", "a", "b"])).toEqual(expected);
	});
});
