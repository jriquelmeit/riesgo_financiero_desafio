export const calculate = async (rut: string): Promise<number> => {

    return (+rut % 100) + 1;
}
