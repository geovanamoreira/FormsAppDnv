/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Produto } from '../models/Produto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  formCadastro: FormGroup;
  produto: Produto = new Produto();

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

  constructor(private alertController: AlertController, private formsBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formCadastro = this.formsBuilder.group({
      nomeProduto: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      validade:['', Validators.compose([Validators.required, Validators.minLength(4)])],
      preco: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  async salvarCadastro(){
    if(this.formCadastro.valid){
      this.produto.nomeProduto = this.formCadastro.value.nomeProduto;
      this.produto.descricao = this.formCadastro.value.descricao;
      this.produto.validade = this.formCadastro.value.validade;
      this.produto.preco = this.formCadastro.value.preco;
      await this.storageService.set(this.produto.nomeProduto, this.produto);
      this.route.navigateByUrl('/produtos');
    }
    else{
      alert('formulário Inválido!');
    }
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
