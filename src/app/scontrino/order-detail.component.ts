import { Element } from './../class/class';
import { MenuServices } from './../service/service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Output('scontrino_final') Scontrino_finale = new EventEmitter();
  public title = "Il tuo panino!"

  scontrinolist:Element[] = [];

  constructor(private service:MenuServices) { }

  ngOnInit() {
    this.scontrinolist = this.service.getScontrino();
  }

  getColor(value_color:number) {
    if (value_color < 3.1) {return 'green'}
    if (value_color > 3 && value_color < 6.1) {return 'orange'}
    if (value_color > 6) {return 'red'}
  }


  scontrinoDetail() {

  }

  removeIngredient(ingredient:Element) {
      this.scontrinolist= this.service.deleteElement(ingredient);
      this.Scontrino_finale.emit(this.scontrinolist);
  }
}
