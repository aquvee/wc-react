# Aquvee WebComponent React

`Aquvee WebComponent React` is a React adaptation of the original `aquvee-component`, designed to seamlessly integrate with React applications. It enables easy embedding of your data-driven components in React projects. This guide will walk you through the installation and implementation process.

## Installation

To use `Aquvee WebComponent React` in your project, you need to install it via npm. Run the following command in your project directory:

```bash
npm install git+https://github.com/aquvee/wc-react.git
```

## Usage

### Implementing in React

After installing the package, you can import and use `AquveeComponent` in your React application. Here's how to do it:

#### Import the Component

First, import `AquveeComponent` at the top of your React component file:

```javascript
import AquveeComponent from '@aquvee/wc-react';
```

#### Using the Component

Incorporate `AquveeComponent` into your React component's render method or return statement. Here's an example of its usage:

```jsx
<AquveeComponent
    query='Please tell me five pieces of user information'
    aquveeUrl='http://localhost:8000/wc'>
    table
</AquveeComponent>
```

##### Props

- `query`: This is the query string used for data retrieval. In this example, it's `"Please tell me five pieces of user information"`.

- `aquveeUrl`: The endpoint URL where the component fetches data. Here, it's set to `http://localhost:8000/wc`.

##### Child Content

Specify the output format. It can be a keyword like `"table"` or a custom HTML structure, e.g., `<div class="card-wrapper"><div class="card"></div></div>`. This flexibility allows for varied display styles.

#### Complete Example

Below is a complete example demonstrating how to integrate `AquveeComponent` into a React application:

```jsx
import React from 'react';
import AquveeComponent from '@aquvee/wc-react';

function MyApp() {
    return (
        <AquveeComponent
            query='Please tell me five pieces of user information'
            aquveeUrl='http://localhost:8000/wc'>
            table
        </AquveeComponent>
    );
}

export default MyApp;
```
