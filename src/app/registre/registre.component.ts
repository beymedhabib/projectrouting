import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  i = Math.floor(Math.random() * 1000) + 1;

  constructor(private serviseservise: ServiceService , private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      id: new FormControl( this.i),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.serviseservise.register(this.registerForm.value);
    // this.submitted = true;
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }
    // this.loading = true;
    // this.router.navigateByUrl('/login');
}
}


