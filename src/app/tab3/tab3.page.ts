import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController, private formsBuilder: FormBuilder) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      message: 'Volte para a página de login e entre!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
