# react-backgroud-fading

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-backgroud-fading.svg)](https://www.npmjs.com/package/react-backgroud-fading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-backgroud-fading
```

## Usage

```tsx
import ReactBackgroundFading  from 'react'

import ReactBackgroundFading from 'react-backgroud-fading'
import 'react-backgroud-fading/dist/index.css'

const Example = () => {
  const myCustomecolors:<string> = ['orange', 'gray', 'yellow', 'green', 'red']
  return(
    <ReactBackgroundFading height={500} width={1000} transitionTiming={5} fullAsScreen={true} colors={myCustomecolors} children={
                <div style={{ margin: 0, padding: 0, display: 'flex' }}>
                  <h1>Hello World</h1>
                </div>
        }/>
  );
};
```

## License

MIT © [LyhourChhen](https://github.com/LyhourChhen)
