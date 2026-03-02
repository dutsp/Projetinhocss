# Relatório de Implementação: Cascading Style Sheets (CSS)

Este documento detalha as soluções técnicas aplicadas ao arquivo de testes de CSS, com foco em seletores de atributos, pseudo-classes, pseudo-elementos e combinadores de hierarquia, focando em mostrar a cooperação entre os membros para construir a implementação.

---

### Especificações Técnicas de Seleção

A implementação seguiu os critérios de especificidade e herança do CSS para atender aos seguintes requisitos:

* **Normalização de Tipografia:** Aplicação da propriedade `font-family: Arial, sans-serif` em todos os elementos de parágrafo (`p`).
* **Definição de Escopo de Título:** Atribuição da propriedade `color: blue` ao elemento `h1` (Título Principal).
* **Seletores de Classe:** Mapeamento de todos os elementos vinculados à classe `.destaque` para a aplicação de `background-color: yellow`.
* **Identificação Univoca:** Seleção do "Item 2" para aplicação de cor vermelha (via ID ou seletor de ordem).
* **Seletores de Atributo:** Filtragem de elementos `input` via predicado `[type="password"]` para definição de borda azul.
* **Pseudo-classes de Estado:** Implementação do estado `:hover` em elementos `button` para alteração dinâmica de `background-color`.
* **Combinadores de Descendência Direta:** Seleção do elemento `p` utilizando o combinador de filho direto `>` subordinado à primeira `div` contida em `.container`.
* **Pseudo-elementos de Conteúdo:** Manipulação da primeira letra (`::first-letter`) de todos os parágrafos para incremento de `font-size`.
* **Pseudo-classes Estruturais:** Aplicação de `font-weight: bold` estritamente ao primeiro descendente `li` (`:first-child`).

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