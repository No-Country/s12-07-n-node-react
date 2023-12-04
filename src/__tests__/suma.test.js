// test function suma
import { suma } from "../suma";
describe("suma function", () => {
    test("suma 1 + 2 to equal 3", () => {
        expect(suma(1, 2)).toBe(3);
    });
});