export const formatRut = (rut: string | number): string => {
    let cleanRut = String(rut).replace(/[^0-9kK]+/g, '').toUpperCase();
    if (cleanRut.length === 0) {
        return '';
    }
    const dv = cleanRut.slice(-1);
    const body = cleanRut.slice(0, -1);

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
