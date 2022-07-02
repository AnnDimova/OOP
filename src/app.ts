import Cat from "./Cat";
import Creature from "./Creature";
import Dog from "./Dog";
import Person from "./Person";

let creature: Creature = new Creature('Ivan', 27);
console.log(creature.name);

let person: Person = new Person('Sofia', 6565, 'Ivan', 27)
console.log(person)

let dog: Dog = new Dog('brown', creature, 'corgi');
dog.sound();

let cat: Cat = new Cat('white', creature, 'sphynx');
cat.sound();