import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


//import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
//import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbAframe from '../public/images/AR/tropics.png'
import thumbHiro from '../public/images/AR/hiromarker.png'

//insert back into line 17 or 1st thing under Container within layout: <Heading as="h3" fontSize={20} mb={4}>
        //Works
       // </Heading>
  
       // <SimpleGrid columns={[1, 1, 2]} gap={6}>
       //   <Section delay={0.1}>
       //     <WorkGridItem
       //       id="fourpainters"
       //       title="The four painters"
       //       thumbnail={thumbFourPainters}
       //     >
       //       A video work generated with deep learning, imitating famous four
       //       painters like Van Gogh
       //     </WorkGridItem>
       //   </Section>
       //   <Section delay={0.1}>
       //     <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
       //       An app that suggests ramen(noodle) shops based on a given photo of
       //       the ramen you want to eat
       //     </WorkGridItem>
       //   </Section>
       // </SimpleGrid>

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading>
        coming soon
      </Heading>
      <Section>
        
      </Section>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Like what you see? Use my Augmented Reality Business card to get in touch!
        </Heading>
        
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="Aframe" thumbnail={thumbAframe} title="Scan Here">
            Simply accept the temporary access to your camera and scan the image below to get my contact information! Apple users may experience issues with the camera access, but it should work on Android devices.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="hiro"
            thumbnail={thumbHiro}
            title="Point Camera Here"
          >
            Aim circle crosshairs at the image below and hold steady at a select box for a few seconds to get my contact information!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
