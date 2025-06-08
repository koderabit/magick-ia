# 🧙‍♂️ Magick IA

Magick IA é uma aplicação web de exibição e filtro de cartas fictícias de magia, desenvolvida com HTML, CSS e JavaScript. O projeto permite ao usuário visualizar diferentes cartas e aplicar filtros por **categoria** e **preço máximo**.

## 🔮 Demonstração

👉 Acesse: [Koderabit/Magick-ia](https://koderabit.github.io/magick-ia)

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura da aplicação
- **CSS3** – Estilização, layout responsivo e efeitos visuais
  - `reset.css` – Reset básico de estilos
  - `estilos.css` – Estilização principal
  - `responsivo.css` – Ajustes para dispositivos menores
- **JavaScript** – Lógica de filtros e manipulação do DOM

## 🎯 Funcionalidades

- Exibição de cartas fictícias com nome, imagem, categoria, preço e botão de compra via WhatsApp.
- Filtro por **categoria** (`comum`, `rara`, `épica`)
- Filtro por **preço máximo** (valores numéricos)
- Layout **responsivo** para celulares e tablets
- Design moderno com interação fluida

## 🧪 Como funciona o filtro?

Ao clicar no botão **"Aplicar filtros"**, o script JavaScript:

1. Coleta os valores escolhidos de categoria e preço.
2. Percorre todas as cartas.
3. Compara os filtros com os dados da carta (`data-categoria` e `data-preco`).
4. Mostra ou esconde cada carta usando classes CSS (`mostrar`, `esconder`).

## 📁 Estrutura de Pastas

```plaintext
magick-ia/
│
├── index.html                # Página principal
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── estilos.css
│   │   └── responsivo.css
│   ├── js/
│   │   └── index.js          # Lógica de filtros
│   └── imagens/              # Imagens das cartas e ícones
```

## 🚀 Como executar localmente
1. Clone o repositório:
git clone https://github.com/seu-usuario/magick-ia.git
2. Abra o arquivo index.html no seu navegador.
nenhum servidor é necessário, pois o projeto é 100% estático.

## 🧑‍💻 Autor
Criado por [DevEmDobro](https://github.com/devemdobro) e adaptado por [Koderabit](https://github.com/koderabit)
