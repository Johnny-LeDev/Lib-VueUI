////
//// Created Date: [2024-11-28 22:06:10]
//// Author: Johnny
////
//// Made with passion 🎵
////
//// File: [example.js]
////

export default class ExampleMenu {
    constructor() {
        this.name = 'example';
        this.type = 'menu'; 
        this.uiManager = window.uiManager;
    }

    render() {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'example-menu';
        menuDiv.innerHTML = `
            <div class="menu-content">
                <h1>Bienvenue dans le menu exemple</h1>
                <button id="closeMenu">Fermer</button>
            </div>
        `;
        menuDiv.style.display = 'none';
        menuDiv.querySelector("#closeMenu").addEventListener('click', () => {
            this.hide();
            this.uiManager.sendNUIEvent(this.name, 'closeMenu');
        });
        return menuDiv;
    }

    show() {
        const menuDiv = document.querySelector('.example-menu');
        if (menuDiv) {
            menuDiv.style.display = 'block';
        }
    }

    hide() {
        const menuDiv = document.querySelector('.example-menu');
        if (menuDiv) {
            menuDiv.style.display = 'none';
        }
    }
}
