const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    test("Getting the Correct Name", () => {
        var example3= new Engineer("John", 1211, "Asdfqwerty@gmail.com");
         expect(example3.getName()) .toBe("John")
    })
    test("Getting the Correct Id", () => {
        var example3= new Engineer("John", 1211, "Asdfqwerty@gmail.com");
         expect(example3.getId()) .toBe(1211)
    })
    test("Github", () => {
        var example3= new Engineer("John", 1211, "github", "Asdfqwerty@gmail.com");
        expect(example3.getGithub()) .tobe("github")
    })
    test("Getting the Correct Email", () => {
        var example3= new Engineer("John", 1211, "Asdfqwerty@gmail.com");
         expect(example3.getEmail()) .toBe("Asdfqwerty@gmail.com")
    })
    test("Are they a Engineer?", () => {
        var example3= new Engineer("John", 1211, "Asdfqwerty@gmail.com");
         expect(example3.getRole()) .toBe("Engineer")
} ) 
})