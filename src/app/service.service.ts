import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // table = [];
  connectuser = JSON.parse(localStorage.getItem('connectuser')) || {};
  list = JSON.parse(localStorage.getItem('users')) || [];
  table = JSON.parse(localStorage.getItem('tab')) || [];
  constructor(private http: HttpClient, private routes: Router) {
      if (localStorage.getItem('connectuser')) {
        this.connectuser = JSON.parse(localStorage.getItem('connectuser'));
      } else {
        this.connectuser = null;
      }
   }
  gethttp(loc) {
  return this.http.get( 'http://api.weatherstack.com/current?access_key=f2601fada874e7350cbbb8767b7e7110&query=' + loc );
  }
  add(info) {
    this.table.push(info);
    localStorage.setItem('tab', JSON.stringify(this.table));
    console.log(this.table);
  }
  remove(i) {
    this.table.splice(i , 1);
    localStorage.setItem('tab', JSON.stringify(this.table));
  }
  update(i, form) {
    this.table[i] = form;
    localStorage.setItem('tab', JSON.stringify(this.table));
  }
  register(user) {
    // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < list.length; i++) {
  //  if (user.username !== list[i].username) {
     this.list.push(user);
     localStorage.setItem('users', JSON.stringify(this.list));
  //  }
  //   else {
  //    alert('Change username Please');
  //  }
      //  }
}
login(login) {
  const list = JSON.parse(localStorage.getItem('users'));
  if (this.connectuser == null) {
    this.connectuser = {};
  }
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < list.length; i++) {
  if ((login.username === list[i].username) && (login.password === list[i].password)) {
    this.connectuser = list[i];
    localStorage.setItem('connectuser', JSON.stringify(this.connectuser));
    this.routes.navigateByUrl('/list');
  }
  //  else {
  //   // alert('Invalide');
  // }
}
}
}

