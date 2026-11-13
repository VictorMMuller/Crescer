# Auditoria de diretrizes e decisões de implementação

Revisão editorial: 13/11/2026. Auditoria técnica orientativa, **não certificação de conformidade**.

## 1. Acessibilidade — WCAG 2.2 nível AA como alvo
- Semântica HTML: idioma `pt-BR`, `header`, `nav`, `main`, `footer`, títulos hierárquicos e textos de links descritivos.
- Link "Pular para o conteúdo" e foco de teclado visível.
- Botões com área de toque dimensionada e menu móvel acionável por teclado/Escape.
- Cartões de vídeo com imagem `alt`, carregamento preguiçoso e links que funcionam sem JavaScript.
- Sem animação essencial ou autoplay. Preferência de redução de movimento respeitada.
- Contraste projetado com base em texto 4.5:1 e texto grande 3:1 (validar todos os estados em testes automatizados e com leitores de tela).
- Testar zoom 200%/400%, navegação apenas por teclado e leitores de tela antes de declarar acessibilidade formal.

Fonte: https://www.w3.org/WAI/WCAG22/quickref/

## 2. Privacidade e adolescentes — LGPD / orientação ANPD
- Nenhum cadastro, login, currículo enviado ao servidor ou formulário que recolha CPF e dados de menores.
- Links para externos identificados; antes de adicionar formulários, documentar finalidade, base legal, retenção e atendimento aos titulares.
- Melhor interesse de crianças e adolescentes deve prevalecer no eventual tratamento de dados.
- Capas são carregadas de domínios do YouTube (transmissão de dados técnicos ao terceiro). Informado em Privacidade.
- O texto de privacidade é descritivo da implementação, não parecer jurídico.

Fontes: https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-divulga-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes ; https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes

## 3. Informações trabalhistas
- Distinguir emprego formal (regra geral a partir de 16) de Jovem Aprendiz (a partir de 14, antes de 24; pessoa com deficiência sem limite máximo).
- Aprendizagem combina atividades teóricas e práticas; leis específicas regem jornada, frequência escolar e proteção de menores.
- Nunca prometer vaga, gratuidade universal de certificados ou contratação garantida.
- Orientar a confirmar regras atualizadas em órgãos oficiais.

Fontes: https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/julho/aprendizagem-profissional-regras-direitos-e-funcionamento-do-contrato-de-aprendizagem ; https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/areas-de-atuacao/Combate-trabalho-infantil

## 4. Conteúdo e SEO
- Cada seção possui URL, título e meta description próprios; conteúdo visível sem JavaScript (progressive enhancement).
- `alt` nas imagens informativas; imagens decorativas não competem com o texto.
- URLs relativas compatíveis com subdiretórios do GitHub Pages; evitar canonical fictício antes de existir domínio público final.
- Atualização dos conteúdos e validação periódica dos links externos são necessárias.

Fonte: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## 5. Identidade e direitos de terceiros
- Logos e iconografia do projeto fornecidos pelo autor, vetorizados apenas para marca derivada do projeto.
- Vídeos de terceiros são **links externos** com capa fornecida pelo host, não arquivos MP4 duplicados no repositório.
- Marcas e plataformas de vagas citadas de forma editorial, sem sugerir endosso oficial.

## Próxima etapa antes de divulgação ampla

1. Conferir identidade/atribuição e política editorial do responsável.
2. Teste humano no desktop e no celular (inclusive leitor de tela) e auditoria automatizada WCAG.
3. Validar cada vídeo, título, thumb, link de serviço e gratuidade de cursos.
4. Definir domínio e hospedagem, revisar aviso de privacidade conforme tecnologias efetivas e gerar sitemap/canonical.
