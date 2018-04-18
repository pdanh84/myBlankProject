import { Component,NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from './../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users : any[] = [{ userName: 'pdanh84', password: '123456'}];

  constructor(public navCtrl: NavController) {

  }

  onLogin(){
  	console.log('login xxx');
  	this.navCtrl.push(UsersPage, this.users);
  }

}
