export enum AttrsType {
    hp = 'hp'
}

interface IAttrs {
    type: AttrsType
    name: string
    description?: string
    value: number

    add: (value: number) => IAttrs
    minus: (value: number) => IAttrs
    validate: (value: number) => number
}

export abstract class Attrs implements IAttrs {
    abstract type: AttrsType
    abstract name: string
    value = 0

    private changeValue(value: number, operator: '+' | '-'): number {
        let newValue = this.value
        switch (operator) {
            case '+':
                newValue += value
                break
            case '-':
                newValue -= value
                break
            default:
                return newValue
        }
        try {
            this.value = this.validate(newValue)
        } catch (e) {
            console.error(`Атрибут не может быть равен ${this.value}`)
        }
    }

    add(value: number): IAttrs {
        this.changeValue(value, '+')
        return this
    }

    minus(value: number): IAttrs {
        this.changeValue(value, '-')
        return this
    }

    validate(value: number) {
        return value
    }
}
