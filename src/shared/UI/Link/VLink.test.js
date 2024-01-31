import VLink from '@/shared/UI/Link/VLink.vue'
import { render, screen } from '@testing-library/vue'

describe('[Component] Link', () => {
    it('render inside', () => {
        const options = {
            props: {
                label: 'test',
                src: '/'
            }
        }
        const { container } = render(VLink, options)

        screen.getByText('test')
        expect(container.firstChild.tagName).toBe('ROUTERLINK')
    })
    it('external', () => {
        const options = {
            props: {
                label: 'link',
                src: 'https://google.com'
            }
        }
        const { container } = render(VLink, options)

        screen.getByText('link')
        expect(container.firstChild.tagName).toBe('A')
        expect(container.firstChild.getAttribute('href')).toBe('https://google.com')
    })

    it('with target blank', () => {
        const options = {
            props: {
                label: 'link',
                src: 'https://google.com',
                target: '_blank'
            }
        }
        const { container } = render(VLink, options)

        expect(container.firstChild.getAttribute('target')).toBe('_blank')
    })
})
