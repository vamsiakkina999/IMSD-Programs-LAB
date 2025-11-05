const student = {
  name: "Alice Johnson",
  age: 21,
  course: "Computer Science",
  gpa: 3.8
};

console.log("=== Using for...in (iterate over keys directly) ===");
for (let key in student) 
{
  console.log(key+" -> "+student[key]);
}

// Convert object to an array of [key, value] pairs for forEach
console.log("\n=== Using forEach on Object.entries() ===");
Object.entries(student).forEach(([key, value]) => {
  console.log(key+" -> "+value);
});

// Use for...of with Object.entries to iterate key-value pairs
console.log("\n=== Using for...of on Object.entries() ===");
for (let [key, value] of Object.entries(student)) {
  console.log(key+" -> "+value);
}
