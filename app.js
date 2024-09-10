function pesquisar() {
    let section = document.getElementById("resultados-pesquisas");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = `<p>Campo pesquisa Vazio</p>`;
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        //se titulo include campoPesquisa, então faça
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <P class="descricao-meta">${dado.descricao}
        </P>
        <a href=${dado.link} target="_blank"> Saiba mais</a>
      </div>
    `
        }
    }

    if (!resultados) {
        resultados = `<p>Nada foi encontrado</p>`;
    }
    section.innerHTML = resultados;
}