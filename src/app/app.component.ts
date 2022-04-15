import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Airline } from './models/airline';
import { AirActions } from './states/air.actions';
import { AirState, AirStateModel } from './states/air.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Lesson10';
  // airlines: Airline[] = [];
  // passengers: Passenger[] = [];
  airlineId:number = 0;
  // passengersId:string = '';

  constructor(private store: Store){}

  ngOnInit(): void {
  
  }
  @Select(AirState) airlineState$?: Observable<AirStateModel>
  
  fetchAir(){
    this.store.dispatch(new AirActions.fetchAir)
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
  
}


//private airlineService: AirlinesService, private passengerService: PassengersService, public indicator:IndikatorService