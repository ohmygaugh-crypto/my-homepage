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
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoAnalyticsOutline} from 'react-icons/io5'
import thumbBlackbaud from '../public/images/links/blackbaudsocialgoodstartup.png'
import thumbThrivacy from '../public/images/works/Thrivacycommunity.jpg'
import thumbKrumware from '../public/images/works/krumhero.png'
import Image from 'next/image'
//import Graph from '../components/icons/graph.js' ... bad idea



const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

//line 87 under paragraph before last </section> I removed: <Box align="center" my={4}>
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
          Hello, I am a product strategist based in the USA!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Seth McGaugh
            </Heading>
            <p>Digital Native ( Product Strategist / Programmer )</p>
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
                src="/images/SethFuturist.png"
                alt="Profile image"
                borderRadius="zoom"
                width="105%"
                height="125%"
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
          {'"A Jack of all trades master of none, is better than a master of one."'}
          </Paragraph>
          <br> 
          
          </br>
          <Paragraph>
          {'Seth pretty much lives by this mantra. Choosing the startup path made him wear many hats over the years. He often gets his hands dirty with UIUX design, Fullstack Development, and DevOps. Pivoting from finance to software development. He has certainly found his groove. His mission is to lead dev teams towards building delightful, human-centered, software products. When the time is right, he intends to run his own company. Until then, he is going to listen, take notes, align expectations, and get teams fired up to build something awesome.'} 
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
              Program within the Darla Moore School of
            Business at the Chinese University of Hong Kong. Also, worked at a seed stage FinTech startup called{' '}
            <Link href="https://www.gini.co/">
              gini.{' '}
            </Link>     
            
            
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Earned 3rd place in the University of South Carolina {' '}
            <Link href="https://www.sc.edu/about/offices_and_divisions/provost/academicpriorities/undergradstudies/mcnair_blockchain.php">
            McNair Institute Blockchain Challenge
            </Link>{' '}
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Co-founded a startup called{' '}
            <Link href="https://www.thrivacy.io/why-thrivacy">
            THRIVACY!{' '}
            </Link>
            A Web3 Wallet & Privacy Platform based in Columbia, SC - USA.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Accepted into the{' '}
            <Link href="https://www.blackbaud.com/socialgoodaccelerator">
            Blackbaud Social Good Accelerator.
            </Link>
            {' '}As well as {' '}
            <Link href="https://www.velocitynetwork.foundation/member_category/general">
            The Velocity Network Foundation.
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Accepted into the{' '}
            <Link href="https://vilcap.com/current-programs/ibm-hyper-protect-accelerator">
              Village Capital Hyper Accelerator.
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Worked as a Product Strategist at{' '}
            <Link href="https://www.anthroware.com/">
              Anthroware.
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Currently</BioYear>
            Applying product strategy as a Sales Engineer for Platform Engineering+Application Development Custom Solutions @{' '}
            <Link href="https://www.krum.io/contact">
              Krumware.
            </Link>
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
          Product Strategy. It primes me to listen first, speak less, say NO strategically, and take action(s) decisively. When not professionally staring at screens all day I enjoy: Cooking, Gardening, Hunting/Fishing, and getting lost while Foraging. As a hobbyist I am building on the latest tools like:{' '}
            <Link href="https://barcrawl.netlify.app/" target="_blank">
            A-Frame,{' '} 
            </Link>
            <Link href="https://www.obsidian.com" target="_blank">
              obsidian{' '}
            </Link>
            and{' '}
            <Link href="https://www.logseq.com" target="_blank">
              Logseq.{' '}
            </Link> 
            Also cultivating my digital garden.
          </Paragraph>

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
              <Link href="https://www.instagram.com/sethhmcgaugh/?hl=en" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @seth-mcgaugh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://digitalgarden-6f3.pages.dev/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoAnalyticsOutline />}
                >
                  My Digital Garden
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
              href="https://www.validide.io/"
              title="VALIDIDE-->THRIVACY"
              thumbnail={thumbThrivacy}
            >
              A Privacy Company
            </GridItem>
            <GridItem
              href="https://www.krum.io/contact"
              title="Krumware"
              thumbnail={thumbKrumware}
            >
              Work With Us
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

//ADD HACKTHEBOX TO ontheweb once you are better! Also Kubernetes Certs. Also Observable INTERACTIVE visualizations... ones that are linked to an article people can play with

