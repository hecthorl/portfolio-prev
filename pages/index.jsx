import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Tabs } from '@mantine/core'
import Heading from '../components/Heading'
import AboutMeTab from '../components/AboutMeTab'
import ProyectsTab from '../components/ProyectsTab'

export default function Home() {
   const { locale } = useRouter()
   const aboutMe = locale === 'es' ? 'Sobre mi' : 'About me'
   const proyects =
      locale === 'es' ? 'Proyectos Destacados' : 'Featured Projects'
   const contentHeadtag =
      locale === 'es'
         ? 'Portafolio personal de Hector Luis Vargas Medina'
         : 'Personal portfolio of Hector Luis Vargas Medina'

   return (
      <Box
         component="main"
         sx={theme => ({
            backgroundColor: theme.colors['my-cyan'][5],
         })}
      >
         <Head>
            <title>Hector Vargas Medina</title>
            <meta name="description" content={contentHeadtag} />
            <link rel="icon" href="/logo.svg" />
         </Head>
         <Box
            pt="1rem"
            m="0 auto"
            sx={{
               display: 'flex',
               minHeight: '100vh',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               maxWidth: '700px',
               width: '100%',
               '@media (max-width: 400px)': {
                  padding: '2rem 0',
               },
            }}
         >
            <Heading />
            <Box sx={{ width: '100%' }}>
               <Tabs color="dark">
                  <Tabs.Tab
                     sx={{ fontSize: '1.2rem' }}
                     label={aboutMe}
                     children={<AboutMeTab />}
                  />
                  <Tabs.Tab
                     sx={{ fontSize: '1.2rem' }}
                     label={proyects}
                     children={<ProyectsTab />}
                  />
               </Tabs>
            </Box>
         </Box>
      </Box>
   )
}
