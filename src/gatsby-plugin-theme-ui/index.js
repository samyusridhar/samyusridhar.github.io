import 'fontsource-prata'
import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

export default {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        heading: `#F6002E`,
        modes: {
            ...baseTheme.colors.modes,
            dark: {
                ...baseTheme.colors.modes.dark,
                heading: `#0081f4`,
            },
        },
    },
    fonts: {
        ...baseTheme.fonts,
        body: "Prata," + baseTheme.fonts.body,
    },
    styles: {
        ...baseTheme.styles,
        a: {
            ...baseTheme.styles.a,
            color: `heading`,
        },
        h1: {
            ...baseTheme.styles.h1,
            fontStyle: `italic`,
        },
        blockquote: {
            ...baseTheme.styles.blockquote,
            borderLeftColor: `#AAE250`,
        },
    },
}
