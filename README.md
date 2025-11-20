# Cartaz de Filmes

Este projeto é um **cartaz de filmes** em formato de página web estática.  
Ele exibe uma coleção de filmes em forma de **cards interativos**, permitindo **busca por título** e **filtro por gênero**, além de acesso rápido aos **trailers** no YouTube.

---

## Funcionalidades

- **Listagem de filmes**  
  - Exibição de pôster, título, ano de lançamento, gênero, duração e nota (em estrelas).
- **Busca por título**  
  - Campo de pesquisa que filtra os filmes à medida que o usuário digita.
- **Filtro por gênero**  
  - Combobox com todos os gêneros encontrados na base ([data.json](cci:7://file:///c:/Users/eucli/Desktop/Base-de-Conhecimentos/data.json:0:0-0:0)), permitindo filtrar os resultados.
- **Cards interativos**  
  - Card com efeito de “virar” (flip) ao passar o mouse, exibindo detalhes no verso.
- **Acesso ao trailer**  
  - Botão em cada card que abre o trailer do filme em uma nova aba.
- **Layout responsivo**  
  - Interface adaptada para diferentes tamanhos de tela (desktop, tablet e mobile).
- **Tema escuro moderno**  
  - Visual inspirado em interfaces modernas, com tipografia suave e destaque para os pôsteres.

---

## Estrutura de Arquivos

- [index.html](cci:7://file:///c:/Users/eucli/Desktop/Base-de-Conhecimentos/index.html:0:0-0:0)  
  Estrutura principal da aplicação: header com título, campo de busca, filtro de gênero e container para os cards.

- [style.css](cci:7://file:///c:/Users/eucli/Desktop/Base-de-Conhecimentos/style.css:0:0-0:0)  
  Define o layout, cores, tipografia, efeito de flip dos cards, responsividade e estilo do rodapé.

- [script.js](cci:7://file:///c:/Users/eucli/Desktop/Base-de-Conhecimentos/script.js:0:0-0:0)  
  - Carrega os dados de [data.json](cci:7://file:///c:/Users/eucli/Desktop/Base-de-Conhecimentos/data.json:0:0-0:0) via `fetch`.
  - Monta dinamicamente os cards na tela.
  - Gera o select de gêneros com base nos filmes cadastrados.
  - Implementa a lógica de busca por título e filtro por gênero.
  - Abre o trailer do filme em uma nova aba ao clicar no botão.

- [data.json](cci:7://file:///c:/Users/eucli/Desktop/Base-de-Conhecimentos/data.json:0:0-0:0)  
  Lista de filmes em formato JSON, com campos como:
  - `title`
  - `releaseYear`
  - `rating` (1 a 5, exibido como estrelas)
  - `genre`
  - `duration`
  - `posterUrl`
  - `trailerUrl`

---

## Autor

- **Euclides Marques**

Projeto criado como uma base de conhecimento visual e interativa para explorar filmes de forma simples e rápida.
