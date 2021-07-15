import moment from "moment";
import {dateFormat} from "./constants";

export function sameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

export function parseJWT(jwt: string): [object, { exp: number }, string] {
    const jwtParts = jwt.split('.') as [string, string, string];
    const header = JSON.parse(atob(jwtParts[0]));
    const payload = JSON.parse(atob(jwtParts[1]));
    const signature = jwtParts[2];

    return [header, payload, signature];
}

export function setToHappen(fn: Function, timestamp: number): number {
    const t = new Date(timestamp).getTime() - new Date().getTime();
    return setTimeout(fn, t);
}