const Employee = require("../lib/Employee");

describe("Employee", () => {
    test("Getting the Correct Name", () => {
        var example1= new Employee("Eric", 1211, "Lau1087054@gmail.com");
         expect(example1.getName()) .toBe("Eric")
    })
    test("Getting the Correct Id", () => {
        var example1= new Employee("Eric", 1211, "Lau1087054@gmail.com");
         expect(example1.getId()) .toBe(1211)
    })
    test("Getting the Correct Email", () => {
        var example1= new Employee("Eric", 1211, "Lau1087054@gmail.com");
         expect(example1.getEmail()) .toBe("Lau1087054@gmail.com")
    })
    test("Getting the Correct Email", () => {
        var example1= new Employee("Eric", 1211, "Lau1087054@gmail.com");
         expect(example1.getRole()) .toBe("Employee")
} ) 
})