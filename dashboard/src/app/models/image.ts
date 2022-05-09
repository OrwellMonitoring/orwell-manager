import { Collector } from "./collector";

export class Image {
    constructor(public id: number, public name: string, public collectors: Collector[] ) {}
}