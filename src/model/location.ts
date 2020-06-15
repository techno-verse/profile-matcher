export class PLocation {
    private latitude: number;
    private longitude: number;

    protected constructor() {
        this.latitude = 0;
        this.longitude = 0;
    }

    protected set_latitude(latitude: number) {
        this.latitude = latitude;
    }

    protected set_longitude(longitude: number) {
        this.longitude = longitude;
    }

    get_latitude() {
        return this.latitude;
    }

    get_longitude() {
        return this.longitude;
    }
}