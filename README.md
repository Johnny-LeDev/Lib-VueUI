# Lib-VueUI

**Lib-VueUI** is an elegant and lightweight library designed to facilitate the integration of Vue.js-driven user interface components into FiveM projects. 

## Key Features

- **Dynamic UI Component Loading**: Effortlessly load and render UI components based on a configurable file structure.
- **Vue.js Integration**: Built upon the Vue.js framework, it leverages its reactive data-binding and declarative rendering for enhanced simplicity and flexibility.
- **Customizable UI Elements**: Easily extend and tailor the user interface with fully customizable components, each with their own unique style and behavior.
- **Focus Management**: Provides robust control over NUI focus, enabling fine-grained visibility and interaction management for UI elements.
- **Bi-directional Event Handling**: Simplifies communication between JavaScript (NUI) and Lua, allowing the triggering of events on both sides for seamless integration.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/Lib-VueUI.git
    ```

2. **Add the files to your FiveM project**:
   - Copy the `Lib-VueUI` folder to your resources directory in your FiveM server.
   - Add the necessary scripts and stylesheets into your HTML and JavaScript files.

3. **Configure your UI components** in the `uiConfig` object to define which elements you want to load.

## Usage

### Example of configuring and using `Lib-VueUI`

1. **Configuration (index.js)**: Define which UI components you want to load.

```js
const uiConfig = {
    uiFiles: [
        { name: "example", repertory: "menu/examplemenu/" },
        // Add more UI components as needed
    ]
};
