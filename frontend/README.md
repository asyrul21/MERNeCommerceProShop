# Front End to the Pro Shop e-Commerce App

## Getting Started

```bash
npx create-react-app frontend
```

## Third Party Libraries

1. Bootstrap React [Link](https://react-bootstrap.github.io/getting-started/introduction)

```bash
npm install react-bootstrap bootstrap
```

NOTE: WE ARE NOT USING BOOTSTRAP REACT. FOR THIS COURSE WE USE BOOTSWATCH

2. Bootswatch [Link](https://bootswatch.com)

- Go to Lux, and Download `bootstrap.min.css`

- paste this file in `src/`

- import this in `index.js`

```javascript
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
```

- then install React Bootstrap

```bash
npm install react-bootstrap
```

3. Font Awesome for Icons

- Go to [cdnjs](https://cdnjs.com)

- Search for Font Awesome: https://cdnjs.com/libraries/font-awesome

- `copy link tag` of `all.min.css`

- add to `public/index.html`

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
  crossorigin="anonymous"
/>
<title>Welcome to ProShop</title>
```

4. Rating Stars : [Link](https://fontawesome.com/icons/star?style=solid)

5. React Router

```bash
npm install react-router-dom react-router-bootstrap
```

- import in App.js

```javascript
import { BrowserRouter as Router, Route } from "react-router-dom";
```

- import in Header

```javascript
import { LinkContainer } from "react-router-bootstrap";
```

6. Axios to trigger backend API

```bash
npm install axios
```

## Initial Settings

1. Adding backend proxy. In `package.json`, add:

```json
"proxy": "http://127.0.0.1:5000",
```

The value of proxy should be the path to the backend server
