import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './sardaelici.html',
  styleUrls: ['./sarda.css','./sidebar.css','./rigth.css','./Button-header.css','./Button-text.css','./Button-header.css']
})
export class HomeComponent implements OnInit {
  togglemenu:boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  animation(){
    const rigth= document.getElementById('sidebar-right');
    const classRigth = rigth.className;
    if (classRigth.includes('hiddenr')) { // SE INCLUDE IDDEN VUOL DIRE CHE E' GIA NASCOSTO
        rigth.className = 'sidedestra';
    } else { // SE E' VISIBILE
        rigth.className = 'sidedestra hiddenr'; // PORCO DIO
    }
  }

  test() {
    const sidebar = document.getElementById('sidebar-left');
    const classSidebar = sidebar.className;
    if (classSidebar.includes('hidden')) { // SE INCLUDE IDDEN VUOL DIRE CHE E' GIA NASCOSTO
        sidebar.className = 'sidenav';
    } else { // SE E' VISIBILE
        sidebar.className = 'sidenav hidden'; // PORCO DIO

    }
  }

  menu() {
    this.togglemenu = !this.togglemenu;
    }
  }
