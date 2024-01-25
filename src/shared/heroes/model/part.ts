export enum ComponentType {
    Head = 'head',
    Body = 'body'
}

export interface IPart {
    type: ComponentType
}

export type IHead = IPart

abstract class Part implements IPart {
    type: ComponentType
}

export class Head extends Part implements IHead {
    type = ComponentType.Head
}

export type IBody = IPart

export class Body extends Part implements IBody {
    type = ComponentType.Body
}

export type IStructure = Record<ComponentType, IPart>
