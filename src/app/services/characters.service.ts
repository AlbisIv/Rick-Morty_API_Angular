//ng g s [vards]

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { Character, CharacterResponse } from "../models/character.model";
@Injectable({
    providedIn: "root"
})
export class charactersService {
    baseURL = 'https://rickandmortyapi.com/api';
    

    constructor(private http: HttpClient) { }
// ng add @angular/material
    getCharacters(query? : string): Observable<CharacterResponse> {
        console.log("Galvenais pieprasījums ar kveriju: " + query);
        return this.http.get<CharacterResponse>(`${this.baseURL}/character/${query? query : ''}`);
    }
    fetchMoreCharacters(nextPageLink?: string): Observable<CharacterResponse> {
        console.log("Links nākamajam peidžam: " +nextPageLink);
        return this.http.get<CharacterResponse>(`${nextPageLink}`);
    }

}