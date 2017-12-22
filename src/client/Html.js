const Html = ({ body, helmet, styles }) => `
  <!DOCTYPE html>
  <html>
    <head>
      ${helmet.title.toString()}
      ${styles}
    </head>

    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`

export default Html
