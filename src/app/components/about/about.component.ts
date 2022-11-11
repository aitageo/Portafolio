import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title : String;
  public subtitle : String;
  public email : String;


  constructor() {
    this.title = "Alfonso Adame Rueda";
    this.subtitle = "Desarrollador web";
    this.email = "aitageoenlaweb@gmail.com";
   }

  ngOnInit(): void {
  }

}
