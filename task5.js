const users = [
  { name: "Максим", email: "maksym@example.com", age: 25 },
  { name: "Ірина", email: "iryna@example.com", age: 30 },
  { name: "Артем", email: "artem@example.com", age: 19 }
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}