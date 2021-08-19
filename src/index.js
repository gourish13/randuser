import Alpine from 'alpinejs';
import App from './components/App';

Alpine.data('app', App);

window.Alpine = Alpine;

Alpine.start();

console.log('Alpine JS loaded.');
