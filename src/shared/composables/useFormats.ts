export function useFormats() {
    function toPrice(value: number, defaultValue = '-') {
        if (value || value === 0) {
            return new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 2
            }).format(value)
        }
        return defaultValue
    }

    function booleanToString(value: boolean, yes = 'Да', no = 'Нет') {
        return value ? yes : no
    }

    function toNumberMinMax(value: number, min: number = null, max: number = null) {
        if ((min || min === 0) && value < min) value = min
        if ((max || max === 0) && value > max) value = max
        return value
    }

    return {
        toPrice,
        booleanToString,
        toNumberMinMax
    }
}
