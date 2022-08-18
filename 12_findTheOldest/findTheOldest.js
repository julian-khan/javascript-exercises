const findTheOldest = function(people) {

  people.forEach((person) => { //extract to separate function
    if (!( person.hasOwnProperty('yearOfDeath'))) {

    const date = new Date();
    const currentYear = date.getFullYear();

    person.age = currentYear - person.yearOfBirth;
    } else { 
    person.age = person.yearOfDeath - person.yearOfBirth;
    }
  });

  people.sort((a, b) => { 
    return a.age - b.age;
  });

  return people[-1]; //FIX this return statement

};


const people = [
          {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
  ]

  

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
