# Crescer+PR Jovem — Identidade visual do experimento v2

> Documento de trabalho. Preserva a marca já existente e organiza uma linguagem visual jovem, educativa e confiável. Não substitui a identidade oficial de eventual mantenedor nem modifica a branch `main`.

## Essência
- **Propósito:** ajudar jovens do Paraná a iniciar a vida profissional com informação, currículos, cursos e oportunidades.
- **Personalidade:** próxima, acolhedora, positiva, clara; jovem sem infantilizar.
- **Conceito:** **Seu começo, do seu jeito**.
- **Princípio de UX:** uma ação principal por seção, texto legível antes de efeitos visuais.

## Marca original (preservar)
- **Logotipo:** `assets/brand/logo.svg` — usado no cabeçalho em todas as nove páginas.
- **Versão clara:** `assets/brand/logo-claro.svg` — usada no rodapé verde-escuro.
- **Símbolo:** `assets/brand/simbolo.svg` — hexágono verde com elemento amarelo e avanço triangular.
- **Favicon:** `assets/brand/favicon.svg` — coerente com o logo.
- NÃO substituir por lettering genérico, redesenhar as proporções nem aplicar efeitos/glows no logo.
- Área livre ao redor do logo: pelo menos metade da altura do símbolo; fundo liso de alto contraste.

## Cores / tokens
| Função | Cor | Uso |
|---|---|---|
| Verde base | `#173F36` | marca, títulos e botões principais |
| Verde de crescimento | `#1D8778` | símbolos, foco e elementos orientadores |
| Amarelo da marca | `#EFDC75` | CTA prioritário, progresso e detalhes |
| Verde noite | `#112E28` | hero, rodapé, trechos de destaque |
| Creme | `#F8F7EF` | fundo geral e respiro |
| Branco quente | `#FFFEFA` | cards e área de leitura |
| Texto secundário | `#3D5549` | subtítulos e descrições |
| Linhas suaves | `#D3DED3` | divisões e bordas |

Evitar arco-íris de cards (todas as categorias com cores fortes), sombras pesadas, brilhos neon e dezenas de ornamentos concorrendo.

## Hero sem personagem
- Substituímos a ilustração por um painel editorial com **três atalhos úteis**: currículo, vagas e cursos.
- O painel usa o símbolo original em `assets/brand/simbolo.svg`, sem criar outro personagem ou modificar a marca.
- A marca completa continua no cabeçalho e no rodapé; o elemento visual secundário existe para ajudar na navegação.
- Evitar novos personagens e ornamentação que não tenham função informativa.

## Hierarquia e legibilidade
1. Título da dobra: um ponto focal.
2. Texto de apoio: curto, em cor escura sobre fundo claro ou branco sobre verde muito escuro.
3. CTA principal: amarelo; secundário: contorno com contraste adequado.
4. Cards de ferramentas: mesma superfície clara, variação de cor restrita ao ícone.
5. Evitar corpo abaixo de 14px. Metadados podem usar 11px com bom contraste.
6. Bordas e sombras sutis, cantos coerentes; ritmo vertical de 72–100px nas seções grandes.
7. Mobile 320px: uma coluna para cards muito estreitos; nunca exigir leitura de texto sobre imagens.

## Movimento e som
- Transições discretas apenas nos elementos de ação; respeitar `prefers-reduced-motion: reduce`.
- `assets/js/soft-sounds.js`: som **desligado por padrão**, ativado apenas com botão explícito.
- Som sintético local de baixa intensidade para escolha de trilhas e ações, sem biblioteca, mídia externa, autoplay, cookies nem envio de dados.
- A interface funciona integralmente sem som e sem animação. Não adicionar vídeo de reprodução automática.
- A área de vídeos existente continua encaminhando aos vídeos de origem, sem cópia de arquivos de terceiros.

## Arquivos deste teste
- `assets/css/identity-v2.css` — camada de design que vem após `experimental.css`.
- `assets/brand/simbolo.svg` — símbolo original usado no painel de acesso rápido.
- `assets/js/soft-sounds.js` — sons de interface com ativação opcional.
- `index.html` e oito páginas internas — logos, favicon, carregamento de estilos e áudio atualizados.
- A branch `main` permanece intocada.

## Validação necessária antes de publicar
- Revisar contraste em todos os estados, incluindo hover/foco, com ferramenta WCAG e leitor de tela.
- Conferir 320 / 390 / 768 / 1440 pixels e zoom 200%; menus e interações por teclado.
- Conferir vídeos, links externos, programas e regras de contratação antes de divulgar.
- Revisar a identidade visual e os atalhos com a equipe responsável pelo projeto.
