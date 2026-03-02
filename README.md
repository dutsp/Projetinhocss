# Relatório de Implementação: Cascading Style Sheets (CSS)

Este documento detalha as soluções técnicas aplicadas ao arquivo de testes de CSS, com foco em seletores de atributos, pseudo-classes, pseudo-elementos e combinadores de hierarquia, focando em mostrar a cooperação entre os membros para construir a implementação.

---

## Objetivos de Implementação

Abaixo constam os requisitos técnicos a serem validados no arquivo `style.css`:

* [X] **Normalização Tipográfica:** Definir `font-family: Arial, sans-serif` para todos os elementos `p`.
* [X] **Estilização de ID:** Atribuir a cor azul ao título principal (`#titulo-principal`).
* [X] **Destaque de Classe:** Aplicar `background-color: yellow` em todos os elementos com a classe `.destaque`.
* [X] **Seleção Seletiva:** Atribuir a cor vermelha especificamente ao Item 2 (classe `.importante`).
* [X] **Seletor de Atributo:** Aplicar `border: 1px solid blue` apenas em elementos `input[type="password"]`.
* [x] **Estado de Interação:** Implementar a alteração de cor de fundo em elementos `button` via pseudo-classe `:hover`.
* [X] **Combinador de Descendência:** Alterar a cor do elemento `p` que seja filho direto (`>`) da primeira `div` dentro da classe `.container`.
* [X] **Manipulação de Pseudo-elemento:** Incrementar o `font-size` da primeira letra (`::first-letter`) de todos os parágrafos.
* [X] **Pseudo-classe Estrutural:** Aplicar `font-weight: bold` estritamente ao primeiro descendente `li` (`:first-child`).

---

### Bloco de Código Fonte (CSS)

```css
/* Seletores de Tipo e Elemento */
p {
    font-family: Arial, sans-serif;
}

h1 {
    color: blue;
}

/* Seletores de Classe e Identidade */
.destaque {
    background-color: yellow;
}

#item-2 {
    color: red;
}

/* Atributos e Estados Dinâmicos */
input[type="password"] {
    border: 2px solid blue;
}

button:hover {
    background-color: #d1d1d1;
}

/* Seletores Estruturais e Pseudo-elementos */
.container > div:first-of-type > p {
    color: #00008B;
}

p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

li:first-child {
    font-weight: bold;
}
