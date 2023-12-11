https://github.com/material-components/material-web/blob/main/docs/quick-start.md

https://lit.dev/docs/tools/production/#modern-only-build

https://m3.material.io/components

https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-button.scss

https://material-web.dev/components/button/#filled-button


// running the rullup build:  $ rollup -c


// place script in package.json but it throws error
"scripts": {
    "build": "rollup -c"
  },

  run the following script to roll the imported components in the index.js file into the 
  bundle.js file so that they can be used in index.html
  added script below to package.json as 'rollup' 
  use       npm run rollup      to excecute
  
   npx rollup -p @rollup/plugin-node-resolve index.js -o bundle.js


   The purpose of this project is to practice with material design components, in order to create more beautiful front end components without needing vast amounts of CSS or JS logic to manipulate the CSS to such a degree. Within this project there are a few key features which include: 
   * Menu with open and close functionality,
   * search bar with placeholder,
   * notification icon which lacks function
   * default posts that are organized based on screen size. (four wide at desktop and two wide at mobile scale.) These have image, description and button with links.
   * Form with various interractive fields, which record user input and submit button to log user input.
   * form uses the following material design components:
   - text input field
   - select field with 3 options
   - switch field
   - submit button (logs values for fields to console)
