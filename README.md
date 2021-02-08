# epicabikes-www

## Build Setup

```bash
# install dependencies
$ npx create-nuxt-app epicabikes-www
$ npm i jwt-decode
$ npm i  @nuxtjs/dotenv
??? sas loader
$ cp -r dev/extandar-front-core/src/* production/epicabikes-www/

```

# Modifications
## Modify package.json:

"dev": "nuxt --hostname epicabikes.localhost --port 8093",

## Modify nuxt.config.js

require('dotenv').config()

titleTemplate: '%s - ' + process.env.npm_package_name,
title: process.env.TITLE || '',

plugins: [
  	'~/plugins/axios',
    '~/plugins/pracktica'
],

modules: [
   	...
    '@nuxtjs/dotenv'
],

css: [
  '~/assets/main.css'
],

vuetify: {
    ...
    defaultAssets: {
      font: false,
      icons: 'mdi'
    },
    treeShake: true,
},



{ hid: 'description', name: 'description', content: process.env.DESCRIPTION || '' }


## Create .env

BASE_URL=http://epicabikes.localhost:8093
UNIVERSE=epicabikes.localhost
API_URL=http://epicabikes.localhost:3346/api/p/
AUTH_API_URL=http://epicabikes.localhost:3346/api/p/
AUTH_DOMAIN=localhost
DEBUG_ENABLED=true

TITLE= Epica Bikes
DESCRIPTION= Taller de mecánica profesional de bicicletas en Bogotá


## Common Commands
```bash
# serve with hot reload at localhost:3000
# Este es el que uso para ambiente de desarrollo
$ npm run dev

# build for production and launch server
# No estoy usando estos
$ npm run build
$ npm run start

# generate static project
# Este es el que uso para ambiente de produccion
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
