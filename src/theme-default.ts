import { css } from 'lit-element'

export default css`
  .slide {
    --font-family: "Source Sans Pro", sans-serif;
    font: 42px/1.6em var(--font-family);
  }

  h1 { font: 3.6em/1.6em var(--font-family) }
  h2 { font: 2.4em/1.6em var(--font-family) }
  h3 { font: 1.8em/1.6em var(--font-family) }
  h4 { font: 1.4em/1.6em var(--font-family) }
  h5 { font: 1.2em/1.6em var(--font-family) }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  h6 {
    font-weight: normal;
    font-size: 2em;
    line-height: 1.8em;
    letter-spacing: -0.03em;
  }

  li {
    text-align: left;
  }

  code {
    display: inline-block;
    background: #E7E7E7;
    padding: 0 0.2em;
    margin: 0 0.2em;
    border-radius: 0.3em;
    line-height: 1.4em;
  }

  pre code {
    padding: 0.8em 1.2em;
  }

  a {
    color: #25E;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
