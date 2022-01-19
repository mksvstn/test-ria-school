module.exports = function findNarcissusFrom(people) {
  let narcissusName = '';
  let whoKnowsNarcissus;

  const narcissusPerson = people.find((person) => person.know.length === 0);

  if (narcissusPerson) {
    whoKnowsNarcissus = people.filter((person) => person.know.includes(narcissusPerson.name));

    if (whoKnowsNarcissus.length === people.length - 1) { narcissusName = narcissusPerson.name; }
  }

  return narcissusName;
};
