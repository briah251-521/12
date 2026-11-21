const person = {
  firstName: "Олена",
  lastName: "Коваленко",
  age: 22
};

person.email = "olena.kovalenko@example.com";

// Видаляємо властивість age
delete person.age;

console.log(person);