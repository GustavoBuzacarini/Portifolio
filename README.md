# Portfólio — Gustavo Buzacarini

Este portfólio nasceu com a intenção de apresentar minha trajetória de uma forma mais pessoal e profissional. Eu não queria apenas uma página com meu nome, algumas tecnologias e projetos organizados em cartões. A ideia sempre foi construir uma experiência visual que também mostrasse meu cuidado com identidade, organização e detalhes.

O projeto ainda está em desenvolvimento, mas já representa bem a direção que escolhi seguir: uma interface elegante, com personalidade e sem exageros, construída de maneira compatível com o meu momento de aprendizado.

## Como o projeto começou

O primeiro passo foi desenvolver a Home e encontrar uma identidade visual que combinasse comigo. A escolha foi trabalhar com tons claros de azul, textos em azul profundo, títulos grandes com fonte serifada e bastante espaço em branco.

Essa combinação trouxe o aspecto editorial e profissional que eu procurava. A foto com terno azul também passou a fazer parte dessa identidade e ajudou a deixar a apresentação mais pessoal, sem perder a seriedade.

Depois da Home, percebi que seria importante planejar o restante do portfólio antes de continuar programando. Por isso, criei um mockup completo com as próximas seções e registrei as principais decisões de design. Esse planejamento evitou que cada parte parecesse pertencer a um site diferente.

## Evolução das seções

### Sobre mim

A seção **Sobre mim** foi construída para contar minha história além de uma apresentação curta. Nela, falo sobre o começo na ETEC, o contato com HTML, CSS e lógica de programação e o momento em que percebi que queria trabalhar como programador.

Também procurei mostrar que ainda estou conhecendo as diferentes possibilidades da tecnologia. Mais do que afirmar que já tenho tudo definido, a seção representa minha motivação para aprender, experimentar novas áreas e continuar evoluindo como profissional.

A fotografia recebeu um card próprio, usando o mesmo azul da Home. A moldura foi simplificada para não competir com a imagem e o conjunto foi alinhado ao bloco de texto para manter a organização da seção.

### Projetos

A seção **Projetos** se tornou a parte mais interativa do portfólio. A entrada começa com uma transição circular: conforme a página é rolada, o fundo azul-escuro cresce até ocupar toda a tela e apresentar o título da seção.

Depois dessa abertura, os projetos são exibidos em uma galeria fixa controlada pela rolagem. Cada projeto apresenta uma imagem, uma breve explicação, as tecnologias utilizadas e um link para o respectivo repositório no GitHub. Também é possível clicar diretamente no nome de um projeto para navegar até ele, sem precisar passar por todos os anteriores.

Atualmente, a galeria apresenta:

- DT Money.
- Nexus Cup.
- Pringles.
- Stranger Things.

A passagem entre a abertura e a galeria recebeu um efeito de parallax sutil. A intenção foi criar uma experiência mais marcante, mas sem transformar a animação em algo separado do restante do projeto.

### Formação

Na seção **Formação**, escolhi usar uma linha do tempo para apresentar duas etapas importantes:

- Técnico em Informática Integrado ao Ensino Médio, na Escola Comendador João Rays.
- Bacharelado em Ciência da Computação, no UNISAGRADO, iniciado em 2025 e ainda em andamento.

Ao lado da formação acadêmica, adicionei meus certificados reais. Três deles ficam em destaque e os demais podem ser visualizados pelo botão **Ver certificados**. Cada card abre o arquivo original do certificado, mantendo a seção organizada sem esconder o conteúdo.

### Experiência

A seção **Experiência** apresenta minha passagem pela Transportadora Risso entre 2025 e 2026. O texto destaca o contato com a área de logística, a organização de processos, o suporte às operações e habilidades como trabalho em equipe, comunicação e foco em resultados.

Para representar essa experiência de maneira visual, utilizei uma imagem de caminhão em uma estrada. A imagem recebeu ajustes de saturação, contraste e transparência nas quatro bordas para se misturar ao fundo do card, em vez de parecer apenas uma imagem colocada sobre a seção.

### Eventos

A seção **Eventos** segue a mesma estrutura visual da experiência profissional e apresenta minha participação no VII Hack@day da UNISAGRADO. Durante o evento, trabalhei em equipe no desenvolvimento do CampusON, uma aplicação em React criada para reunir eventos do campus e apresentá-los também em um mapa interativo.

Além de registrar o evento, essa parte do portfólio mostra uma experiência prática de colaboração, desenvolvimento e apresentação de uma solução em tecnologia.

### Contato

A seção **Contato** foi construída de maneira mais direta. O e-mail recebeu o maior destaque por ser a melhor forma de falar comigo, acompanhado pelo meu WhatsApp, LinkedIn, GitHub e um botão que abre meu currículo completo.

Também foi adicionado um botão minimalista para retornar diretamente à Home. Assim, depois de percorrer o portfólio, o visitante não precisa rolar toda a página novamente para voltar ao início.

Logo abaixo, um footer simples encerra o portfólio sem adicionar informações desnecessárias ou competir com os contatos.

## O que está pronto atualmente

- Home com apresentação, fotografia e links profissionais.
- Preloader animado para apresentar o portfólio durante o carregamento.
- Seção Sobre mim com minha trajetória e características profissionais.
- Abertura animada da seção Projetos.
- Galeria com quatro projetos, tecnologias utilizadas e links para os repositórios.
- Navegação clicável entre os projetos.
- Transição com parallax entre a abertura e a apresentação dos projetos.
- Seção Formação com linha do tempo acadêmica.
- Área de certificados com arquivos reais e opção de expansão.
- Seção Experiência com conteúdo da Transportadora Risso.
- Seção Eventos com a participação no VII Hack@day e o projeto CampusON.
- Seção Contato com e-mail, WhatsApp, redes profissionais e currículo.
- Botão para retornar diretamente à Home.
- Footer simples para encerrar a página.
- Rolagem suave com ScrollSmoother.
- Adaptação das seções para telas de computador e celular.

## Tecnologias utilizadas

- HTML5 para a estrutura e semântica das seções.
- CSS3 para layout, identidade visual e responsividade.
- Flexbox para a organização dos elementos.
- SVG para ícones simples da interface.
- JavaScript para o preloader, a navegação entre projetos e o controle das interações.
- GSAP para as animações do portfólio.
- ScrollTrigger para relacionar as animações ao movimento de rolagem.
- ScrollSmoother para tornar a navegação mais suave.
- Google Fonts com as famílias Judson e DM Sans.

As bibliotecas do GSAP são carregadas por CDN, mantendo a estrutura do projeto simples e sem a necessidade de um processo de instalação mais complexo.

## Como executar o projeto

Como o portfólio utiliza JavaScript e arquivos locais, o ideal é abri-lo por meio de um servidor local, e não diretamente pelo arquivo `index.html`.

Uma opção simples é usar a extensão **Live Server** no Visual Studio Code. Também é possível executar pelo terminal com:

```bash
npx http-server .
```

Depois, basta abrir no navegador o endereço informado pelo servidor.

## Próximos passos

O portfólio já possui todas as seções principais. As próximas etapas serão voltadas a melhorias pontuais, como revisar os textos, atualizar projetos e certificados e aperfeiçoar detalhes de acessibilidade e desempenho sem perder a simplicidade do código.

## Sobre o desenvolvimento

Este projeto não foi pensado como algo pronto de uma vez. Cada seção passou primeiro por uma etapa de design e depois foi desenvolvida de forma separada, sempre tentando manter a mesma identidade e um nível de código que acompanhe meu aprendizado.

O objetivo é que o resultado não mostre apenas o que eu sei fazer, mas também a maneira como penso um projeto: começando pela ideia, organizando a identidade visual, cuidando da experiência em diferentes telas, testando as interações e evoluindo a implementação por etapas.
