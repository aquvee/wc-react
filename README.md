# Aquvee WebComponent React

`Aquvee WebComponent React` is a React wrapper for the original `AquveeComponent`, designed to seamlessly integrate with React applications. This library facilitates the easy embedding of data-driven components in React projects. This guide will walk you through the installation and implementation process.

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
    query="Please tell me five pieces of user information"
    projectId="your-project-id"
    isDev={true}
    styleCss="your-custom-style">
    <!-- Your desired format goes here -->
</AquveeComponent>
```

##### Props

- `query`: The query string used for data retrieval. For example, `"Please tell me five pieces of user information"`.
- `projectId`: Your unique project identifier, used in constructing the request URL for the production server.
- `isDev`: (Optional) A boolean indicating whether to use the development server configuration. When set to `true`, it modifies the request URL to a development server.
- `styleCss`: (Optional) Custom CSS styles for the AquveeComponent. The specified styles will be applied within the component's Shadow DOM.
- `customUrl`: (Optional) Custom URL for specific endpoint configurations.

##### Child Content

Define the output format directly as child content of the component. It can be a simple keyword like `"table"` or a more complex HTML structure, allowing for customized display styles.

#### Complete Example

Below is a complete example demonstrating how to integrate `AquveeComponent` into a React application:

```jsx
import React from 'react';
import AquveeComponent from '@aquvee/wc-react';

function MyApp() {
    return (
        <AquveeComponent
            query="Please tell me five pieces of user information"
            projectId="your-project-id"
            isDev={true}
            styleCss="your-custom-style">
            <!-- Your desired format goes here -->
        </AquveeComponent>
    );
}

export default MyApp;
```
