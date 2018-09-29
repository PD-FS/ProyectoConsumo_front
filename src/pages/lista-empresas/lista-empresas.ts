import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnterprisesProvider } from '../../providers/enterprises/enterprises';

/**
 * Generated class for the ListaEmpresasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-empresas',
  templateUrl: 'lista-empresas.html',
})
export class ListaEmpresasPage {

enterprises: ArrayBuffer;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public enterpriseProvider: EnterprisesProvider
    ) {
  }



  ionViewDidLoad() {
    
    
    this.enterpriseProvider.getAllEnterprises().subscribe(
      (data) =>
      {
        console.log("Buscando empresas");
        this.enterprises = data;
        console.log(data);
      },
      (error) =>
      {
        console.error(error);
      }
    );

  }

}
