import { Router } from './router.js';

// Cria uma instância da classe Router
const router = new Router();

// Adiciona rotas ao roteador
router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');
router.add(404, '/pages/404.html');

// Lida com a rota inicial
router.handle();

// Define um ouvinte para o evento onpopstate, que é acionado quando o histórico de navegação é alterado
window.onpopstate = () => router.handle();

// Expondo uma função "route" global que parece não estar completamente implementada
window.route = () => router.route();