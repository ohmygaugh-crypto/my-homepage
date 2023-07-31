import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Seth McGaugh. All Rights Reserved. Template Courtsey of Takuya Matsuyama. (see source)
    </Box>
  )
}

export default Footer

/// where to put this spotify music feature?:  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5xiztvBdlUf?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>