module.exports = function findNarcissusFrom(people) {
  let narcissusName = '';
  let countKnowsNarc;

  for (let i = 0; i < people.length; i += 1) {
    narcissusName = people[i].name;

    countKnowsNarc = 0;

    for (let k = 0; k < people.length; k += 1) {
      if (people[k].know.includes(narcissusName)) {
        countKnowsNarc += 1;
      }
    }

    if (countKnowsNarc === people.length - 1 && people[i].know.length === 0) break;

    else narcissusName = '';
  }

  return narcissusName;
};
