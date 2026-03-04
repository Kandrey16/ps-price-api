export function parsePriceSimple(priceText) {
	if (!priceText) return { amount: null, currency: '' }

	const match = priceText.trim().match(/^([\d,.]+)\s*(.*)$/)
	if (!match) return { amount: null, currency: '' }

	let amount = parseFloat(match[1].replace(/,/g, ''))

	return {
		amount: isNaN(amount) ? null : amount,
		currency: match[2],
	}
}
