import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { LocationService } from '../../shared/services/location.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-location-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor ],
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.scss'
})
export class LocationFormComponent {
  locationForm: FormGroup = new FormGroup({
    location: new FormControl('',)
  });

  newArray? : any;

  constructor(private locationService: LocationService){
    this.locationService = locationService;
  }

  // async onSubmit(form: FormGroup) {
  //   // console.log('Valid?', form.valid); // true or false
  //   // console.log('Name', form.value.name);
  //   // console.log('Email', form.value.email);
  //   // console.log('Message', form.value.message);
  //   console.log(form.value.location);
  //   let x = await this.locationService.getLocation(form.value.location);
  //   console.log(x);
  // }

  async onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); // true or false
    // console.log('Name', form.value.name);
    // console.log('Email', form.value.email);
    // console.log('Message', form.value.message);
    console.log(form.value.location);
    let x = await this.locationService.getLocation(form.value.location);
    console.log(x);
    this.newArray = x.results;
    console.log(this.newArray);
  }

}
