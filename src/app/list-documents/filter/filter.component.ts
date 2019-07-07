import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent {

  down: string = "/assets/menu-down.png"
  up: string = "/assets/menu-up.png"
  visiblSettings: boolean = false
  icon: string = this.up

  showfilter(){
    this.visiblSettings = !this.visiblSettings
    this.icon = this.visiblSettings ? this.down: this.up
  }
}
