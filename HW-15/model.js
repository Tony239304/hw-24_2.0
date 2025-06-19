class Travel {
    constructor(to, startDate, finishDate, budget) {
        this.to = to;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.budget = budget;
    }
}

//==============Create Notebook=================
class TravelNotebook {
    #travels = [];

    addTravel(travel) {
        this.#travels.push(travel);
    }

    getAllTravels() {
        return this.#travels;
    }

    getTravelByDestination(destination) {
        return this.#travels.find(t => t.to.toLowerCase() === destination.toLowerCase());

    }

    removeTravel(travel) {
        this.#travels = this.#travels.filter(t => t !== travel);
    }

    updateTravel(oldTravel, newTravel) {
        const index = this.#travels.indexOf(oldTravel);
        if (index !== -1) {
            this.#travels[index] = newTravel;
        }
    }
}


