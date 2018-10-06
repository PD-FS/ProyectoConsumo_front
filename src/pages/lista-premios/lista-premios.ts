import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-premios',
  templateUrl: 'lista-premios.html',
})
export class ListaPremiosPage {

  empresa: any
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  {
    this.empresa = this.navParams.get('empresa');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPremiosPage');
  }

}
