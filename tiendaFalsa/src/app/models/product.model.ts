// ************************************************************
// Modelo Product
// ************************************************************
// Esto es una "interface", que básicamente define como se ve un
// producto. Esto nos ayuda a tener autocomplete, evitar errores
// y mantener todo ordenado.
// ************************************************************

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
