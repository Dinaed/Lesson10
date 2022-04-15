import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Airline } from "../models/airline";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

constructor(private httpClient: HttpClient) { }

getAirlaines(): Observable<Airline[]>{
  return this.httpClient.get<Airline[]>('https://api.instantwebtools.net/v1/airlines');
}

getAirlainesById(id:number): Observable<Airline>{
  return this.httpClient.get<Airline>(`https://api.instantwebtools.net/v1/airlines/${id}`);
}

addAidline(newAirline: Airline): Observable<Airline> {
  return this.httpClient.post<Airline>('https://api.instantwebtools.net/v1/airlines', newAirline);
}



}
