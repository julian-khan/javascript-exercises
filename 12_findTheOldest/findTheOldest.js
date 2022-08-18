const findTheOldest = function(people) {

  calculateAge(people);

  people.sort((a, b) => { 
    return a.age - b.age;
  });
  return people.pop();
};

function calculateAge(people) {
  people.forEach((person) => {
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

