# Integrações e API

O GovWiki oferece várias maneiras de integrar com sistemas já utilizados pela sua organização pública.

## Integrações Incorporadas

Você pode incorporar conteúdo de outras ferramentas diretamente em seus documentos. Visite o [diretório de integrações](https://www.getoutline.com/integrations) para uma lista completa das ferramentas suportadas.

Para incorporar conteúdo, digite `/` no editor seguido do nome da ferramenta (por exemplo, `/figma` ou `/miro`). Cole o link e o conteúdo aparecerá automaticamente no seu documento.

## Autenticação única (SSO)

Para organizações públicas que utilizam sistemas de autenticação centralizados, o GovWiki suporta:

- Google Workspace / Gmail
- Microsoft Azure AD
- OIDC (OpenID Connect)
- SAML 2.0

## API

Tem conhecimentos técnicos? O GovWiki é construído sobre uma API completamente funcional no estilo RPC. Crie (ou até mesmo anexe a) documentos, coleções, provisione usuários e muito mais programaticamente. Todos os documentos são editados e armazenados em formato markdown – experimente este exemplo:

```bash
curl -X POST -H 'authorization: Bearer API_TOKEN' -H 'content-type: application/json' -d '{
  "title": "Novo documento via API",
  "text": "# Esta é uma API incrível",
  "collectionId": "YOUR_COLLECTION_ID",
  "publish": true
}' 'https://seudominio.com/api/documents.create'
```

Substitua:
- `API_TOKEN` - obtenha um token de API em /settings/tokens
- `YOUR_COLLECTION_ID` - ID da coleção onde o documento será criado
- `seudominio.com` - o endereço da sua instância do GovWiki

Para mais detalhes sobre a API, consulte a documentação completa em /api/docs após fazer login na sua instância.

