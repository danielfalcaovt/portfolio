import { createTheme } from '@mantine/core';

export const theme = createTheme({
    colors: {
        dark: [
            "#F2EAF7", // 0
            "#E0D1EB", // 1
            "#C2A9D6", // 2
            "#A480C2", // 3
            "#8657AD", // 4
            "#693E8D", // 5
            "#452660", // 6
            "#0D0216", // 7 <- principal
            "#18091F", // 8
            "#1F0E2F", // 9
        ],
        brand: [
            "#F3F0FF", // brand[0]
            "#E5DBFF", // brand[1]
            "#C6B3FF", // brand[2]
            "#A88BFF", // brand[3]
            "#8B64FF", // brand[4]
            "#6D3FD3", // brand[5]*
            "#5F32C8", // brand[6]
            "#5129B2", // brand[7]
            "#43219C", // brand[8]
            "#351A86"  // brand[9]
        ],
    },
    primaryColor: 'brand',
    primaryShade: 5,
    fontFamily: 'Inter, sans-serif',
    headings: {
        fontFamily: 'Poppins, sans-serif',
    },
    components: {
        Button: {
            defaultProps: {
                radius: 'sm'
            },
        },
    },
    scale: 0.9
});