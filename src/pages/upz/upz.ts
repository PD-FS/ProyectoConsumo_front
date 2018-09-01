import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpzProvider } from '../../providers/upz/upz';

/**
 * Generated class for the UpzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upz',
  templateUrl: 'upz.html',
})
export class UpzPage {

  upzs: ArrayBuffer;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public upzProvider: UpzProvider
  ) {
  }

  ionViewDidLoad() {
    this.upzProvider.getUPZs().subscribe(
      (data) =>
      {
        this.upzs = data;
        console.log(data);
      },
      (error) =>
      {
        console.error(error);
      }
    );
    console.log('ionViewDidLoad UpzPage');

  }

}
