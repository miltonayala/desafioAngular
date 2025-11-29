// ************************************************************
// ProductService
// ************************************************************
// Este servicio se encarga de:
// - Obtener datos del FakeStoreAPI
// - Centralizar la lógica de productos
// - Mantener el app.component.ts más limpio. Imaginense que esta es como la conexion con la DB.
// ************************************************************

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  // URL base del API de productos falsos que tenemos que consumir
  private apiURL = 'https://fakestoreapi.com/products';

// 'private http: HttpClient' declara y asigna la propiedad 'http' en esta clase.
constructor(private http: HttpClient) {}

  // ------------------------------------------------------------
  // getAllProducts()
  // ------------------------------------------------------------
  // Esta funcion pide todos los productos al fakeStore API.
  // Regresa un observable que luego se consume en el componente.
  // ------------------------------------------------------------
  getAllProducts() {
    return this.http.get<Product[]>(this.apiURL);
  }
}
