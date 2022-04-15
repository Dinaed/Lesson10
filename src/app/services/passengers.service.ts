import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Passenger } from "../models/passenger";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PassengersService {

constructor(private httpClient: HttpClient) { }

  getPassengerById(id:string): Observable<Passenger>{
    return this.httpClient.get<Passenger>(`https://api.instantwebtools.net/v1/passenger/${id}`);
  }

  addPassenger(newPassenger: Passenger): Observable<Passenger> {
    return this.httpClient.post<Passenger>('https://api.instantwebtools.net/v1/passenger', newPassenger);
  }

  uppdatePassenger(uppdatePassenger:Passenger): Observable<Passenger> {
    return this.httpClient.patch<Passenger>(`https://api.instantwebtools.net/v1/passenger/${uppdatePassenger._id}`, uppdatePassenger);
  }

  uppdatePassengerPut(uppdatePassenger:Passenger): Observable<Passenger> {
    return this.httpClient.put<Passenger>(`https://api.instantwebtools.net/v1/passenger/${uppdatePassenger._id}`, uppdatePassenger);
  }

  deletePassenger(passenger:Passenger): Observable<Passenger> {
    return this.httpClient.delete<Passenger>(`https://api.instantwebtools.net/v1/passenger/${passenger._id}`);
  }
}
