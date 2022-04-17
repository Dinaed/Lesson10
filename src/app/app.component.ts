import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Airline } from './models/airline';
import { Passenger } from './models/passenger';
import { AirActions } from './states/air.actions';
import { AirState, AirStateModel } from './states/air.state';
import { PassengerActions } from './states/passenger.actions';
import { PassangerState, PassengerStateModel } from './states/passenger.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Lesson10';
  airlineId:number = 0;
  passengersId:string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
  
  }
  @Select(AirState) airlineState$?: Observable<AirStateModel>;
  @Select(PassangerState) passangerState$?: Observable<PassengerStateModel> ;
  
  fetchAir(){
    this.store.dispatch(new AirActions.fetchAir);
  }
  fetchAirById(id:number){
    this.store.dispatch( new AirActions.fetchAirById(id));
  }
  addAirline(){
    const newAirline = <Airline>{
      name: "Sri Lankan Airways by Andr",
      country: "Sri Lanka",
      logo: "https://upload.wikimedia.org/wikipedia/ru/7/78/SriLankan_Airlines_Logo.svg",
      slogan: "From Sri Lanka",
      head_quaters: "Katunayake, Sri Lanka",
      website: "www.srilankaairways.com",
      established: "1990"
    };
    this.store.dispatch( new AirActions.addAir(newAirline));  
  }
  
  addPassengerById(id:string){
    this.store.dispatch(new PassengerActions.fetchPassengerById(id));
  }

  uppdatePassenger(pass: Passenger){
    this.store.dispatch(new PassengerActions.updatePassenger(pass));
    console.log(pass);
  }
  deletePassenger(pass: Passenger){
    this.store.dispatch(new PassengerActions.deletePassenger(pass));
    console.log(pass);
  }
  uppdatePassengerPut(pass: Passenger){
    this.store.dispatch(new PassengerActions.updatePassengerPut(pass));
    console.log(pass);
  }
}


