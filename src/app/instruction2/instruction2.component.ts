import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-instruction2',
  templateUrl: './instruction2.component.html',
  styleUrls: ['./instruction2.component.css']
})
export class Instruction2Component implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
  
}
