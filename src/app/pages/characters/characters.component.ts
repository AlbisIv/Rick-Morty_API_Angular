import { Component, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Character, CharacterResponse } from 'src/app/models/character.model';
import {charactersService } from '../../services/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] | undefined;
  charactersSubscription: Subscription | undefined;
  nextPageLink: string | undefined;

  searchForm: FormGroup = this.fb.group({});

  constructor(
    private charactersService: charactersService,
    private fb: FormBuilder) { }
    

  ngOnInit(): void {
    this.charactersSubscription = this.charactersService.getCharacters()
    .subscribe((response: CharacterResponse)=> {
      this.characters = response.results;
      this.nextPageLink = response.info.next;
    })
    this.buildForm();
  }

  filterbyQueries():void {
    let query = ""
    const name = this.searchForm.get('nameQuery');
    const gender = this.searchForm.get('genderQuery');
    console.log("genders iekš Metodes: " +gender?.value)
    if(name?.value !== "" && gender?.value !== ""){
      query = `?name=${name?.value}&gender=${gender?.value}`;
    } else if(name?.value !=="") {
      query = `?name=${name?.value}`
    } else {
      query = `?gender=${gender?.value}`
    }
    this.charactersSubscription = this.charactersService.getCharacters(query)
    .subscribe((response: CharacterResponse)=> {
      this.characters = response.results;
      this.nextPageLink = response.info.next;
    })
  }
  getMoreCharacters(): void {
    this.charactersSubscription = this.charactersService.fetchMoreCharacters(this.nextPageLink)
    .subscribe((response: CharacterResponse)=> {
      if(this.characters){
        console.log('notiek gets!')
        this.characters = [...this.characters, ...response.results];
        this.nextPageLink = response.info.next;
      } else{

        console.log('nenotiek gets!')
      }
    })
  }
  buildForm(): void {
    this.searchForm = this.fb.group({
      nameQuery: [''],
      genderQuery: [""],
    })
}
}

