import { Component, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Location, LocationResponse } from 'src/app/models/location.model';
import {locationsService } from '../../services/locations.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: Location[] | undefined;
  locationsSubscription: Subscription | undefined;
  nextPageLink: string | undefined;
  previousPageLink: string | undefined;
  currentPage: string | undefined;

  searchForm: FormGroup = this.fb.group({});

  constructor(
    private locationsService: locationsService,
    private fb: FormBuilder) { }
    

  ngOnInit(): void {
    this.locationsSubscription = this.locationsService.getLocations()
    .subscribe((response: LocationResponse)=> {
    this.locations = response.results;
    })
    this.buildForm();
  }

  filterbyQueries():void {
    let query = ""
    const name = this.searchForm.get('nameQuery');
    const dimension = this.searchForm.get('dimensionQuery');
    if(name?.value !== "" && dimension?.value !== ""){
      query = `?name=${name?.value}&dimension=${dimension?.value}`;
    } else if(name?.value !=="") {
      query = `?name=${name?.value}`
    } else {
      query = `?dimension=${dimension?.value}`
    }
    this.locationsSubscription = this.locationsService.getLocations(query)
    .subscribe((response: LocationResponse)=> {
      this.locations = response.results;
    })
  }

  buildForm(): void {
    this.searchForm = this.fb.group({
      nameQuery: [''],
      dimensionQuery: [""],
    })
}
}