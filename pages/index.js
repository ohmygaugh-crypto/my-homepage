//import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
//import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbBlackbaud from '../public/images/links/blackbaudsocialgoodstartup.png'
import thumbThrivacy from '../public/images/works/Thrivacycommunity.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

//line 98 I removed: <Box align="center" my={4}>
          //<NextLink href="/works" passHref scroll={false}>
          //<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            //My portfolio
          //</Button>
        //</NextLink>
      //</Box>

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I am a product manager based in the USA!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Seth McGaugh
          </Heading>
          <p>Digital Native ( Product Manager / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/linkedinHEADSHOT.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section></Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          An adventurer, futurist, and foodie. Seth has been called a legend by Aussies on numerous accounts along his travels. He is a wannabe Anthony Bourdain who can code. A rebellious full-stack developer based in South Carolina with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems programming. When he is not online chasing shiny objects... he is mastering his craft in the kitchen 
          or out in the woods getting his hands dirty. Currently, he is focused on building
          an identity product called THRIVACY which will advance both the internet of careers and serve as a medium for decentralized credential exchange in everday life. Of course he is working on a web3 project! 
        </Paragraph>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the{' '} 
          <Link href="https://sc.edu/study/colleges_schools/moore/study/international_business/degree_programs/bachelors/curriculum/cohort_programs/ibce_hong_kong/index.php">
          IBCE{' '} 
          </Link>
            Program in the Darla Moore School of
          Business at the Chinese University of Hong Kong.       
          🛬🌸⛱️🌄🚋🌁🏙️🎡⛴️🏙️🌁🚇🛤️🚞🎓📜👨‍💼💼💵
          
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Co-founded a startup called{' '}
          <Link href="https://www.thrivacy.io/why-thrivacy">
          THRIVACY!{' '} 
          </Link>
           Columbia, SC - USA. 💸📲🤳🔒🔗🌐🎢
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a freelance UXUI Designer, Web3 Developer, and Product Manager. 👨‍💻
        </BioSection>
        <BioSection>
          <BioYear>TBA</BioYear>
          Portfolio coming soon... 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
            Cooking, Hunting, Fishing,{' '}
          <Link href="https://www.validide.io/" target="_blank">
          Augmented Reality, {' '} 
          </Link >
          <Link href="https://www.logseq.com" target="_blank">
             Logseq
          </Link >
        </Paragraph>

        <Box>
        <Box textAlign="center">
            <Image
              src="/images/AR/tropics.png"
              width="220%"
              height="220%"
            />
              <Image
              
              src="/images/AR/hiromarker.png"
              width="220%"
              height="220%"
            />
        </Box>
        </Box>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ohmygaugh-crypto" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ohmygaugh-crypto
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/seth-mcgaugh/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @seth-mcgaugh (contact me here)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/seth_mcgaugh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @seth_mcgaugh
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/seth-mcgaugh/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @seth-mcgaugh
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.blackbaud.com/newsroom/article/2021/12/29/blackbaud-s-social-good-startup-program-brings-innovative-tech-solutions-to-mission-based-organizations"
            title="Startup for Social Good"
            thumbnail={thumbBlackbaud}
          >
            My Mission 
          </GridItem>
          <GridItem
            href="https://www.thrivacy.io/"
            title="THRIVACY"
            thumbnail={thumbThrivacy}
          >
            A Privacy Company
          </GridItem>
        </SimpleGrid>

        
      </Section>
    </Container>
  </Layout>
)
//line 216 I removed: <Box align="center" my={4}>
          //<NextLink href="/posts" passHref scroll={false}>
          //<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            //Popular posts
          //</Button>
        //</NextLink>
      //</Box>
export default Home
export { getServerSideProps } from '../components/chakra'
