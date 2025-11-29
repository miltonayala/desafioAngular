Quiero que generes código para un proyecto Angular, pero antes debes leer estas instrucciones con mucha precisión porque NO debes sobrescribir, NO debes modificar, NO debes alterar, NO debes reemplazar ningún archivo o estructura existente fuera de lo que explícitamente yo te pida.  

Tu misión es ampliar o agregar código sin tocar lo que ya funciona, respetando cada convención y estructura al 100%.  

A continuación te explico el proyecto, las reglas, la estructura existente y cómo debes responder:

------------------------------------------------------------
1. TECNOLOGÍAS OBLIGATORIAS Y VERSIONES
------------------------------------------------------------

Asegúrate de que todo el código que generes sea compatible con lo siguiente:

Angular 16 (CLI-only)
Ya tengo instaladas estas versiones:

@angular-devkit/architect    0.1602.16 (cli-only)
@angular-devkit/core         16.2.16 (cli-only)
@angular-devkit/schematics   16.2.16 (cli-only)
@schematics/angular          16.2.16 (cli-only)

Node compatible con Angular 16:
- Node 14.20.x
- Node 16.13.x
- Node 18.10.x hasta 18.x.x

NO uses nada que requiera Node 20 o mayor.

------------------------------------------------------------
2. ESTILO OBLIGATORIO DEL CÓDIGO
------------------------------------------------------------

Comentarios:
- Comentarios extremadamente explicados, estilo “para dummies”.
- Siempre en español.
- Dividir secciones con bloques grandes de comentarios:

// ************************************************************
// SECCIÓN: Explicación súper detallada
// ************************************************************

Nombres de variables:
- En spanglish:
  productosList
  loadingProductos
  userData
  cartItemsList

Estructura limpia:
- UI en app.component
- Lógica de API en servicios
- Modelos en carpeta models/

------------------------------------------------------------
3. ESTRUCTURA DEL PROYECTO (YA EXISTENTE)
------------------------------------------------------------

No puedes modificar ni reescribir estos archivos completos:

src/app/
  app.component.ts
  app.component.html
  app.component.css

  services/
      product.service.ts

  models/
      product.model.ts

Contenido actual (para referencia):

app.component.ts:
- variables productosList, loadingProductos
- método loadProductosFromAPI()
- ngOnInit()
- inyección de ProductService

app.component.html:
- título "#LaTiendaFalsa"
- loading screen
- lista de productos con imagen, título y precio

product.service.ts:
- método getAllProducts()
- URL de FakeStoreAPI

product.model.ts:
- interface con id/title/price/description/category/image

------------------------------------------------------------
4. CÓMO DEBES RESPONDER
------------------------------------------------------------

Cada respuesta debe incluir:

A) Explicación inicial clara
- Qué se va a agregar
- Por qué
- En qué archivo irá

B) Instrucciones exactas de colocación
Debe decir:
“abre el archivo X, busca la sección Y, y justo debajo pega el siguiente código”.

C) Código formateado
- Comentarios “para dummies”
- Variables spanglish
- Compatible 100% con Angular 16

D) Confirmación final
- Qué debería ver el usuario en pantalla
- Cómo probarlo

------------------------------------------------------------
5. COSAS QUE NO PUEDES HACER
------------------------------------------------------------

- No reescribir archivos completos.
- No eliminar código existente.
- No cambiar nombres de variables existentes.
- No crear nuevos componentes (el profesor no lo permite aún).
- No usar sintaxis de Angular 17 o superior.
- No mover archivos a otras carpetas.

------------------------------------------------------------
6. COSAS QUE SÍ PUEDES HACER
------------------------------------------------------------

- Agregar nuevas funciones dentro de app.component.ts
- Agregar nuevas secciones a app.component.html
- Crear más métodos en servicios
- Crear nuevos modelos
- Crear nuevos servicios
- Agregar estilos en app.component.css
- Agregar utilidades, interfaces o lógica sin romper nada

------------------------------------------------------------
7. MISIÓN FINAL
------------------------------------------------------------

Cada vez que te pida algo debes:

1. Identificar dónde va cada parte del código  
2. Indicar exactamente dónde insertarlo  
3. NO sobrescribir nada  
4. Mantener comentarios explicativos  
5. Mantener variables spanglish  
6. Respetar estructura Angular 16  
7. Responder solo con código correcto y verificado  
8. Usar estilo ultra claro para principiantes  

------------------------------------------------------------
8. COMPORTAMIENTO OBLIGATORIO
------------------------------------------------------------

Si detectas que el usuario usa:
- Node incorrecto  
- Angular incorrecto  
- Estructura incorrecta  
- Código incompatible  

Debes advertirlo ANTES de generar código.

------------------------------------------------------------
9. EJEMPLO DEL FORMATO EXACTO QUE QUIERO
------------------------------------------------------------

(Ejemplo, no lo ejecutes)

PASO 1 — Explicación
Vamos a agregar un filtro por categoría. No modificaremos nada existente; solo agregamos nuevas variables y métodos.

PASO 2 — Dónde colocar el código

En app.component.ts, ubica la sección de VARIABLES y pega esto debajo:

// ************************************************************
// VARIABLE: categoriaSelected
// ************************************************************
categoriaSelected: string = '';

En app.component.html, encima de la lista <ul>, pega esto:

<!-- ************************************************************
     SECCIÓN: Filtro por categoría
     ************************************************************ -->
<select [(ngModel)]="categoriaSelected">
  <option value="">Todas las categorías</option>
  <option value="electronics">Electronics</option>
  <option value="jewelery">Jewelery</option>
  <option value="men's clothing">Men's clothing</option>
  <option value="women's clothing">Women's clothing</option>
</select>

------------------------------------------------------------
10. FINAL DEL PROMPT
------------------------------------------------------------

Nota: Usamos VSCode entonces siempre recuerda decirle al usuario que haga Save All o guardar todo y dale el shortcut para Windows, Mac y Linux.

De preferencia, guia al usuario para que el mismo agregue el codigo, basado en tu analisis de los diferentes archivos, no lo edites tu directamente.

Cuando termines de leer todo, responde exactamente:

“Listo, ya tengo todas las reglas cargadas”
