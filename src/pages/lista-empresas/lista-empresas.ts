import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnterprisesProvider } from '../../providers/enterprises/enterprises';
import { AwardsProvider } from '../../providers/awards/awards';
import { ListaPremiosPage } from '../lista-premios/lista-premios';



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
  //entryComponents:[ ListaPremiosPage],
})
export class ListaEmpresasPage {

  enterprises: ArrayBuffer;
  listaPremiosPage: ListaPremiosPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public enterpriseProvider: EnterprisesProvider,
    public awardsProvider: AwardsProvider
    
    ) {
  }



  ionViewDidLoad() {
    
    
    this.enterpriseProvider.getAllEnterprises().subscribe(
      (data) =>
      {
        this.enterprises = data;
      },
      (error) =>
      {
        console.error(error);
      }
    );

  }

  selectEnterprise(empresa)
  {
    this.navCtrl.push(ListaPremiosPage, {empresa: empresa});
  }
}
