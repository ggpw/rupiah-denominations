This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is a simple javascript app that will split Rupiah Nominal into minimal fraction

## How to run
First you need to install [`Node.js`](https://nodejs.org/en/download/) and [`npm`](https://www.npmjs.com/get-npm)

### `npm install`
Install the dependencies with command `npm install` inside your terminal/command-prompt

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


## Notes

### Tech
Aside from `React.js` this simple app use [`material-ui`](https://material-ui.com/) and [`redux`](https://redux.js.org/)

### Code Explanation
The codes that run the application are inside `src` folder.
The route first will be `index.js` that will call `App.js` inside `src\screens` folder.
The `App.js` will route to `rupiahFractions` screen.
Inside `rupiahFractions` screen consist of components: `rupiahInput` that will receive user input and store it into `redux-store`, `Button` `material-ui` that will process the value inputed by user and stored; and `denominationResults` that will display the result of the process.

### Project Structure
Asside from `index.js` and `index.css` the structure inside `src` folder are;
- `components`
- `constant`
- `images`
- `screens`
- `utils`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).