import { Component, Input } from '@angular/core';
import { City } from '../../shared/models/City';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { citySelected } from '../reducers/city.actions';
@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [NgIf],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss'
})
export class CitySelectorComponent {
  @Input() city?: City;

  constructor(private store: Store<{selectCityReducer: string}>){}

  cityIsSelected(city: City) {
    this.store.dispatch(citySelected(city));
  }
}
