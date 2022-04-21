import {
   Card as MantineCard,
   Text,
   BackgroundImage,
   Box,
   Badge,
   Anchor,
} from '@mantine/core'
import useWidthCard from '../miscelaneos/useWidthCard.js'

export default function Card({ imgSrc, title, description, link }) {
   const currentWidth = useWidthCard()

   return (
      <MantineCard
         component="section"
         sx={{
            width: currentWidth,
            backgroundColor: 'rgb(100 232 255)',
            display: 'flex',
            flexDirection: 'column',
            scrollSnapAlign: 'center',
         }}
      >
         <MantineCard.Section>
            <BackgroundImage
               sx={{ height: '250px', backgroundPosition: 'center 26%' }}
               src={imgSrc}
            />
         </MantineCard.Section>
         <Anchor
            sx={{ color: '#333', width: 'fit-content' }}
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
         >
            <Text
               component="p"
               my="1rem"
               sx={{ fontSize: '1.8rem' }}
               weight="bold"
               children={title}
            />
         </Anchor>
         <Text
            component="p"
            color="#333"
            sx={{ fontSize: '1.2rem' }}
            my={10}
            children={description}
         />
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            <Badge variant="outline" color="pink">
               NextJS
            </Badge>
            <Badge variant="outline" color="indigo">
               ReactJS
            </Badge>
            <Badge variant="outline" color="red">
               Chakra-UI
            </Badge>
         </Box>
      </MantineCard>
   )
}
