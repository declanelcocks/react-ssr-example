import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'sans-serif';
    color: white;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`

const App = () => (
  <React.Fragment>
    <Helmet>
      <title>This is the app!</title>
    </Helmet>

    <Container>
      Hello world!
    </Container>
  </React.Fragment>
)

export default App
