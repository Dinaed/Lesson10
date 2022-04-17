import { Passenger } from "../models/passenger";


export namespace PassengerActions {
  export class fetchPassengerById {
    static readonly type = '[passenger] fetch passengers';
    constructor( public id:string ) {}
  }

  export class addPassenger {
    static readonly type = '[passenger] add passenger';
    constructor( public passnger:Passenger ) {}
  }

  export class updatePassenger {
    static readonly type = '[passenger] update passenger by post';
    constructor( public passnger:Passenger ) {}
  }

  export class updatePassengerPut {
    static readonly type = '[passenger] update passenger by put';
    constructor( public passnger:Passenger ) {}
  }

  export class deletePassenger {
    static readonly type = '[passenger] delete passenger';
    constructor( public passnger:Passenger ) {}
  }
}