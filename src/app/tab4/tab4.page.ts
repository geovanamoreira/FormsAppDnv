/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  formCadastro: FormGroup;

  mensagens = {
    nomeProduto: [
      { tipo: 'required', mensagem: 'O campo Nome do Produto é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 4 caracteres.',
      },
    ],
    descricao: [
      { tipo: 'required', mensagem: 'O campo Descrição é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 4 caracteres.',
      },

    ],
    validade: [
      { tipo: 'required', mensagem: 'O campo Validade é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 4 caracteres.',
      },
    ],
    preco: [
      { tipo: 'required', mensagem: 'O campo Preço é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'A senha deve ter pelo menos 2 caracteres.',
      },
    ],

  }

  constructor(private alertController: AlertController, private formsBuilder: FormBuilder) {
    this.formCadastro = this.formsBuilder.group({
      nomeProduto: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      validade:['', Validators.compose([Validators.required, Validators.minLength(4)])],
      preco: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formCadastro.valid);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      message: 'Produto Cadastrado!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
