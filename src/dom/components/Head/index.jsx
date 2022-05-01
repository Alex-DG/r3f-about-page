import Helmet from 'react-helmet'

const NAME = 'Alex Di Guida'
const TITLE = `${NAME} ~ Frontend Engineer`
const URL = 'https://alexdiguida.com/'
const DESCRIPTION = `${NAME}, I'm a French Frontend Engineer, passionate about everything web, with a keen interest in 3D and AR development. What I like? Exploring new technologies, learning and experimenting what I learnt.`

/**
 * Head - metatags for the site
 */
const Head = () => {
  return (
    <Helmet>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={NAME} />
      <meta name='designer' content={NAME} />
      <meta name='publisher' content={NAME} />
      {/* Search Engine Optimization Meta Tags */}
      <title>{TITLE}</title>
      <meta name='description' content={DESCRIPTION} />
      <meta
        name='keywords'
        content='Software Engineer,Frontend,Developer,Mobile App,Web App,Computer Scientist,Three.js,React,AR,WebGL,Creative Development,French'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/*
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name='og:title' content={TITLE} />
      <meta name='og:type' content='site' />
      <meta name='og:url' content={URL} />
      <meta name='og:image' content='/icons/share.png' />
      <meta name='og:site_name' content={TITLE} />
      <meta name='og:description' content={DESCRIPTION} />

      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link
        rel='apple-touch-icon'
        sizes='16x16'
        href='/icons/favicon-16x16.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='32x32'
        href='/icons/favicon-32x32.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icons/apple-touch-icon.png'
      />
      <link rel='manifest' href='/manifest.json' />
      <link
        rel='mask-icon'
        color='#1b1b1f'
        href='/icons/safari-pinned-tab.svg'
      />
      <link rel='apple-touch-startup-image' href='/startup.png' />
      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta
        name='viewport'
        content='width=device-width, minimum-scale=1, initial-scale=1.0'
      />
      <meta name='theme-color' content='#1b1b1f' />
      <link rel='shortcut icon' href='/icons/favicon.ico' />

      {/*
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content='@Alex_dg_dev' />
    </Helmet>
  )
}

export default Head
