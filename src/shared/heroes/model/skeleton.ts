import {
    Body,
    ComponentType,
    Head,
    IBody,
    IHead,
    IPart,
    IStructure
} from '@/shared/heroes/model/part.ts'

interface ISkeleton {
    components: IStructure
    setHead: (component: IHead) => ISkeleton
    setBody: (component: IBody) => ISkeleton
}

class Skeleton implements ISkeleton {
    components: IStructure = {
        [ComponentType.Head]: undefined,
        [ComponentType.Body]: undefined
    }

    private setComponent(component: IPart): void {
        this.components[component.type] = component
    }

    setHead(component: IHead): Skeleton {
        this.setComponent(component)
        return this
    }

    setBody(component: IBody): Skeleton {
        this.setComponent(component)
        return this
    }
}

const head: IHead = new Head()
const body: IBody = new Body()
const skeleton: ISkeleton = new Skeleton().setHead(head).setBody(body)

console.log(skeleton.components)
