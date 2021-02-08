import { ElementInterface } from './../interface/interface';
import { Element } from './../class/class';
import { Injectable} from '@angular/core';
@Injectable()

export class MenuServices {
  pchecker:number=0;
  vchecker:number=0;
  cchecker:number=0;
  schecker:number=0;
  fchecker:number=0;
  totale:number=0;

  scontrino:Element[] = [];
  Menu:ElementInterface[];

  listaPane:ElementInterface[] = [
      { name: "pane ai 4 cereali", value: 2.0, id:0, type:"pane", toggle:false},
      { name: "filoncino francese", value: 1.8, id:1, type:"pane", toggle:false},
      { name: "american bread", value: 2.5, id:2, type:"pane", toggle:false},
  ]

  listaCarne:ElementInterface[] = [
      { name: "chianina", value: 5.0, id:3, type:"carne", toggle:false},
      { name: "scottona", value: 4.5, id:4, type:"carne", toggle:false},
      { name: "black_angus", value: 7.5, id:5, type:"carne", toggle:false},
      { name: "picanha", value: 8.0, id:6, type:"carne", toggle:false},
      { name: "cinghiale", value: 6.0, id:7, type:"carne", toggle:false},
    ]

    listaVerdure:Element[] = [
      { name: "iceberg", value: 0.5, id:8, type:"verdure", toggle:false },
      { name: "pomodoro", value: 0.5, id:9, type:"verdure", toggle:false },
      { name: "carote", value: 0.5, id:10, type:"verdure", toggle:false },
      { name: "cipolla_caramellata", value: 2.0, id:11, type:"verdure", toggle:false },
      { name: "cetriolo", value: 1.0, id:12, type:"verdure", toggle:false },
    ]

    listaFormaggi:Element[] = [
      { name: "gorgonzola", value: 1.0, id:13, type:"formaggi", toggle:false },
      { name: "toma", value: 1.0, id:14, type:"formaggi", toggle:false },
      { name: "briè", value: 1.0, id:15, type:"formaggi", toggle:false},
      { name: "mozzarella", value: 1.0, id:16, type:"formaggi", toggle:false },
      { name: "fonduta", value: 1.0, id:17, type:"formaggi", toggle:false},
      { name: "squacquerone", value: 1.0, id:18, type:"formaggi", toggle:false },
    ]
    listaSalse:Element[] = [
      { name: "maionese", value: 0.5, id:19, type:"salse", toggle:false },
      { name: "kaetchup", value: 0.5, id:20, type:"salse", toggle:false },
      { name: "mostarda", value: 0.5, id:21, type:"salse", toggle:false },
      { name: "salsa_bbq", value: 0.5, id:22, type:"salse", toggle:false },
      { name: "tabasco", value: 0.5, id:23, type:"salse", toggle:false },
      { name: "salsa_rosa", value: 0.5, id:24, type:"salse" , toggle:false},
      { name: "pesto", value: 1.5, id:25, type:"salse", toggle:false },
      { name: "salsa_hamburgy", value: 0.5, id:26, type:"salse", toggle:false},
      { name: "salsa_worcester", value: 0.5, id:27, type:"salse", toggle:false },
      { name: "salsa_guacamole", value: 0.5, id:28, type:"salse", toggle:false },
    ]

    constructor() {} //perchè ci va il constructor?

    getMenu() {
      return this.Menu = this.listaPane.concat(this.listaCarne, this.listaVerdure, this.listaFormaggi, this.listaSalse);}
    getPane() {
      return this.listaPane;}
    getCarne() {
      return this.listaCarne;}
    getVerdura() {
      return this.listaVerdure;}
    getFormaggi() {
      return this.listaFormaggi}
    getSalse() {
      return this.listaSalse}
    getScontrino() {
        return this.scontrino;}
    getTotale() {
      return this.totale;}


    addIngredient(ingredient:Element){
        for (let i=0; i<this.Menu.length; i++) {
          if (ingredient.id === this.Menu[i].id) {
            if (ingredient.type === "pane" && this.pchecker<1) {
              this.pchecker = this.pchecker+1;
              this.scontrino.push(this.Menu[i]);
              this.totale = this.totale + this.Menu[i].value;
            }
            if (ingredient.type === "carne" && this.cchecker<1) {
              this.cchecker = this.cchecker+1;
              this.scontrino.push(this.Menu[i]);
              this.totale = this.totale + this.Menu[i].value;
            }
            if (ingredient.type === "verdure" && this.vchecker<3) {
              this.vchecker = this.vchecker+1;
              this.scontrino.push(this.Menu[i]);
              this.totale = this.totale + this.Menu[i].value;
            }
            if (ingredient.type === "formaggi" && this.fchecker<2) {
              this.fchecker = this.fchecker+1;
              this.scontrino.push(this.Menu[i]);
              this.totale = this.totale + this.Menu[i].value;
            }
            if (ingredient.type === "salse" && this.schecker<3) {
              this.schecker = this.schecker+1;
              this.scontrino.push(this.Menu[i]);
              this.totale = this.totale + this.Menu[i].value;
            }
          }
        }
      return this.scontrino;
    }

    deleteElement(ingredient:Element) {
      if (this.scontrino.includes(ingredient)) {
        if (ingredient.type === "pane" && this.pchecker > 0) {
          this.pchecker = this.pchecker-1;
          let index = this.scontrino.indexOf(ingredient);
          this.scontrino.splice(index, 1);
          this.totale = this.totale - ingredient.value;
        }
        if (ingredient.type === "carne" && this.cchecker > 0) {
          this.cchecker = this.cchecker-1;
          let index = this.scontrino.indexOf(ingredient);
          this.scontrino.splice(index, 1);
          this.totale = this.totale - ingredient.value;
        }
        if (ingredient.type === "verdure" && this.vchecker > 0) {
          this.vchecker = this.vchecker-1;
          let index = this.scontrino.indexOf(ingredient);
          this.scontrino.splice(index, 1);
          this.totale = this.totale - ingredient.value;
        }
        if (ingredient.type === "formaggi" && this.fchecker > 0) {
          this.fchecker = this.fchecker-1;
          let index = this.scontrino.indexOf(ingredient);
          this.scontrino.splice(index, 1);
          this.totale = this.totale - ingredient.value;
        }
        if (ingredient.type === "salse" && this.schecker > 0) {
          this.schecker = this.schecker-1;
          let index = this.scontrino.indexOf(ingredient);
          this.scontrino.splice(index, 1);
          this.totale = this.totale - ingredient.value;
        }
      }
        return this.scontrino;
    }
}
