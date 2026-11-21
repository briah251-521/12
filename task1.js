function Student(firstName, lastName, age, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses
}

let student = new Student("Anatoly", "Petrovych", 19, "Math, History, Anatomy" )

console.log(student)
