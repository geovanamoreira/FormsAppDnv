/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  formCadastro: FormGroup;

  mensagens = {
    email: [
      { tipo: 'required', mensagem: 'Preencher o campo E-mail é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 4 caracteres.',
      },
    ],

    senha: [
      { tipo: 'required', mensagem: 'Preencher o campo E-mail é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 4 caracteres.',
      },
    ],
  }

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }
}
