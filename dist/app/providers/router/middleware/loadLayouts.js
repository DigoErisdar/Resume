import { AppLayoutToFileMap } from '@/layouts/layouts.ts';
export async function loadLayoutMiddleware(to) {
    const { layout } = to.meta;
    const normalizedLayoutName = layout || 'default';
    const fileName = AppLayoutToFileMap[normalizedLayoutName];
    const fileNameWithoutExtension = fileName.split('.vue')[0];
    const component = await import(`../../../../layouts/${fileNameWithoutExtension}.vue`);
    to.meta.layoutComponent = component.default;
}
