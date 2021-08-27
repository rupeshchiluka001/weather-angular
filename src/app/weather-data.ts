import { WeatherDataList } from "./weather-data-list";

export interface WeatherData {
    cod: string;
    list: WeatherDataList[];
    city: {
        name: string,
        country: string,
        sunrise: number,
        sunset: number,
    };
}
