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

  formLogin = this.formsBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(8)])],
  });

  constructor(private formsBuilder: FormBuilder) {}
}
