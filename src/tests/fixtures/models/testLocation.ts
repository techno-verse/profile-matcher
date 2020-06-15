import { PLocation } from "../../../model/location"

class TestLocation extends PLocation{
    constructor(){
        super()
    }

    test_set_longitude(data: number){
        this.set_longitude(data)
    }
    test_set_latitude(data: number){
        this.set_latitude(data)
    }
}