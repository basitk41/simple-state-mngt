# simple-state-mngt

> simple state management

[![NPM](https://img.shields.io/npm/v/simple-state.svg)](https://www.npmjs.com/package/simple-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-state-mngt
```

OR

```bash
npm install --save simple-state-mngt --force
```

## Usage

Wrap your whole app with the default export like below example and pass an initial state<br />

Index.js

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextProvider from "simple-state-mngt";
ReactDOM.render(
  <ContextProvider initialState="Basit">
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
```

After wrapping your app now you can use state any where in app like below<br />
Grap useSimple module which is same as useState but with parameters because we passed initial state in Index.js.<br />
Just like useState it also return and array of two variables one is your state and another is method for state mutation.<br />

App.js

```jsx
import { useSimple } from "simple-state-mngt";
const App = () => {
  const [state, setState] = useSimple();
  return (
    <div className="App">
      <h1>Hi</h1>
      {state}
      <h1>
        <button onClick={() => setState("Ali")}>Change me</button>
      </h1>
    </div>
  );
};

export default App;
```

## License

MIT © [basitk41](https://github.com/basitk41)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
