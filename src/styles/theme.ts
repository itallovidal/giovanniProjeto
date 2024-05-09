// styles/index.ts
import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      placeholder: '#e7e7e7',
      minhaCor: '#121214',
    } as const,
  },
})

export const globalStyles = globalCss({
  '@media print': {
    button: {
      display: 'none',
    },
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial',
  },

  '*:link, *:active': {
    textDecoration: 'none',
  },

  main: {
    // opacity: 0,
    // transform: 'translateY(100px)',
    // animation: `${show} 500ms forwards`,
    maxWidth: '900px',
    margin: '0px auto',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
    padding: '2rem',
    marginBottom: '5rem',
  },

  // 'body, input, textarea, button': {
  //   fontFamily: 'Roboto',
  //   fontWeight: 400,
  // },

  picture: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',

    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
})
