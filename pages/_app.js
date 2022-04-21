import { MantineProvider } from '@mantine/core'

export default function MyApp({ Component, pageProps }) {
   return (
      <MantineProvider
         withGlobalStyles
         withNormalizeCSS
         theme={{
            colors: {
               'my-cyan': [
                  '#4ED7FA',
                  '#3DD5F9',
                  '#1AD0F8',
                  '#07C1E7',
                  '#06A6C5',
                  '#058BA2',
                  '#046F7F',
                  '#03525D',
                  '#02343A',
                  '#011517',
               ],
            },
         }}
      >
         <Component {...pageProps} />
      </MantineProvider>
   )
}
