import { Anchor, Badge, Box, Paper, Text } from '@mantine/core'

import {
   SiChakraui,
   SiNextdotjs,
   SiTailwindcss,
   SiJest,
   SiJavascript,
   SiFirebase,
} from 'react-icons/si'
import { FaReact, FaGitAlt } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { RiCss3Fill } from 'react-icons/ri'
import { useRouter } from 'next/router'

export default function AboutMe() {
   const { locale } = useRouter()

   const whatIdo =
      locale === 'es'
         ? 'Me gusta la creación de interfaces de usuario especialmente en web'
         : ' I like creating user interfaces especially in Web.'
   const whatIwouldLike =
      locale === 'es'
         ? 'Además quisiera descubrir el trabajo en equipo para mejorar mi nivel como desarrollador.'
         : "Plus, I'd like to discover teamwork to improve my level as a developer."
   const whatIdLikeToBe =
      locale === 'es'
         ? 'Y al largo plazo ayudar a otros programadores a crecer en sus carreras profesionales.'
         : 'And in the long term help other programmers to grow in their professional careers.'
   const whatIKnowTitle =
      locale === 'es' ? 'Tecnologías favoritas' : 'Favorite tech stack'

   return (
      <Box
         sx={{
            minHeight: '482.97px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
         }}
      >
         <Paper
            itemProp="description"
            component="p"
            sx={{ backgroundColor: 'rgb(100 232 255)' }}
            shadow="md"
            p="md"
         >
            <Text
               children={whatIdo}
               component="span"
               sx={{ color: '#333', fontSize: '1.3rem' }}
            />
            <Text
               children={whatIwouldLike}
               component="span"
               sx={{ color: '#333', fontSize: '1.3rem', display: 'block' }}
            />
            <Text
               children={whatIdLikeToBe}
               component="span"
               sx={{ color: '#333', fontSize: '1.3rem', display: 'block' }}
            />
         </Paper>
         <Paper sx={{ backgroundColor: 'rgb(100 232 255)' }} shadow="md" p="md">
            <Text underline color="#333" size="lg" children={whatIKnowTitle} />
            <Box
               my={20}
               sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
            >
               <CustomBadge color="pink" rightSection={<FaReact />}>
                  reactjs
               </CustomBadge>
               <CustomBadge color="dark" rightSection={<SiNextdotjs />}>
                  nextjs
               </CustomBadge>
               <CustomBadge color="pink" rightSection={<SiJavascript />}>
                  javascript
               </CustomBadge>
               <CustomBadge
                  color="orange"
                  rightSection={<AiOutlineHtml5 />}
                  leftSection={<RiCss3Fill />}
               >
                  html & css
               </CustomBadge>
               <CustomBadge color="dark" rightSection={<SiJest />}>
                  jest
               </CustomBadge>
               <CustomBadge color="pink" rightSection={<FaGitAlt />}>
                  git
               </CustomBadge>
               <CustomBadge color="grape" rightSection={<SiChakraui />}>
                  chakra-ui
               </CustomBadge>
               <CustomBadge color="indigo" rightSection={<SiTailwindcss />}>
                  tailwindcss
               </CustomBadge>
               <CustomBadge color="violet" rightSection={<SiFirebase />}>
                  firebase
               </CustomBadge>
            </Box>
         </Paper>
      </Box>
   )
}

function CustomBadge({ children, color, rightSection, leftSection }) {
   return (
      <Badge
         color={color}
         variant="outline"
         rightSection={rightSection}
         leftSection={leftSection}
      >
         {children}
      </Badge>
   )
}
