# Next.js Teslo Shop
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* El -d, significo __detached__



## Configurar la variables de entorno
Copiar y renombrar  el archivo __.env.example__ a __.env__
* MongoDB URL Local:
```
mongodb://localhost:27018/teslodb
```

* Reconstruir los módulos de node y levantar Next
```bash
npm install
npm run dev
```

## Llenar la base de datos con información de prueba

Llamar a:
```
http://localhost:3000/api/seed
```