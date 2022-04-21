import { Anchor, Box, Text, Title } from '@mantine/core'
import { SiGmail } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { pills } from '../miscelaneos'

export default function Heading() {
   return (
      <Box
         itemType="https://schema.org/Person"
         itemScope
         mb={20}
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            '@media (max-width: 755px)': {
               flexDirection: 'column-reverse',
               paddingTop: '5rem',
            },
         }}
      >
         <Box
            sx={{
               '@media (max-width: 755px)': {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '3rem 0',
                  textAlign: 'center',
               },
            }}
         >
            <Title
               itemProp="givenName"
               order={1}
               sx={{
                  color: 'white',
                  fontSize: '2.8rem',
                  '@media (max-width: 400px)': {
                     fontSize: '2.5rem',
                  },
               }}
               children="Hector Vargas Medina"
            />

            <Title
               itemProp="jobTitle"
               my={10}
               order={2}
               sx={{
                  color: '#333',
                  fontSize: '2rem',
                  '@media (max-width: 400px)': {
                     fontSize: '1.8rem',
                     textAlign: 'center',
                  },
               }}
               children="Fronted Developer"
            />
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 'fit-content',
                  gap: '1rem',
                  '@media (max-width: 321px)': {
                     gap: '0.5rem',
                  },
               }}
            >
               <Anchor
                  href="https://github.com/hecthorl"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  sx={pills}
               >
                  <BsGithub />
                  <Text component="p" my={0} children="Github" />
               </Anchor>
               <Box ml={5} sx={pills}>
                  <SiGmail />
                  <Text
                     itemProp="email"
                     children="hlvm03@gmail.com"
                     component="p"
                     my={0}
                  />
               </Box>
            </Box>
         </Box>
         <img
            itemProp="image"
            style={{
               border: '5px solid white',
               width: '200px',
               height: '200px',
               objectFit: 'cover',
               borderRadius: '999999px',
               boxShadow: '0px -1px 20px 20px rgb(255 255 255 / 8%)',
            }}
            src="/me.webp"
            alt="photo of Hector Luis Vargas Medina"
         />
      </Box>
   )
}
