var person = { name: "Gino", weight: 70 };
const TARGET_WEIGHT = person.weight - 3;
const WEIGHT_VARIANCE = 0.2;

const increaseWeight = (person) => (person.weight += WEIGHT_VARIANCE);
const decreaseWeight = (person) => (person.weight -= WEIGHT_VARIANCE);
const eatLots = () => Math.random() < 0.3;
const doExercise = () => Math.random() < 0.4;
let dayNumber = 0;

console.log(
  `By the begining of the year ${person.name} weights ${person.weight}`
);

while (person.weight > TARGET_WEIGHT) {
  //debugger
  if (eatLots()) {
    increaseWeight(person);
  }
  if (doExercise()) {
    decreaseWeight(person);
  }
  dayNumber++;
}

console.log(
  `After ${dayNumber} days,  ${person.name} weights ${person.weight.toFixed(1)}`
);
