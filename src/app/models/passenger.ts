import { Airline } from "./airline"

export interface Passenger { 	
_id:string,
name:string	,
trips:number,
airline:Airline[],
__v:number
}
