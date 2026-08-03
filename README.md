# cinteca.es

Site institucional da Cinteca, marca tecnológica vinculada à AD Caldas
Innotec, S.A. O conteúdo está disponível em português, inglês, espanhol e
norueguês Bokmål.

## Desenvolvimento local

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Validação

```bash
npm test
npm run lint
npm audit
```

## Contato protegido

O formulário usa Cloudflare Turnstile e a Lambda SMTP compartilhada com
`adrianocaldas.com`. Este site envia o identificador fixo `cinteca`; a Lambda
mantém o destinatário único em `CONTACT_TO_EMAIL` e seleciona
`CONTACT_FROM_EMAIL_CINTECA`, configurado como `web-cinteca@cinteca.es`. A
chave pública do Turnstile é definida em `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.

O site não usa banco de dados, cookies ou analytics.
