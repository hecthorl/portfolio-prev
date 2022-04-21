import { useRouter } from 'next/router'
import { Box } from '@mantine/core'
import Card from './Card'

export default function ProyectsTab() {
   const { locale } = useRouter()

   const devtter =
      locale === 'es'
         ? 'Devtter App es un clon de Twitter pero pensada para devs'
         : "Devtter App is a Twitter's clone but for devs"
   const tetris =
      locale === 'es'
         ? 'El clásico juego de tetris en web, sin canvas!'
         : 'The clasic tetris game in Web, without canvas!'
   const gmClone =
      locale === 'es' ? 'Un clon de google meet' : 'A google meet clone'
   const bebebidas =
      locale === 'es' ? 'Un buscador de bebidas' : 'A drinks searcher'

   return (
      <Box
         px="4rem"
         sx={theme => ({
            minHeight: '482.97px',
            display: 'flex',
            width: 'auto',
            overflowX: 'scroll',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            alignItems: 'center',
            '::-webkit-scrollbar': {
               height: '10px',
            },
            '::-webkit-scrollbar-thumb': {
               backgroundColor: theme.colors['my-cyan'][2],
               borderRadius: '999999px',
            },
         })}
      >
         <Box
            sx={{
               display: 'flex',
               gap: '4rem',
               height: '100%',
               width: 'fit-content',
            }}
         >
            <Card
               link="http://devtter-ten.vercel.app"
               description={devtter}
               title="Devtter App"
               imgSrc="/Devtterthumb.jpg"
            />
            <Card
               link="https://tetris-game-ebon.vercel.app/"
               description={tetris}
               title="Tetris-Game"
               imgSrc="/neave-tetris.webp"
            />
            <Card
               link="https://front-chat-app.vercel.app"
               description={gmClone}
               title="Google Meet Clone"
               imgSrc="/gm-clone.png"
            />
            <Card
               link="https://bebebidas.vercel.app"
               description={bebebidas}
               title="Bebebidas"
               imgSrc="/bebebidas-card.svg"
            />
         </Box>
      </Box>
   )
}
