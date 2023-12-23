const Student = {
  name: "John Doe",
  age: 22,
  score: 85,
  schoolName: "Thomas Jefferson",
};

// without reflect
const withoutReflectStudent = new Proxy(Student, {
  get: (obj: any, prop: any) => {
    return `Student ${prop} is ${obj[prop]}`;
  },

  set: (obj, prop, value) => {
    if (typeof obj[prop] != typeof value) {
      throw new TypeError("Type of values is not the same.");
    }
    obj[prop] = value;
    return true;
  },
});

// with reflect
const withReflectStudent = new Proxy(Student, {
  get: (obj, prop: any) => {
    return `Student ${prop} is ${Reflect.get(obj, prop)}`;
  },

  set: (obj, prop, value) => {
    if (typeof Reflect.get(obj, prop) != typeof value) {
      throw new TypeError("Type of values is not the same.");
    }
    Reflect.set(obj, prop, value);
    return true;
  },
});

console.log(withReflectStudent.name);
console.log(withoutReflectStudent.name);
