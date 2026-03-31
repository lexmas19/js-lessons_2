//  ინდექსაცია       0         1        2        3         4 ...
const students = ["გიორგი", "მარია", "ვოვა", "მარიამი", "სანდრო", "თევდორე", "ანდრეი"];

// მასივის სიგრძის გაგება
console.log(students.length);

// მესამე ინდექსზე არსებული სახელი
console.log(students[3]);

// მასივის ბოლოში ახალი სახელის ჩამატება
students.push("თორნიკე");
console.log(students);

// მაასივის დასაწყისში
students.unshift("ნიკოლოზი");
console.log(students);

//მასივსი ბოლოდან სახელის ამოღება
students.pop();
console.log(students);

// მასივის დასაწყსიდან სახელის ამოღება
students.shift();
console.log(students);

// კონკრეტულ ინდექსზე სახელის შეცვლა
students[0] = "ერიკ";
console.log(students);

// მასივსი შებრუნება
students.reverse();
console.log(students);

// მასივსი დალაგება ანბანის მიხედვით
students.sort();
console.log(students);

// კონკრეტულ ინდექსზე სახელის ამოშლა
delete students[0];
console.log(students);

// მასივის გასუფთავება
students.length = 0;
console.log(students);

// მასივიდან სახელების დაკოპირება და ახალ მასივში შენახვა ,  არ გვიცვლის ძველ მასივს, პარამეტრად გადაეცემა , საწყისი ინდექსი და საბოლოო ინდექსი
let newStudents = students.slice(0, 3);
console.log(newStudents);
console.log(students);

// მასივიდან სახელების ამოჭრა, გადაგვიკეთებ ორიგინალ მასივს და ამოჭრილ სახელებს ვინახავტ ახალ მასივში, პარამეტრებად გადაეცემა საწყისი ინდექსი და რამდენი სახელი უნდა ამოჭრას შესაბამისი ციფრი
let newStudents2 = students.splice(3, 2);
console.log(newStudents2);
console.log(students);

// სტრინგის გადაქცევა მასივად , ელემენტების დახლეჩვა
let userName = "თევდორე";
let userNameArray = userName.split("");
console.log(userNameArray);

// მასივში არსებული ელემენტების შეეერთბა
let finalName = userNameArray.join("");
console.log(finalName);
