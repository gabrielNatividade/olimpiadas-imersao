# Atletas do Brasil 🏅

Este projeto foi desenvolvido durante uma imersão Dev da **Alura**, com o objetivo de praticar o uso de **JavaScript**, manipulação de DOM e a construção de uma aplicação simples que permite buscar informações sobre atletas brasileiros. O projeto simula a interação com APIs para fornecer detalhes relevantes de cada atleta.

---

## 🖥️ Visão Geral

A aplicação exibe informações sobre atletas brasileiros destacados em diversas modalidades esportivas. O usuário pode realizar buscas por nome ou por palavras-chave relacionadas às descrições dos atletas e visualizar os resultados diretamente na página.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura do site, com elementos semânticos para uma melhor acessibilidade.
- **CSS3**: Estilização básica do layout para tornar a aplicação visualmente agradável.
- **JavaScript**: Interatividade, manipulação de elementos do DOM e implementação da funcionalidade de busca.

---

## 📂 Estrutura do Projeto

```plaintext
/
├── index.html         # Página principal do projeto
├── style.css          # Arquivo de estilização
├── dados.js           # Dados simulados (substitui uma API real)
├── app.js             # Script principal com a lógica da aplicação
└── README.md          # Documentação do projeto
```

---

## ⚙️ Funcionalidades

### 🔍 Busca
- O usuário pode digitar o nome ou termos relacionados à descrição de um atleta no campo de pesquisa.
- A aplicação filtra os resultados com base na entrada do usuário.

### 📋 Exibição
- Os resultados da busca exibem:
  - Nome do atleta.
  - Breve descrição.
  - Link para mais informações.

### 📭 Contato
- Informações de contato estão disponíveis no rodapé.

---

## 📝 Exemplos de Dados

Os dados estão armazenados no arquivo `dados.js` e incluem informações sobre atletas brasileiros de destaque, como:

```javascript
let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, conhecida como 'Fadinha', é uma skatista brasileira que se tornou a mais jovem medalhista olímpica da história do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma das maiores ginastas da história do Brasil. Com talento e determinação, tornou-se um símbolo de superação.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
    }
];
```

---

## 📌 Melhorias Futuras

- **Consumo de APIs Reais**: Implementar integração com APIs de dados esportivos.
- **Filtros Avançados**: Adicionar filtros por modalidade esportiva ou ano de destaque.
- **Design Responsivo**: Ajustar o layout para dispositivos móveis e telas menores.
- **Animações**: Tornar a aplicação mais dinâmica com transições suaves.

---
