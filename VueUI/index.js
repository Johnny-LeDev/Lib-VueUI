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
}

const uiManager = new UIManager(uiConfig);

document.addEventListener("DOMContentLoaded", () => {
    uiManager.loadUIElements();
});