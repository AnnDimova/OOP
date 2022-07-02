import Creature from "./Creature";

class Person extends Creature {
    private adress: string;
    private numberID: number;

    constructor(adress: string, numberID: number, name: string, age: number){
        super(name, age);
        this.adress = adress;
        this.numberID = numberID;
    }

    public getAdress(): string {
        return this.adress;
    }

    public getNumberID(): number {
        return this.numberID;
    }

    public getPerson(): string {
        return `Person's name is ${this.name} with adress ${this.adress}`
    }
}

export default Person;