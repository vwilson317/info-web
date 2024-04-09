import { Ingredient } from './ingredient';
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
    Ingredients: Ingredient[];
    Pics: Picture[];
    Insta: string;
    }