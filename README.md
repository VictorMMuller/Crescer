# Crescer+PR Jovem

Portal estático independente, com páginas HTML próprias, CSS e JavaScript sem build, React, Base44, npm ou backend.

## Começar

1. Abra `index.html` no Chrome, Edge ou Firefox (funciona localmente).
2. Navegue pelas páginas pelo menu. Os arquivos em `assets/` devem permanecer na mesma estrutura.
3. Para publicar no GitHub Pages, abra **Settings → Pages** e escolha **Deploy from a branch → main → /(root)**. Não é preciso instalar dependências. Se o repositório for privado, confira se a sua conta permite Pages para projetos privados; GitHub Pages publica o site na web conforme as configurações do repositório e plano.

## Pastas

```
index.html                    Página inicial
curriculos/index.html         Currículos
cursos/index.html             Cursos
vagas/index.html              Plataformas de vagas
tutoriais/index.html          Vídeos com capas do YouTube
documentacao/index.html       Orientações documentais
faq/index.html                Perguntas frequentes
quem-somos/index.html         Sobre o projeto
privacidade/index.html        Informações de privacidade
assets/css/site.css           Identidade visual / responsividade
assets/js/site.js             Menu, filtros e busca
assets/brand/                 Marcas SVG refinadas e ícones originais
assets/curriculos/            Três modelos Word originais
assets/data/catalogo.json    Catálogo editável (arquivo de referência)
```

> O JSON é um catálogo editorial de referência. As páginas HTML são pré-renderizadas para abrir com dois cliques. Se alterar o JSON, atualize o HTML correspondente ou adapte o gerador de origem. O código-fonte do gerador `build.py` está incluído para facilitar manutenção local.

## Vídeos

Os sete vídeos são listados com seus IDs originais em `assets/data/catalogo.json`. As capas são exibidas diretamente de `https://i.ytimg.com/vi/ID/hqdefault.jpg`, sem re-hospedar vídeos ou miniaturas de terceiros no GitHub. Necessitam de internet. Para corrigir um título ou substituir um vídeo, atualize o catálogo e o HTML em `tutoriais/index.html`.

## Limites e manutenção

- Não há cadastro, sistema de autenticação, banco de vagas ou coleta própria de dados pessoais.
- Os links de vagas são serviços de terceiros, **não vagas verificadas em tempo real**.
- A gratuidade dos cursos varia por instituição e turma.
- O texto de privacidade descreve o site estático atual. Revise quando adicionar analytics, cookies, formulários ou hospedagem diferente.
- Para produção, configure domínio, sitemap/canonical e teste acesso real a todos os links externos.
- Não publique dados pessoais de candidatos, segredos, tokens ou credenciais no GitHub.

## Créditos

Recriação editorial do projeto Crescer+PR Jovem com os arquivos fornecidos pelo autor. Materiais de currículo preservados; marcas de terceiros e capas de vídeos permanecem propriedade de seus autores. A iconografia hexagonal original está na pasta `assets/brand/originais`.
