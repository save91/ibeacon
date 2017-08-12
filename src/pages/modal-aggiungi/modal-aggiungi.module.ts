import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAggiungiPage } from './modal-aggiungi';

@NgModule({
  declarations: [
    ModalAggiungiPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAggiungiPage),
  ],
})
export class ModalAggiungiPageModule {}
