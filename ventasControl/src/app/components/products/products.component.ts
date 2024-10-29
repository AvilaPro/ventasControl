import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Product } from "../../interfaces/product";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsComponent {

  compra: Array<any> = [];

  products: Array<Product> = [
    {
      id: '1',
      name: 'Producto 1',
      qty: 5,
      price: 120,
      imgs: ["https://ve.allofpan.com/wp-content/themes/storepan/asset/images/product/pan-yellow.png"],
      description: 'Este es el producto 1 genial',
      status: 'active'
    },
    {
      id: '2',
      name: 'Producto 2',
      qty: 115,
      price: 17,
      imgs: ["https://ve.allofpan.com/wp-content/themes/storepan/asset/images/product/harinaamarillo.png"],
      description: 'Este es el producto 2 super',
      status: 'active'
    },
    {
      id: '3',
      name: 'Producto 3',
      qty: 25,
      price: 25,
      imgs: ["https://ve.allofpan.com/wp-content/themes/storepan/asset/images/product/maizarroz.png"],
      description: 'Este es el producto 3 maravilloso',
      status: 'active'
    }
  ]

  constructor(private router: Router){}

  irAComponente(ruta: string){
    this.router.navigate([ruta]);
  }

  addToCart(id: string){
    this.compra.push(id);
    console.log(this.compra);
  }
}
