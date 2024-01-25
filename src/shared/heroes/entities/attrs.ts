import { Attrs, AttrsType } from '@/shared/heroes/model/attrs.ts'

export class HP extends Attrs {
    type = AttrsType.hp
    name = 'Здоровье'
    value = 0

    validate(value: number): number {
        if (value < 0) value = 0
        return super.validate(value)
    }
}
