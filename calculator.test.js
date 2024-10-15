
const StringCalculator = require('./calculator');
const sc = new StringCalculator();

describe('StringCalculator', () => {
    describe('Add method', () => {

        it('should return 0 for an empty string', () => {
            expect(sc.Add("")).toBe(0);
        });
        it("should return the number for a single input", () => {
            expect(sc.Add("1")).toBe(1);
        })
        it("should return the sum of two comma-separated numbers", () => {
            expect(sc.Add("1,2")).toBe(3);
        })
        it('should handle an unknown number of numbers', () => {
            expect(sc.Add("1,2,3,4,5")).toBe(15);
        });
        it("should handle new lines between numbers", () => {
            expect(sc.Add("1\n2,3")).toBe(6);
        })
    })
})
