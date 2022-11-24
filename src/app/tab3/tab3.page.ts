import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, MinLengthValidator, Validators} from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formCadastro: FormGroup;

  constructor(private alertController: AlertController, private formsBuilder: FormBuilder) {
    this.formCadastro = this.formsBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
    });
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formCadastro.valid);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      message: 'Volte para a página de login e entre!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
