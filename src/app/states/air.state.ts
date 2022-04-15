import { Injectable } from "@angular/core";
import { Action, NgxsOnInit, State, StateContext } from "@ngxs/store";
import { Airline } from "../models/airline";
import { AirlinesService } from "../services/airlines.service";
import { AirActions } from "./air.actions";

export interface AirStateModel {
  airlines: Airline[];
}

@State<AirStateModel>({
  name: 'airlines',
  defaults: {
    airlines: []
  }
})

@Injectable()
export class AirState implements NgxsOnInit{
  constructor(private airLines: AirlinesService ){}
  
  ngxsOnInit(ctx?: StateContext<any>) {
    
  }

  @Action(AirActions.fetchAir)
    fetchAir(ctx: StateContext<AirStateModel>) {
      this.airLines.getAirlaines().subscribe(airLines => {
        const state = ctx.getState();
      ctx.setState({...state,  airlines: airLines});
      })  
  }

  @Action(AirActions.addAir)
    addAir(ctx: StateContext<AirStateModel>, payload : AirActions.addAir ) {
      this.airLines.addAidline(payload.airLine).subscribe(airLine => {
        const state = ctx.getState();
      ctx.setState({...state,  airlines: [...state.airlines, airLine]});
      })  
  }

   @Action(AirActions.fetchAirById)
   fetchAirById(ctx: StateContext<AirStateModel>, payload : AirActions.fetchAirById ) {
      this.airLines.getAirlainesById(payload.id).subscribe(airLine => {
        const state = ctx.getState();
        ctx.setState({...state,  airlines: [...state.airlines, airLine]});
      })  
   }
}