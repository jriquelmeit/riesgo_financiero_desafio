# Desafío Riesgo Financiero

Proyecto basado en **node.js** con **Typescript** 

## Requisitos 

* Npm 
* Yarn
* Node.js >= 20

## Backend
### Instalación

```bash

cd riesgo_financiero_desafio/backend

#instalar dependencias
yarn install

# copiar variables de entorno
cp env.template .env

```

### Ejecución

```bash

#Configurar servidor local 
yarn run dev

```

### Usuarios configurados


```
# role: admin
{
  "email": "pedro@demo.cl",
  "password": "1234"
}

# role: user
{
  "email": "jose@demo.cl",
  "password": "1234"
}

```


### Test
- Login del usuario admin
- score del rut 58961604 con jwt del usuario admin

```bash

cd riesgo_financiero_desafio/backend
yarn run test

```

## Frondend

Pendiente :-( 

