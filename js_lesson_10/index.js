const person1 = {
  name: "George",
  surname: "Darsavelidze",
  age: 31,

  parents: {
    motherName: "Nana",
    fatherName: "gia",
  },

  languages: ["Georgian", "English", "Russian"],

  greeting: function () {
    alert("hi i am " + this.name);
  },
};

console.log(person1.age);
console.log(person1.name);
console.log(person1.surname);

console.log(person1["surname"]);

// person1.greeting();

console.log(Math.floor(12.7));
console.log(Math.ceil(12.7));
console.log(Math.round(12.7));

console.log(Math.random() * 10);
console.log(Math.random() * 100);

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 100));

console.log(person1.parents.motherName);

console.log(person1.languages);
console.log(person1.languages[2]);

console.log(person1);

person1.location = "Kutaisi";
console.log(person1);

person1.age = 35;
console.log(person1);

delete person1.surname;
console.log(person1);

let keyName = "languages";
console.log(person1[keyName]);
