import { City } from "../../../model/city"

class TestCity extends City{
    constructor(){
        super()
    }

    test_set_city(data: string){
        this.set_city(data)
    }

    test_set_country(data: string){
        this.set_country(data)
    }
    test_set_state(data: string){
        this.set_state(data)

    }

}