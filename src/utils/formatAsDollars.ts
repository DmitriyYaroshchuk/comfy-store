function formatAsDollars(data: string | number) : string {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(data) / 10);
    return dollarsAmount;
}
export default formatAsDollars;