import { Component,NgModule,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

	public users: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  OnInit(){
  	this.users = this.navParams.data;
  	console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
