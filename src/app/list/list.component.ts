import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tab = [];
  search: '';
  checks = [{name: 'UP',
value: 'UP'}, {name: 'DOWN', value: 'DOWN'}];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {
    this.tab = this.ServiceService.table;
  }
  DELETE(i) {
    const index = i;
    this.ServiceService.remove(index);
    // this.tab.splice(i , 1);
    // this.ServiceService.table = this.tab;
  }
  // addOrRemoveBullsPlayer(value: string) {
  //   // tslint:disable-next-line: prefer-const
  //   var indexOfEntry = this.selectedBullsPlayers.indexOf(value);
  //   if(indexOfEntry < 0) {
  //     this.selectedBullsPlayers.push(value);
  //   } else {
  //     this.selectedBullsPlayers.splice(indexOfEntry, 1);
  //   }
  // }

}
