import VLink from '@/shared/UI/Link/VLink.vue'
import { render } from '@testing-library/vue'

describe('[Component] Link', () => {
    it('render', () => {
        const options = {
            props: {
                label: 'test',
                src: '/'
            }
        }
        const { debug } = render(VLink, options)
        debug()
    })
})
