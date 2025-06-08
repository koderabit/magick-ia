const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', () => {
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();
    const precoMaximoSelecionado = parseFloat(document.querySelector('#preco').value);

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach((carta) => {
        const categoriaCarta = carta.dataset.categoria.toLowerCase();
        const precoCarta = parseFloat(carta.dataset.preco);

        const temFiltroCategoria = categoriaSelecionada !== '';
        const categoriaNaoCorresponde = categoriaSelecionada !== categoriaCarta;

        const temFiltroPreco = !isNaN(precoMaximoSelecionado);
        const precoMaiorQueFiltro = precoCarta > precoMaximoSelecionado;

        const deveMostrar = 
            (!temFiltroCategoria || !categoriaNaoCorresponde) &&
            (!temFiltroPreco || !precoMaiorQueFiltro);

        carta.classList.toggle('mostrar', deveMostrar);
        carta.classList.toggle('esconder', !deveMostrar);
    });
});