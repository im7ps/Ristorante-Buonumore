import { ElementInterface } from './../interface/interface';
import { MenuServices } from './../service/service';
import { Element } from './../class/class';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.css']
})
export class MenuOrderComponent implements OnInit {
  @Output ('scontrino-data') scontrinoData = new EventEmitter();

  localscontrino:Element[];

  constructor(private service:MenuServices) { }

  ngOnInit() {
  }
    addElement(ingredient:Element) {


      const objs = new Observable(subscriber => {

      //si possono chiamare 3 metodi, next, error e complete
      subscriber.next(this.localscontrino);
      subscriber.complete(); //è una specie di return
      });


      objs.subscribe(
        localscontrino => {
        localscontrino = this.service.addIngredient(ingredient);
        },
      error => {
        console.log(error);
        },
      () => {
        console.log('values emitted');
        },
      )
      this.scontrinoData.emit(this.localscontrino);
    }

    confirmScontrino(localscontrino) {
      this.scontrinoData.emit(this.localscontrino);
    }
  }
