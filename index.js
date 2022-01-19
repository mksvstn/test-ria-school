module.exports = function findNarcissusFrom(people) {
  let narcissusName = '';

  const narcissusPerson = people.find((person) => person.know.length === 0);
  people.splice(people.indexOf(narcissusPerson), 1);

  if (narcissusPerson && people.every((person) => person.know.includes(narcissusPerson.name))) {
    narcissusName = narcissusPerson.name;
  }

  return narcissusName;
};
