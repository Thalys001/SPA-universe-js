export class Router {
  routes = {}

  // Adiciona uma rota ao objeto de rotas
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  // Manipula uma mudança de rota
  route(event) {
    event = event || window.event;
    event.preventDefault();
    // Atualiza a URL do histórico de navegação
    window.history.pushState({}, "", event.target.href);

    // Chama o método handle para lidar com a nova rota
    this.handle();
  }

  // Manipula a rota atual
  handle() {
    const { pathname } = window.location;
    // Obtém a rota correspondente ou a rota de erro 404
    const route = this.routes[pathname] || this.routes[404];

    // Faz uma solicitação fetch para obter o conteúdo da página correspondente à rota
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        // Insere o conteúdo HTML obtido no elemento com a classe "app"
        document.querySelector(".app").innerHTML = html;
      });
  }
}