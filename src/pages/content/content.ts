import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { DistrictAreaProvider } from '../../providers/district-area/district-area';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  district_areas: ArrayBuffer;

  constructor(
    public navCtrl: NavController, 
    public districtAreas: DistrictAreaProvider
  ) 
  {
    
  }

  ionViewDidLoad()
  { 
    console.log("Iniciando el contenido")
    this.districtAreas.query().subscribe(
      (data)=>
      {
        this.district_areas = data;
      },
      (error) =>
      {
        console.log(error)
      }
  
    )
  }

}
