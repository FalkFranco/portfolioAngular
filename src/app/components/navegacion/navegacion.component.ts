import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  nav_bar = false;
  logo_ff = true;  
  @HostListener("document:scroll")
  scrollfunction() {
    (document.documentElement.scrollTop > 1500 ? this.nav_bar = true : this.nav_bar = false) 
  }
  
  mobileMenu(): void {
    // console.log('Anda el menu')
  }
  
}
