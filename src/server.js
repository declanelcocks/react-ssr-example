import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

import App from './client/App'
import Html from './client/Html'

const port = 3000
const server = express()

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet()

  const body = renderToString(sheet.collectStyles(<App />))
  const helmet = Helmet.renderStatic()
  const styles = sheet.getStyleTags()

  res.send(
    Html({ body, helmet, styles })
  )
})

server.listen(port)
console.log(`Express server running at http://localhost:${port}`)
