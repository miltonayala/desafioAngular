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
import { CartItem } from './models/cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // ************************************************************
  // VARIABLES (spanglish)
  // ************************************************************

  productosList: Product[] = [];
  loadingProductos: boolean = true;
  cartItems: CartItem[] = [];
  showModalCarrito: boolean = false;
  showModalDetalles: boolean = false;
  selectedProduct: Product | null = null;

  footerText: string = 'Copyright (C) 2025 Tienda Falsa DAW';
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
  sliderImages: string[] = [
    'https://tottoelsalvador.vtexassets.com/assets/vtex.file-manager-graphql/images/fb79ee78-372a-4ceb-a887-6f5aff2e348e___06dc5a3886c25020316f8ca2c265d74a.jpg',
    'https://tottoelsalvador.vtexassets.com/assets/vtex.file-manager-graphql/images/4a913db0-0c51-4572-ba60-8e26bf144400___e765b4487ac4e43ca54ef3c166755e87.jpg',
    'https://tottoelsalvador.vtexassets.com/assets/vtex.file-manager-graphql/images/b2504e30-cfbb-46d3-a154-9eacc02f069f___7720b0db050394770054f73c9ad9aaf5.jpg'
  ];
  currentSlideIndex: number = 0;

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
    this.loadCarritoFromLocalStorage();
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

  loadCarritoFromLocalStorage() {
    const saved = localStorage.getItem('carritoData');
    if (saved) {
      try {
        this.cartItems = JSON.parse(saved);
      } catch (error) {
        console.error('Error parseando carrito desde localStorage:', error);
        this.cartItems = [];
      }
    }
  }

  saveCarritoToLocalStorage() {
    localStorage.setItem('carritoData', JSON.stringify(this.cartItems));
  }

  addToCarrito(product: Product) {
    const existingItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        product: product,
        quantity: 1
      });
    }

    this.saveCarritoToLocalStorage();
    console.log('Producto agregado al carrito:', product.title);
  }

  getTotalCarrito(): number {
    const total = this.cartItems.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
    return Math.round(total * 100) / 100;
  }

  getTotalItemsCarrito(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  openModalCarrito() {
    this.showModalCarrito = true;
  }

  closeModalCarrito() {
    this.showModalCarrito = false;
  }

  removeFromCarrito(productId: number) {
    this.cartItems = this.cartItems.filter(
      item => item.product.id !== productId
    );
    this.saveCarritoToLocalStorage();
  }

  updateQuantity(productId: number, newQuantity: number) {
    if (newQuantity <= 0) {
      this.removeFromCarrito(productId);
      return;
    }

    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      item.quantity = newQuantity;
      this.saveCarritoToLocalStorage();
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  getSubtotal(item: CartItem): number {
    return Math.round(item.product.price * item.quantity * 100) / 100;
  }

  openDetallesModal(product: Product) {
    this.selectedProduct = product;
    this.showModalDetalles = true;
  }

  closeDetallesModal() {
    this.showModalDetalles = false;
    this.selectedProduct = null;
  }

  addToCarritoFromModal() {
    if (this.selectedProduct) {
      this.addToCarrito(this.selectedProduct);
      this.closeDetallesModal();
    }
  }
}
