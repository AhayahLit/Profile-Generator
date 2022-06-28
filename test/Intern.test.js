const Intern = require("../lib/Intern");

describe("Engineer", () => {
    test("Getting the Correct Name", () => {
        var example2= new Intern("John", 1211, "school", "Asdfqwerty@gmail.com");
         expect(example2.getName()) .toBe("John")
    })
    test("Getting the Correct Id", () => {
        var example2= new Intern("John", 1211, "school", "Asdfqwerty@gmail.com");
         expect(example2.getId()) .toBe(1211)
    })
    test("School", () =>  {
        var example2= new Intern("John", 1211, "school", "Asdfqwerty@gmail.com");
        expect(example2.getSchool()) .tobe("School")
    })
    test("Getting the Correct Email", () => {
        var example2= new Intern("John", 1211, "school", "Asdfqwerty@gmail.com");
         expect(example2.getEmail()) .toBe("Asdfqwerty@gmail.com")
    })
    test("Are they a Intern", () => {
        var example2= new Intern("John", 1211, "school", "Asdfqwerty@gmail.com");
         expect(example2.getRole()) .toBe("Intern")
} ) 
})