import { PLocation } from "./location"

export class City extends PLocation {

    private id: string;
    private city: string;
    private state: string;
    private country: string;

    constructor() {
        super();
        this.id = "";
        this.city = "";
        this.state = "";
        this.country = "";
    }

    protected set_city(city: string) {
        this.city = city;
    }

    protected set_state(state: string) {
        this.state = state;
    }


    protected set_country(country: string) {
        this.country = country;
    }

    get_city(): string {
        return this.city;
    }

    get_state(): string {
        return this.state;
    }

    get_country(): string {
        return this.country;
    }

}