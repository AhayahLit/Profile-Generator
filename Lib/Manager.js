class Manager {
    constructor(name, id, number, email) {
        this.name= name;
        this.id= id;
        this.number= number;
        this.email= email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getNumber() {
        return this.number;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Manager'; 
    }
}

module.exports= Manager;