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
        {'"A Jack of all trades master of none, is better than a master of one."'}
        </Paragraph>
        
        <Paragraph>
        Seth, lives by this mantra as he pretty much does it all. Maybe not exactly what most job postings are looking for yet, the startup life made him where many hats. He primarily lead the product roadmap for Thrivacy. There he often had to get his hands dirty with UIUX design, Fullstack Development, and DevOps when there was pretty much no cashflow to pay for developer assistance. Thats just life. His career is just getting started. Pivoting from finance to software development. His mission is to lead dev teams towards building software products so that one day he will run his own company when the time is right. Until then he is going to listen, take notes, and get the team fired up to build something awesome. He is currently open for business so reach out to him below if you want him to work on something for yah: 
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
          <BioYear>Currently</BioYear>
          Working as a freelance UXUI Designer, Web3 Developer, and Product Manager. 👨‍💻
        </BioSection>
        <BioSection>
          <BioYear>TBA</BioYear>
          Portfolio coming soon... 🍈🍉 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
            Product Managment. It primes me to listen first, speak less, and taking action decisively. If I amm not staring at a screen all day I enjoy: Cooking, Hunting, and Fishing. When I am staring at a screen all day I am building on the latest tools like:{' '}
          <Link href="https://www.validide.io/" target="_blank">
          A-Frame {' '} 
          </Link >
          and {' '}
          <Link href="https://www.logseq.com" target="_blank">
             Logseq.
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
