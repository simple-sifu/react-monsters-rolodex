# React webpack starter

1. npm setup  --- creates a package json file

npm init -y

2. React -   React is main library, 0.14 React and ReactDOM were together. Now, React Library has nothing to do with browsers and web libraries, react-dom does that.

npm i react react-dom

3. webpack - install dev dependencies using --save-dev flag. It compiles and bundles your assets together into one file. We want to install server with live reloads using webpack-dev-server. The cli helps us to run webpack commands or build scripts.


4. Babel - browser friendly code, transpiles code 
   Babel preset-react
   Babel preset-env (replaces babel preset 2015) compiles ES6 and later version. It also looks at what Browser is being used. Compiles whatever is needed for that Browser
   Babel Loader - compiles JSX which React uses for templating
   html webpack plugin - are build html file.

   npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader  css-loader sass-loader sass webpack webpack-cli

5. Create a webpack.config.js with an entry file. The whole React Source will be in entry file. Output bundle will
be put in js bundle. Source in html-webpack-plugin to do this work.

6. Grab the user list from 'https://jsonplaceholder.typicode.com/users'

7. Grab the monster images from `https://robohash.org/${props.monster.id}?set=set2&size=180x180'
# react-monsters-rolodex
