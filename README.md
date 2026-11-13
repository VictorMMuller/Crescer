# Crescer+PR Jovem — experimento “Seu começo, do seu jeito”

## Atualização: identidade visual v2 (13/11/2026)

O experimento passou por uma rodada de refinamento após feedback: **logo original recuperada nas nove páginas**, paleta verde e amarelo coerente com a marca, tipografia mais contrastada, cartões mais discretos e navegação mais clara na área de destaque. Som de microinterações é **opcional e desligado por padrão**. As páginas de vídeos permanecem com links externos, sem autoplay.

Arquivos novos: `IDENTIDADE_VISUAL_V2.md` (manual), `assets/css/identity-v2.css` e `assets/js/soft-sounds.js`.

O hero agora apresenta três atalhos úteis para currículo, vagas e cursos, sem personagem. A versão anterior continua preservada no histórico Git.

A versão experimental imediatamente anterior foi preservada em `backup/design-jovem-v1-2026-11-13`. A branch `main` não foi editada nesta revisão. Esta rodada foi validada por checagem estrutural e cálculos de contraste de pares críticos; ainda requer validação visual humana, teste funcional com browser e revisão de acessibilidade completa antes de divulgação.

Este diretório é uma **proposta experimental**, desenvolvida como alternativa visual à versão principal do Crescer+PR Jovem. Ela **não substitui** a versão original aprovada.

## Como abrir

Abra `index.html` em um navegador. O site é estático, sem instalação, backend ou build obrigatório. Os links entre as nove páginas funcionam pelo sistema de caminhos relativos. Para publicar, use uma hospedagem estática apontando para a raiz do projeto.

## Diferenças intencionais

- Nova identidade editorial de contraste alto: verde quase-preto, verde-lima, violeta, coral e azul em posições específicas.
- Página inicial com orientação por situação (nunca trabalhou, procura vaga, quer aprender). A seleção funciona só no navegador e **não coleta ou salva dados**.
- Textos mais naturais e conversacionais, sem simular um chatbot nem fazer promessas de empregabilidade.
- Todas as nove páginas continuam independentes.
- Conjuntos já existentes preservados: instituições de vagas e cursos, links, currículos .docx, tutoriais e equipe Protagonistas do Futuro.
- Miniaturas do YouTube continuam no site; capas locais em SVG aparecem como alternativa se uma miniatura não carregar.
- `noindex,nofollow` no experimento para evitar indexação acidental de versões concorrentes.

## Árvore principal

```text
index.html                         Início + orientador de três caminhos
curriculos/index.html              Três modelos Word
vagas/index.html                   Plataformas (8 cartões)
cursos/index.html                  Plataformas (6 cartões)
tutoriais/index.html               Sete vídeos com capas
faq/index.html                     Busca e perguntas
documentacao/index.html            Orientações documentais
quem-somos/index.html              Sobre + nove integrantes da equipe
privacidade/index.html             Informações sobre privacidade
assets/css/site.css                Sistema anterior de suporte
assets/css/experimental.css        Nova direção visual
assets/js/site.js                  Filtros, FAQ, imagens
assets/js/experimental.js          Menu e orientador interativo
assets/videos/capas/               Sete capas SVG de fallback
assets/parceiros/                  Identificação visual das plataformas
assets/curriculos/                 Modelos Word
```

## Branches do GitHub

- Versão anterior intacta: `backup/design-anterior-2026-11-13`
- Experimento isolado: `experimento/design-jovem`
- Produção atual: `main` (**não editada** por este experimento)

## Testes

Validação de 9 páginas em 4 larguras (1440, 768, 390, 320px): um `h1` por página, sem erros detectados de JavaScript, sem overflow horizontal e sem imagens carregadas quebradas. Menu móvel e escolha do orientador foram exercitados no navegador de testes. Os vídeos externos e a disponibilidade de plataformas dependem de terceiros e precisam de checagem periódica.

## Observações de conteúdo

Crescer+PR Jovem é um projeto independente. As plataformas externas não são vagas específicas garantidas. Algumas descrições de vídeos foram mantidas com identificação genérica até uma conferência individual do conteúdo. Nenhum arquivo de vídeo de terceiros foi copiado para o repositório.
