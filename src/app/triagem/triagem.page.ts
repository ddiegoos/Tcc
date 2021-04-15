import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-triagem',
  templateUrl: './triagem.page.html',
  styleUrls: ['./triagem.page.scss'],
})
export class TriagemPage{

  constructor(public navCtrl: NavController) { }

  carregartela1(page){
    this.navCtrl.navigateForward(page);
  }
}
