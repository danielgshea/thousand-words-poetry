export default class Author {
    name: string;
    location: string;
    description: string;
    era: number;
    constructor(name: string, location: string, description: string, era: number) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.era = era;
    }

    get getName() {
        return this.name;
    }

    get getLocation() {
        return this.location;
    }

    get getDescription() {
        return this.description;
    }

    get getEra() {
        return this.era;
    }
}