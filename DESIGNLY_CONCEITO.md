# Designly — Direção de arte experimental

## Conceito

**“Seu começo, do seu jeito.”** Um mapa de ação para jovens em início de carreira, em vez de um folheto de vagas ou uma página institucional.

A tensão do público é simples: quer fazer o primeiro movimento, mas não sabe qual é o primeiro. O portal não deve vender uma solução mágica nem falar como adulto tentando imitar adolescentes. Deve criar **clareza, energia e autonomia**.

## Diretrizes

- **Ação antes de informação**: início com 3 situações reais; cada resposta traz 3 passos e um link adequado.
- **Tom de conversa, sem caricatura**: frases curtas, linguagem brasileira natural, sem memes passageiros e sem infantilizar.
- **Uma âncora visual por dobra**: manchete gigante no primeiro bloco; orientador no segundo; seis recursos como peças de um conjunto.
- **Cor com responsabilidade**: base escura e creme para legibilidade; verde-lima para ação; violeta, coral e azul apenas para identificar trilhas/categorias.
- **Direção tipográfica**: sans de grande peso e entrelinha curta nos títulos, serif itálica como contraponto editorial; corpo com linhas curtas e entrelinha generosa.
- **Sem IA genérica**: sem glassmorphism, gradiente roxo-azul, avatares 3D, brilho ou promessas falsas.
- **Consistência**: nove páginas com o mesmo cabeçalho/rodapé, mas cada seção recebe tratamento espaçoso, não blocos idênticos infinitos.
- **Simplicidade técnica**: HTML/CSS/JS estáticos; efeitos progressivos e conteúdo legível sem depender de frameworks.

## Decisões de interação

O orientador é um conjunto de botões com `aria-pressed` e região de resposta com `aria-live=polite`. Não é um chatbot, não solicita nome/telefone nem persiste seleção.

## Identidade e conteúdo preservados

Marca Crescer+PR, equipe Protagonistas do Futuro, currículos Word, URLs e catálogos de plataformas. A proposta pode ser revertida sem perda porque a versão aprovada foi salva em branch separada.

## Critérios de aprovação do teste

1. O usuário encontra currículo, vaga ou curso em no máximo dois cliques após escolher uma trilha.
2. Cada página possui `h1`, links e botões com foco visível.
3. Não há rolagem horizontal em 320/390/768/1440px.
4. Miniaturas externas têm SVG alternativo local.
5. A equipe conserva exatamente os nove nomes e funções da versão aprovada.
6. Nenhum arquivo de produção em `main` é substituído sem aprovação explícita.
