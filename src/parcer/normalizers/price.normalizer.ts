export function parsePriceSimple(priceText: string) {
  if (!priceText) return { amount: null, currency: '' };

  const match = priceText.trim().match(/^([\d,.]+)\s*(.*)$/);
  if (!match) return { amount: null, currency: '' };

  const amount = parseFloat(match[1].replace(/,/g, ''));

  return {
    amount: isNaN(amount) ? null : amount,
    currency: match[2],
  };
}
