const Employee = require("../lib/Employee");

describe("Employee", () => {
    test("Getting the Correct Name", () => {
        var example1= new Employee("John", 1211, "Asdfqwerty@gmail.com");
         expect(example1.getName()) .toBe("John")
    })
    test("Getting the Correct Id", () => {
        var example1= new Employee("John", 1211, "Asdfqwerty@gmail.com");
         expect(example1.getId()) .toBe(1211)
    })
    test("Getting the Correct Email", () => {
        var example1= new Employee("John", 1211, "Asdfqwerty@gmail.com");
         expect(example1.getEmail()) .toBe("Asdfqwerty@gmail.com")
    })
    test("Are they a Employee?", () => {
        var example1= new Employee("John", 1211, "Asdfqwerty@gmail.com");
         expect(example1.getRole()) .toBe("Employee")
} ) 
})