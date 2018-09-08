import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistrictAreaPage } from './district-area';

@NgModule({
  declarations: [
    DistrictAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(DistrictAreaPage),
  ],
})
export class DistrictAreaPageModule {}
