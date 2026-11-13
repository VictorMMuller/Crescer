# Auditoria final — Crescer+PR Jovem

Data: 13/11/2026 · Projeto estático HTML/CSS/JavaScript.

## Confirmado por testes locais

- Nove páginas independentes: inicial, currículos, tutoriais, vagas, cursos, documentação, FAQ, quem somos e privacidade.
- 63 combinações de página e largura de tela (320, 375, 390, 768, 1024, 1440 e 1920 px): sem transbordamento horizontal, erros JavaScript ou múltiplos H1 detectados.
- Links internos diretos para `index.html`, compatíveis com abrir por dois cliques no computador e com hospedagem estática.
- Menu móvel abre/fecha; tecla Escape fecha quando aberto. Em navegadores sem JavaScript há navegação móvel alternativa.
- FAQ responde a busca e vídeos possuem filtro por categoria.
- Três currículos `.docx` verificados como arquivos ZIP/DOCX válidos.
- SVGs das sete capas locais passam no parser XML e são alternativos às imagens remotas do YouTube.
- Caminhos de todos os links e recursos locais resolvem para arquivos existentes.
- Uma amostragem de textos e fundos do sistema visual passou no contraste mínimo de 4.5:1 (isso **não equivale** à certificação WCAG completa).
- Link do SENAI prioriza gratuidade do Paraná, com fonte oficial https://www.senaipr.org.br/transparencia/gratuidade/oportunidades/ .

## Pendências externas antes da divulgação pública

1. **Vídeos:** conferir manualmente se os sete IDs reproduzem o vídeo esperado, se os cinco títulos editoriais genéricos correspondem ao conteúdo real e se os criadores concordam com o uso das miniaturas públicas. O ambiente não confirmou reprodução no YouTube. As sete capas SVG são ilustrações locais, não miniaturas oficiais.
2. **Links de terceiros:** abrir e testar cada plataforma de vagas e cursos, especialmente navegação em celular e eventuais login/cadastro. Links não equivalem a vagas ou bolsas disponíveis agora.
3. **Identidade e comunicação:** confirmar com o responsável os contatos apresentados, autoria e eventuais políticas de revisão dos links.
4. **Publicação:** definir domínio/hospedagem, gerar sitemap e canonical com domínio real; configurar imagem para compartilhamento e verificar redes sociais.
5. **Acessibilidade:** teste humano de teclado, leitores de tela, zoom, inspeção completa de contraste e auditoria automatizada WCAG 2.2 AA.
6. **Privacidade:** ajustar aviso conforme a hospedagem efetiva, estatísticas, cookies, conteúdo incorporado e qualquer futura coleta. O portal não coleta currículos nem dados de candidatos na versão estática.
7. **Manutenção:** conferir mensalmente vídeos, disponibilidade de cursos, links externos e orientações oficiais. Atualizar página HTML e arquivos JSON de referência quando forem alterados.

Referências: WCAG 2.2 https://www.w3.org/TR/WCAG22/ · Ministério do Trabalho e Emprego https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/aprendizagem-profissional · ANPD https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes · SENAI PR https://www.senaipr.org.br/transparencia/gratuidade/oportunidades/ .

Esta é uma auditoria técnica orientativa, não uma certificação de conformidade legal ou acessibilidade.
