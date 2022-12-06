/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 3 caracteres.',
      },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      {
        tipo: 'minlength',
        mensagem: 'A senha deve ter pelo menos 6 caracteres.',
      },
      {
        tipo: 'maxlength',
        mensagem: 'A senha deve ter no máximo 8 caractéres.',
      },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'Deve ser igual a senha.' },
      {
        tipo: 'minlength',
        mensagem: 'A senha deve ter pelo menos 8 caracteres.',
      },
    ]
  }

  constructor(private alertController: AlertController, private formsBuilder: FormBuilder) {
    this.formCadastro = this.formsBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
    });
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
