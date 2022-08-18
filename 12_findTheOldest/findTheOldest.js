const findTheOldest = function(people) {

  const copiedArr = [...people];

  calculateAge(copiedArr);

  copiedArr.sort((a, b) => { 
    return a.age - b.age;
  });
  return copiedArr.pop();
};

function calculateAge(copiedArr) {
  copiedArr.forEach((person) => {
    if (!(person.hasOwnProperty('yearOfDeath'))) {

      const date = new Date();
      const currentYear = date.getFullYear();

      person.age = currentYear - person.yearOfBirth;
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
  });
}

// Do not edit below this line
module.exports = findTheOldest;

