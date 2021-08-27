export interface WeatherDataList {
    main: {
        temp: number,
        temp_min: number,
        temp_max: number,
        humidity: number
    };
    weather: {
        0: {
            id: number,
            description: string,
            icon: string
        }
    };
    wind: {
        speed: number
    };
    dt_txt: string;
    dt: number;
}
