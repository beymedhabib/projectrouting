import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  infoup: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor( private serviceservise: ServiceService , private _Activatedroute: ActivatedRoute, private router: Router) { }
  index = this._Activatedroute.snapshot.paramMap.get('i');

  ngOnInit() {
    this.infoup = new FormGroup({
      task: new FormControl(this.serviceservise.table[this.index].task),
      descrption: new FormControl(this.serviceservise.table[this.index].descrption),
      date: new FormControl(this.serviceservise.table[this.index].date)
    });
  }
  up() {
    this.serviceservise.update(this.index, this.infoup.value);
    this.router.navigateByUrl('/list');
  }

}
