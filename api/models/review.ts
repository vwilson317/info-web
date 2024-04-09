import {Picture} from './picture';

export interface Review {
    Id: number;
    Name: string;
    Description: string;
    Location: string;
    GeoLocation: string;
    Date: string;
    Rating: number;
    Price: string;
    Ingredients: string[];
    Pics: Picture[];
    }