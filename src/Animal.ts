import Creature from "./Creature";


abstract class Animal {
    protected color: string;
    protected creature: Creature;

    protected constructor(color: string, creature: Creature) {
        this.color = color;
        this.creature = creature;
    }

    public abstract sound(): void;
}

export default Animal;