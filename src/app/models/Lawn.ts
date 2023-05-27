import { Application } from './Application';

export interface Lawn {
    _id?: string;
    title: string;
    address: string;
    size: number;
    applications: Application[];
}
