import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  listaProdutos: Produto[] = [];

  constructor( private storageService: StorageService) { }

  ngOnInit() {
  }

  async buscarProdutos(){
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarProdutos();
  }

  async excluirProduto(nomeProduto: string){
    await this.storageService.remove(nomeProduto);
    this.buscarProdutos();
  }
}
