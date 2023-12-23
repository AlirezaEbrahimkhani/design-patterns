import { IPerson } from "./person.interface";

class Person {
  personInfo: IPerson;
  constructor(personInfo: IPerson) {
    this.personInfo = personInfo;
  }
}

const PersonSchema = (): IPerson => ({
  firstName: "",
  lastName: "",
  age: 0,
  job: "",
});

class PersonBuilder {
  person: IPerson;
  constructor() {
    this.person = PersonSchema();
  }

  setFirstName(name: string) {
    this.person.firstName = name;
    return this;
  }

  setAge(age: number) {
    this.person.age = age;
    return this;
  }

  setLastName(lastName: string) {
    this.person.lastName = lastName;
    return this;
  }

  setJob(job: string) {
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
