# Lib-VueUI

**Lib-VueUI** is a lightweight and flexible library for integrating Vue.js-based UI components in FiveM projects. It simplifies the management of custom user interfaces, dynamically loads UI elements, and handles user input events. Designed for FiveM servers, it allows seamless integration with Lua and enhances the in-game UI experience.

## Features

- **Dynamic UI Component Loading**: Automatically load UI components from a configuration file and render them.
- **Vue.js Powered**: Built with Vue.js to provide reactivity and simplicity.
- **Custom UI Elements**: Easily add new UI components with their own styles and behavior.
- **Focus Management**: Supports handling NUI focus, controlling UI visibility and interaction.
- **Event Handling**: Easily communicate between JavaScript (NUI) and Lua to trigger events on both sides.

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
