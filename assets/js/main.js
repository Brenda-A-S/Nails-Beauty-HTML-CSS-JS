import { handleToTop } from './handleToTop.js';
import { toggleVisibility } from './toggleVisibility.js';

// ALTERNAR VISIBILIDADE COM O SCROLL
const btntop = document.querySelector('.top')
// ao evento de scroll ele chama a função que altera visibilidade do botao
window.addEventListener("scroll", (event) => {
    toggleVisibility(btntop, 'visivel')
})

// VOLTAR AI TOPO
// ao evento de click no botao ele chama a função de voltar ao topo
btntop.addEventListener("click", handleToTop);
