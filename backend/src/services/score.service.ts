export const calculate = async (rut: string): Promise<number> => {

    // Convert rut to number, handle invalid input
    const numRut = Math.abs(Number(rut.replace(/\D/g, "")));
    if (isNaN(numRut)) return 0;

    // Example: Normalize to 0-100 (customize logic as needed)
    const risk = (numRut % 101); // Ensures value is between 0 and 100

    return risk;
}
