# Desafio: Angular
Desafio DAW en Angular 16 y Node 20.

Pasos: 

1. Instalar Node + Node Version Manager (descargar e instalar)
2. Desde terminal: instalar la version 18 de Node usando NVM: `nvm install 18`
3. Usar la version 18 de NVM en el proyecto: `nvm use 18` y luego `nvm alias default 18`
4. Confirma que tienes la version correcta: `node -v` y `npm -v` (debe de ser 18).
5. Instalar Angular 16 (el mismo que tiene el Ing.): `npm install -g @angular/cli@16` (si falla, eliminar cualquier version pre instalada de Angular)
6. Revisar version: `ng version`, tiene que decir 16.2.16.

# Crear un Proyecto Nuevo

1. Para crear proyecto: `ng new tiendaFalsa --defaults` (no es necesario que corran esto por que el proyecto ya esta creado en el repo que clonaron).
2. Ir al folder: `cd tiendaFalsa`
3. Compilar y abrir en localHost: `ng serve --open`

Estructura: 


```plaintext
src/
└── app/
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.css
    │
    ├── services/
    │   └── product.service.ts
    │
    └── models/
        └── product.model.ts
```


# Edicion

Para comenzar a editar la pagina, ir a: `src/app/app.component.html`. Luego, debes de darle contexto a github copilot usando las instrucciones de /.github/copilot-instructions.md, para que sepa como programar. 

Pidele lo que necesitas agregar y te dara instructions detalladas.

