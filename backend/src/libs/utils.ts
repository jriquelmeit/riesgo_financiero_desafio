export const formatRut = (rut: string | number): string => {
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
