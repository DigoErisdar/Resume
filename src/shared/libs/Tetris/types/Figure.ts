import { Coordinate } from '@/shared/libs/Tetris/types/Block.ts'
import { Matrix } from '@/shared/libs/Tetris/types/Game.ts'

export interface Figure {
    position: Coordinate
    matrix: Matrix
}

const createCube = (): Figure => ({
    position: {
        x: 0,
        y: 0
    },
    matrix: [
        [{ color: 'Cube' }, { color: 'Cube' }],
        [{ color: 'Cube' }, { color: 'Cube' }]
    ]
})
const createLine = (): Figure => ({
    position: {
        x: 0,
        y: 0
    },
    matrix: [
        [{}, {}, {}, {}],
        [{ color: 'Line' }, { color: 'Line' }, { color: 'Line' }, { color: 'Line' }],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}]
    ]
})
const createZ = (): Figure => ({
    position: {
        x: 0,
        y: 0
    },
    matrix: [
        [{}, { color: 'Z' }, { color: 'Z' }],
        [{ color: 'Z' }, { color: 'Z' }, {}],
        [{}, {}, {}]
    ]
})
const createRZ = (): Figure => ({
    position: {
        x: 0,
        y: 0
    },
    matrix: [
        [{ color: 'RZ' }, { color: 'RZ' }, {}],
        [{}, { color: 'RZ' }, { color: 'RZ' }],
        [{}, {}, {}]
    ]
})
const createG = (): Figure => ({
    position: {
        x: 0,
        y: 0
    },
    matrix: [
        [{}, {}, { color: 'G' }],
        [{ color: 'G' }, { color: 'G' }, { color: 'G' }],
        [{}, {}, {}]
    ]
})
const createRG = (): Figure => ({
    position: {
        x: 0,
        y: 0
    },
    matrix: [
        [{ color: 'RG' }, {}, {}],
        [{ color: 'RG' }, { color: 'RG' }, { color: 'RG' }],
        [{}, {}, {}]
    ]
})
const createT = (): Figure => ({
    position: {
        x: 0,
        y: 0
    },
    matrix: [
        [{}, { color: 'T' }, {}],
        [{ color: 'T' }, { color: 'T' }, { color: 'T' }],
        [{}, {}, {}]
    ]
})

export enum FIGURES {
    Z = 'Z',
    Cube = 'Cube',
    Line = 'Line',
    RZ = 'RZ',
    T = 'T',
    G = 'G',
    RG = 'RG'
}

export const FigureFactory = {
    [FIGURES.Z]: createZ,
    [FIGURES.Cube]: createCube,
    [FIGURES.Line]: createLine,
    [FIGURES.RZ]: createRZ,
    [FIGURES.T]: createT,
    [FIGURES.G]: createG,
    [FIGURES.RG]: createRG
}
