import {getHome} from "../Pages/home/home.js";

const app = document.getElementById('app');

export function router() {
    const hash = window.location.hash || '#/home';
    const parts = hash.slice(2).split('/');
    const route = parts[0];
    //const mal_id = parts[1];

    switch (route) {
        case 'home':
            getHome(app);
            break;
        default:
            app.innerHTML = `<h2>Page not found</h2>`;
            break;
    }
}