import { Breakpoints } from '@/shared/const/breakpoints.ts'

export function useMedia(setBreakpoint: (breakpoint: Breakpoints) => Breakpoints) {
    type IMediaWidths = Readonly<Record<Breakpoints, number>>
    const mediaWidths = <IMediaWidths>Object.freeze({
        [Breakpoints.xs]: 600,
        [Breakpoints.sm]: 960,
        [Breakpoints.md]: 1264,
        [Breakpoints.lg]: 1904
    })

    function init() {
        const bpQueries = <Breakpoints[]>Object.keys(mediaWidths)
        const breakpoints = <Record<Breakpoints, string>>{}

        function getCurrentBreakPoint(): Breakpoints {
            for (const breakpoint in breakpoints) {
                if (window.matchMedia(breakpoints[breakpoint as Breakpoints]).matches)
                    return breakpoint as Breakpoints
            }
        }

        for (let breakpoint in mediaWidths) {
            let queryString = `(max-width: ${mediaWidths[breakpoint as Breakpoints]}px)`
            const mediaQueryList = window.matchMedia(queryString)
            breakpoints[breakpoint as Breakpoints] = queryString
            mediaQueryList.addEventListener('change', (e: MediaQueryListEvent) => {
                if (e.matches) setBreakpoint(breakpoint as Breakpoints)
                else {
                    setBreakpoint(bpQueries[bpQueries.indexOf(breakpoint as Breakpoints) + 1])
                }
            })
        }
        setBreakpoint(getCurrentBreakPoint())
    }

    return {
        init
    }
}
