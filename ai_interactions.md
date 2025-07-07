# Uso de IA

## Còdigo para dar formato a la fecha solicitada

```Typescript
const fecha = new Date();

// Formato de fecha local (ej. "7/7/2025" o "07/07/2025" dependiendo de la configuración regional)
console.log(fecha.toLocaleDateString());

// Formato de fecha local con opciones personalizadas (ej. "07 de julio de 2025")
console.log(fecha.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));

// Formato de hora local (ej. "12:08:57 PM" o "12:08:57")
console.log(fecha.toLocaleTimeString());

// Formato completo local (fecha y hora)
console.log(fecha.toLocaleString());

// Formato ISO 8601 (UTC) - Ideal para APIs y bases de datos
console.log(fecha.toISOString()); // Ej: 2025-07-07T16:08:57.123Z (Z indica UTC)
```



## Código para formatear el rut
```Typescript

function formatRut(rut: string | number): string {
  // 1. Convertir a string y limpiar:
  //    Eliminar puntos, guiones y espacios en blanco del inicio/final.
  let cleanRut = String(rut).replace(/[^0-9kK]+/g, '').toUpperCase();

  // 2. Validar que no esté vacío después de limpiar
  if (cleanRut.length === 0) {
    return ''; // O puedes lanzar un error, dependiendo de tu lógica
  }

  // 3. Separar dígito verificador (DV)
  const dv = cleanRut.slice(-1);
  const body = cleanRut.slice(0, -1);

  // 4. Formatear el cuerpo con puntos
  let formattedBody = '';
  for (let i = body.length - 1, j = 0; i >= 0; i--, j++) {
    formattedBody = body[i] + formattedBody;
    if ((j + 1) % 3 === 0 && i !== 0) {
      formattedBody = '.' + formattedBody;
    }
  }

  // 5. Unir el cuerpo formateado con el dígito verificador
  return `${formattedBody}-${dv}`;
}

```


