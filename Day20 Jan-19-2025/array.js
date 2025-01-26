const students = ['John', 'Jane', 'Jack', 'Jill'];
console.log(students[0]);
console.log(students.length);
students.push('James');
students.unshift('Jerry');
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}