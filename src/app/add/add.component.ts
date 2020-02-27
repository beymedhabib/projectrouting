import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router';
import { CHECKBOX_VALUE_ACCESSOR } from 'angular-bootstrap-md';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
info: FormGroup;
// Position: '';
// tslint:disable-next-line: no-shadowed-variable
constructor(private ServiceService: ServiceService, private router: Router) { }
//  i = Math.floor(Math.random() * 1000) + 1;

ngOnInit() {
    this.info = new FormGroup({
      // id: new FormControl( this.i),
      task: new FormControl('', [Validators.required]),
      descrption: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      Position: new FormControl(CHECKBOX_VALUE_ACCESSOR, [Validators.required])
    });
  }
  ad() {
    this.ServiceService.add(this.info.value);
    this.router.navigateByUrl('/list');
  }
}
