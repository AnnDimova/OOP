import Animal from "./Animal";
import Creature from "./Creature";

class Cat extends Animal {
    private breed: string;

    constructor(color: string, creature: Creature, breed: string) {
        super(color, creature);
        this.breed = breed;
    }

    public sound(): void {
        console.log(`The name of this cat with breed ${this.breed} is ${this.creature.name}. His color is ${this.color} and he is ${this.creature.age}. The sound he makes is meow meow.`)
    }
}


export default Cat;