import { extendTheme, StyleFunctionProps, Switch, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({
    config,
    colors: {
        purple: {
            50: '#4046CA',
            100: '#4046CA',
            200: '#4046CA',
            300: '#4046CA',
            400: '#4046CA',
            500: '#4046CA',
            600: '#4046CA',
            700: '#4046CA',
            800: '#4046CA',
            900: '#4046CA',
        },
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '',
        }
    },
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                fontWeight: 'bold', // Normally, it is "semibold"
            },
            // 2. We can add a new button size or extend existing
            sizes: {
                xl: {
                    h: '56px',
                    fontSize: 'lg',
                    px: '32px',
                },
            },
            // 3. We can add a new visual variant
            variants: {
                'with-shadow': {
                    bg: 'red.400',
                    boxShadow: '0 0 2px 2px #efdfde',
                },
                // 4. We can override existing variants
                solid: (props: StyleFunctionProps) => ({
                    bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',

                }),
                // 5. We can add responsive variants
                sm: {
                    bg: 'rgb(64, 70, 202)',
                    fontSize: 'md',
                    color: 'white'
                },
            },
            // 6. We can overwrite defaultProps
            defaultProps: {
                size: 'lg', // default is md
                variant: 'sm', // default is solid

            }
        },

    }

});

export default theme;