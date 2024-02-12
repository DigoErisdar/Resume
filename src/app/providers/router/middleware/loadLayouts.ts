import { RouteLocationNormalized } from 'vue-router'
import { AppLayoutToFileMap, Layouts } from '@/layouts/layouts.ts'

export async function loadLayoutMiddleware(to: RouteLocationNormalized): Promise<void> {
    const { layout } = to.meta
    const normalizedLayoutName: Layouts = <Layouts>layout || Layouts.default
    const fileName: string = AppLayoutToFileMap[normalizedLayoutName]
    const fileNameWithoutExtension = fileName.split('.vue')[0]
    const component = await import(`../../../../layouts/${fileNameWithoutExtension}.vue`)
    to.meta.layoutComponent = component.default
}
