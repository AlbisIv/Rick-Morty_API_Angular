//ng g s [vards]

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { Location, LocationResponse } from "../models/location.model";
@Injectable({
    providedIn: "root"
})
export class locationsService {
    baseURL = 'https://rickandmortyapi.com/api';
    
    constructor(private http: HttpClient) { }
    getLocations(query? : string): Observable<LocationResponse> {
        return this.http.get<LocationResponse>(`${this.baseURL}/location/${query? query : ''}`);
    }
    fetchPageByLink(link? : string): Observable<LocationResponse>{
        return this.http.get<LocationResponse>(""+link);
    }
}