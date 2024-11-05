import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Product } from "../../interfaces/product";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsComponent {

  compra: Array<any> = [];

  products: Array<Product> = [
    {
      id:1,
        nombre: 'Mavesa Margarina',
        presentacion: 'Tubo 1Kg',
        precio: 75000,
        imagen: 'https://example.com/images/mavesa_margarina.jpg',
        cantidad: 5
    },
    {
      id: 2,
        nombre: 'P.A.N. Harina de Maíz Precocida',
        presentacion: 'Paquete familiar',
        precio: 60000,
        imagen: 'https://example.com/images/pan_harina.jpg',
        cantidad: 10
    },
    {
      id:3,
        nombre: 'Pampers Pañales',
        presentacion: 'Talla M, Paquete Económico',
        precio: 150000,
        imagen: 'https://example.com/images/pampers.jpg',
        cantidad: 0
    },
    {
      id: 4,
        nombre: 'Primor Aceite Vegetal',
        presentacion: 'Botella 1L',
        precio: 45000,
        imagen: 'https://example.com/images/primor_aceite.jpg',
        cantidad: 8
    },
    {
      id:5,
        nombre: 'Mavesa Mantequilla',
        presentacion: 'Barra 250g',
        precio: 90000,
        imagen: 'https://example.com/images/mavesa_mantequilla.jpg',
        cantidad: 2
    },
    {
      id:6,
        nombre: 'P.A.N. Harina de Maíz Precocida Integral',
        presentacion: 'Paquete familiar',
        precio: 65000,
        imagen: 'https://example.com/images/pan_harina_integral.jpg',
        cantidad: 7
    },
    {
      id:7,
        nombre: 'Pampers Pañales',
        presentacion: 'Talla G, Paquete Económico',
        precio: 180000,
        imagen: 'https://example.com/images/pampers_g.jpg',
        cantidad: 4
    },
    {
      id:8,
        nombre: 'Primor Aceite de Oliva',
        presentacion: 'Botella 500ml',
        precio: 120000,
        imagen: 'https://example.com/images/primor_oliva.jpg',
        cantidad: 6
    },
    {
      id:9,
        nombre: 'Mavesa Queso Crema',
        presentacion: 'Tubo 200g',
        precio: 80000,
        imagen: 'https://example.com/images/mavesa_queso.jpg',
        cantidad: 9
    },
    {
      id: 10,
        nombre: 'P.A.N. Harina de Maíz Precocida Blanca',
        presentacion: 'Paquete pequeño',
        precio: 35000,
        imagen: 'https://example.com/images/pan_harina_blanca.jpg',
        cantidad: 12
    }
];

  constructor(private router: Router){}

  irAComponente(ruta: string){
    this.router.navigate([ruta]);
  }

  addToCart(id: number){
    this.compra.push(id);
    console.log(this.compra);
  }
}
