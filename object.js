const student = {
  firstName: "Mark",
  lastName: "Sakaberg",
  birthYear: 1985,

  getAge: function(currentYear){
    return currentYear - this.birthYear;
  }
};

document.getElementById("demo").innerHTML = (`${student.firstName} ${student.lastName} ${student.birthYear}`);
console.log(`${student.firstName} ${student.lastName} ${student.birthYear}`);
document.write(`${student.getAge(2019)}`)