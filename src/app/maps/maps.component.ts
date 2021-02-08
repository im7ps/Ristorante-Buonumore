import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-maps',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class MapsComponent {
  lat: number = 38.046;
  lng: number = 15.39;
}
