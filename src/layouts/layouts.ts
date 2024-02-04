export type Layouts = 'default' | 'page'

export const AppLayoutToFileMap: Record<Layouts, string> = {
    default: 'MainLayout.vue',
    page: 'PageLayout.vue'
}
