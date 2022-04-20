import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { Passenger } from "../models/passenger";
import { PassengersService } from "../services/passengers.service";
import { PassengerActions } from "./passenger.actions";
import { patch, updateItem } from "@ngxs/store/operators";

export interface PassengerStateModel {
  passenger: Passenger[];
}

@State<PassengerStateModel>({
  name: 'passenger',
  defaults: {
    passenger: []
  }
})

@Injectable()
export class PassangerState {
constructor(private passenger : PassengersService){}
  
  @Selector()
  static passanger(state: PassengerStateModel) {
      return state.passenger;
  }

  @Action(PassengerActions.fetchPassengerById)
    fetchPassengerById(ctx: StateContext<PassengerStateModel>, payload: PassengerActions.fetchPassengerById) {
      return this.passenger.getPassengerById(payload.id).pipe(tap(passenger => {
        const state = ctx.getState();
        ctx.setState({...state,  passenger: [...state.passenger, passenger]});
      }))
    }
  
  @Action(PassengerActions.addPassenger)
  addPassenger(ctx: StateContext<PassengerStateModel>, payload: PassengerActions.addPassenger){
    return this.passenger.addPassenger(payload.passnger).pipe(tap(passenger => {
      const state = ctx.getState();
      ctx.setState({...state,  passenger: [...state.passenger, passenger]});
    }))
  }

  @Action(PassengerActions.updatePassenger)
  updatePassenger(ctx: StateContext<PassengerStateModel>, payload: PassengerActions.updatePassenger){
    return this.passenger.uppdatePassenger(payload.passnger).pipe(tap(passenger => {
      ctx.setState(patch({ passenger: updateItem(item => item!._id === payload.passnger._id, passenger) }));
      console.log(passenger);
    }))
  }

  @Action(PassengerActions.updatePassengerPut)
  updatePassengerPut(ctx: StateContext<PassengerStateModel>, payload: PassengerActions.updatePassengerPut){
    return this.passenger.uppdatePassengerPut(payload.passnger).pipe(tap(passenger => {
      ctx.setState(patch({ passenger: updateItem(item => item!._id === payload.passnger._id, passenger) }));
      console.log(passenger);
    }))
  }

  @Action(PassengerActions.deletePassenger)
  deletePassenger(ctx: StateContext<PassengerStateModel>, payload: PassengerActions.deletePassenger){
    return this.passenger.deletePassenger(payload.passnger).pipe(tap(passenger => {
      const state = ctx.getState();
      ctx.setState({ ...state, passenger: state.passenger.filter(item => item != payload.passnger) });
      console.log(passenger);
    }))
  }
}