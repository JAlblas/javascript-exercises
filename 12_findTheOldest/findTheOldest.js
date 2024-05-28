const findTheOldest = function (persons) {
    let newPersons = persons.map((person) => {
        return { "name": person.name, "age": person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth }
    });
    let sortedPersons = newPersons.sort((a, b) => b.age - a.age);
    return sortedPersons[0];
}
// Do not edit below this line
module.exports = findTheOldest;