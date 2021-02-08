import { Element } from './../class/class';
import { MenuServices } from './../service/service';
import { Component, OnInit, EventEmitter, Output, Input, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output('scotrino-data') scontrinoData = new EventEmitter();
  @Output('addScontrinoA') scontrinoAdd = new EventEmitter();

  continue5:boolean = false;

  totale:number = 0;

  Menu:Element[] = [];
  panelist:Element[] = [];
  carnelist:Element[] = [];
  verdurelist:Element[] = [];
  formaggilist:Element[] = [];
  salselist:Element[] = [];

  constructor(private service: MenuServices, private route: Router, private router: ActivatedRoute) {
   }

  ngOnInit() {
    this.Menu = this.service.getMenu();
    this.panelist = this.service.getPane();
    this.carnelist = this.service.getCarne();
    this.verdurelist = this.service.getVerdura();
    this.formaggilist = this.service.getFormaggi();
    this.salselist = this.service.getSalse();
    }

    addIngrediente(ingredient:Element) {
      this.scontrinoAdd.emit(ingredient);
    }

    confirmScontrino() {
    let x:Element[] = this.service.getScontrino();
    this.totale = this.service.getTotale();

      if (this.totale<15)
      {
        alert("Spesa minima 15€")
      }
      else if (this.totale>49)
      {
        this.totale -= (this.totale * 12)/100
        alert(this.totale)
      }

    this.scontrinoData.emit(x);
  }
}
