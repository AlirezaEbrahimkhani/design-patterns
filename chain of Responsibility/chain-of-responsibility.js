class Person {
  constructor(personInfo) {
    this.personInfo = personInfo;
  }
}

const PersonSchema = () => ({
  name: null,
  family: null,
  age: null,
  job: null,
});

class PersonBuilder {
  constructor() {
    this.person = PersonSchema();
  }

  setName(name) {
    this.person.name = name;
    return this;
  }

  setAge(age) {
    this.person.age = age;
    return this;
  }

  setFamily(family) {
    this.person.family = family;
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
  .setName("Alireza")
  .setFamily("Ebrahimkhani")
  .setAge(22)
  .setJob("Software Engineer")
  .build();

console.log(person.personInfo);
