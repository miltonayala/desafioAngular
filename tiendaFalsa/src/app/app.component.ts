// ************************************************************
// AppComponent
// ************************************************************
// Este es el "root component". Como el profe dijo que todavía
// NO usemos componentes extra, aquí es donde irá nuestra lógica
// de UI, pero sin abusar. Para mantener todo limpio:
//    - Datos y API: en servicios
//    - Modelos: en models/
// Aquí solo conectamos todo.
// ************************************************************

import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // ************************************************************
  // VARIABLES (spanglish)
  // ************************************************************

  productosList: Product[] = [];   // ← lista de productos
  loadingProductos: boolean = true; // ← estado de carga
  // ************************************************************
// VARIABLE: headerMenuItems + selectedMenu
// ************************************************************
// Lista simple de items para el header. route es opcional por ahora,
// la app todavía NO navega; solo guardamos etiquetas para mostrar.
// ************************************************************
headerMenuItems: { label: string; route?: string }[] = [
  { label: 'Inicio', route: '' },
  { label: 'Productos', route: '/productos' },
  { label: 'Nosotros', route: '' },
  { label: 'Contacto', route: '' }
];

// Variable que guarda el menú seleccionado (para destacar el item).
selectedMenu: string = 'Inicio';

  // ************************************************************
  // CONSTRUCTOR
  // ************************************************************
  // Inyectamos el ProductService para poder usarlo abajo.
  // ************************************************************

  constructor(private productService: ProductService) {}

  // ************************************************************
  // ngOnInit()
  // ************************************************************
  // Este método corre automáticamente cuando inicia el app.
  // Aquí llamamos a la función que obtiene los productos del API.
  // ************************************************************

  ngOnInit() {
    this.loadProductosFromAPI();
  }

  // ************************************************************
// MÉTODO: onSelectMenu(label)
// ************************************************************
// Maneja el click en un item del header. No navega, solo cambia
// el estado local selectedMenu y hace un console.log para debugging.
// ************************************************************
onSelectMenu(label: string) {
  // Cambiamos el estado visual del menú. Aquí podríamos
  // añadir navegación más adelante (router.navigate).
  this.selectedMenu = label;
  console.log('Menu seleccionado:', label);
}

  // ************************************************************
  // loadProductosFromAPI()
  // ************************************************************
  // 1. Llama al servicio
  // 2. Espera los datos
  // 3. Los guarda en la variable productosList
  // 4. Cambia el estado loading a false
  // ************************************************************

  loadProductosFromAPI() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.productosList = data;
        this.loadingProductos = false;
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
        this.loadingProductos = false;
      }
    });
  }
}
