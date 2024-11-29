////
//// Created Date: [2024-11-28 21:25:26]
//// Author: Johnny
////
//// Made with passion 🎵
////
//// File: [index.js]
////


const uiConfig = {
    uiFiles: [
        { name: "example", repertory: "menu/examplemenu" },
        // { name: "hud", repertory: "hud/hud/" },
        // { name: "notification", repertory: "notification/notification/" }
    ]
};

class UIManager {
    constructor(config, containerSelector = "#app") {

        this.uiElements = []; 
        this.config = config; 
        this.appContainer = document.querySelector(containerSelector); 
        this.initMessageListener();

    }

    loadCSS(filePath) {

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = filePath; 

        link.onerror = () => {
            console.error(`Error loading CSS: ${filePath}`);
        };

        document.head.appendChild(link);

    }
    
    loadUIElements() {

        this.config.uiFiles.forEach(element => {

            this.loadCSS(`./${element.repertory}/style.css`);

            import(`./${element.repertory}/${element.name}.js`)

            .then(module => {

                const elementInstance = new module.default(); 

                elementInstance.type = element.name; 

                this.uiElements.push(elementInstance);  

                this.appContainer.appendChild(elementInstance.render()); 
            })

            .catch(err => {
                console.error(`Error loading ${element.name}:`, err);
            });

        });

    }

    showUIElement(elementName) {

        const element = this.uiElements.find(e => e.name === elementName);

        if (element) {

            element.show(); 

        } else {

            console.error(`UI element ${elementName} not found.`);

        }

    }

    hideUIElement(elementName) {

        const element = this.uiElements.find(e => e.name === elementName);

        if (element) {

            element.hide(); 

        } else {

            console.error(`UI element ${elementName} not found.`);

        }

    }

    sendNUIEvent(elementName, functionName, data = {}) {

        const endpoint = `${elementName}/${functionName}`;

        return fetch(`https://Lib-VueUI/${endpoint}`, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to send NUI event: ${response.statusText}`);
            }
            return response.json();
        })

        .catch(error => {
            console.error(`Error in sendNUIEvent(${elementName}/${functionName}):`, error);
        });
    }

    initMessageListener() {

        window.addEventListener("message", (event) => {

            const { action, element } = event.data;

            if (action === "showFrame") {

                this.showUIElement(element);

            } else if (action === "hideFrame") {

                this.hideUIElement(element);

            } else {
                console.error(`Unknown action received: ${action}`);
            }

        });

    }
    
}

const uiManager = new UIManager(uiConfig);

window.uiManager = uiManager;

document.addEventListener("DOMContentLoaded", () => {
    uiManager.loadUIElements();
});