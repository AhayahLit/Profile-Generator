const Manager = require("../lib/Manager");

describe("Manager", () => {
    test("Getting the Correct Name", () => {
        var example4= new Manager("John", 1211, "1-800-000-0000", "Asdfqwerty@gmail.com");
         expect(example4.getName()) .toBe("John")
    })
    test("Getting the Correct Id", () => {
        var example4= new Manager("John", 1211, "1-800-000-0000", "Asdfqwerty@gmail.com");
         expect(example4.getId()) .toBe(1211)
    })
    test("Manager Number", () => {
        var example4= new Manager("John", 1211, "1-800-000-0000", "Asdfqwerty@gmail.com");
        expect(example4.getNumber()) .toBe("number")
    })
    test("Getting the Correct Email", () => {
        var example4= new Manager("John", 1211, "1-800-000-0000", "Asdfqwerty@gmail.com");
         expect(example4.getEmail()) .toBe("Asdfqwerty@gmail.com")
    })
    test("Are they a Employee?", () => {
        var example1= new Manager("John", 1211, "1-800-000-0000", "Asdfqwerty@gmail.com");
         expect(example1.getRole()) .toBe("Manager")
} ) 
})