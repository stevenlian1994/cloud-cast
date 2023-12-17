import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../shared/models/City';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [NgIf],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss'
})
export class CitySelectorComponent {
  @Input() city?: City;
  @Output() citySelected = new EventEmitter<City>();

  cityIsSelected(city: City) {
    this.citySelected.emit(city);
  }
}
