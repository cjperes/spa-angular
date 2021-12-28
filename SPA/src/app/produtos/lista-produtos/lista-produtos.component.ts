import { ProdutoService } from './../produtos.serivce';
import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  constructor(private ProdutoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit(): void {
    this.ProdutoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
      )
  }

}
