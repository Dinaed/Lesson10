import { Airline } from "../models/airline";

export namespace AirActions {
  export class fetchAir {
    static readonly type = '[airlines] fetch airlines';
    constructor() {}
  }
  export class fetchAirById{
    static readonly type = '[airlines] fetch airlines by id';
    constructor(public id:number) {}
  }
  export class addAir {
    static readonly type = '[airlines] add airlines';
    constructor(public airLine: Airline) {}
  }
}