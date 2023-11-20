https://github.com/material-components/material-web/blob/main/docs/quick-start.md

https://lit.dev/docs/tools/production/#modern-only-build


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