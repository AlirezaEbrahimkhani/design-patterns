"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    personInfo;
    constructor(personInfo) {
        this.personInfo = personInfo;
    }
}
const PersonSchema = () => ({
    firstName: "",
    lastName: "",
    age: 0,
    job: "",
});
class PersonBuilder {
    person;
    constructor() {
        this.person = PersonSchema();
    }
    setFirstName(name) {
        this.person.firstName = name;
        return this;
    }
    setAge(age) {
        this.person.age = age;
        return this;
    }
    setLastName(lastName) {
        this.person.lastName = lastName;
        return this;
    }
    setJob(job) {
        this.person.job = job;
        return this;
    }
    build() {
        const person = new Person(this.person);
        this.person = PersonSchema();
        return person;
    }
}
const personBuilder = new PersonBuilder();
const person = personBuilder
    .setFirstName("Alireza")
    .setLastName("Ebrahimkhani")
    .setAge(22)
    .setJob("Software Engineer")
    .build();
console.log(person.personInfo);
