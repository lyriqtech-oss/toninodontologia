# Tonin Odontologia & Estética

Landing page estática, responsiva, pronta para importar como repositório GitHub na Vercel. Não precisa de framework nem de banco de dados.

## Publicar

1. Crie um repositório no GitHub e envie **o conteúdo desta pasta** para a raiz do repositório: `package.json`, `vercel.json`, `public/`, `scripts/` e este README.
2. Na Vercel, escolha **Add New → Project**, importe o repositório e publique. As configurações de build já estão no `vercel.json`.
3. A Vercel informa automaticamente o domínio de produção ao build. O script usa esse domínio no canonical, dados estruturados, sitemap, robots.txt e arquivos llms.txt.
4. Ao conectar um domínio próprio, faça um novo deploy. Se preferir fixar um domínio específico, defina `SITE_URL=https://seu-dominio.com.br` nas variáveis de ambiente da Vercel e faça um novo deploy. Inclua o protocolo `https://`.
5. Após publicar, confira `/robots.txt`, `/sitemap.xml`, `/llms.txt` e `/llms-full.txt` no novo domínio. Para indexação, verifique a propriedade no Google Search Console e envie `/sitemap.xml`.

## Editar

- Página e estilos: `public/index.html`
- Fotos e logo: `public/assets/`
- Conteúdo para sistemas de IA: `public/llms.txt` e `public/llms-full.txt`
- Saída gerada: `dist/` (não edite diretamente)

Para testar localmente: `SITE_URL=https://tonin.vercel.app npm run build` e sirva a pasta `dist/` com um servidor HTTP. O endereço usado nesse comando é apenas exemplo; substitua pelo seu.

O WhatsApp atual é (53) 98465-4436. Os horários, CROs, preços e convênios não foram informados e não aparecem como fatos confirmados. O `llms.txt` não garante recomendações por assistentes de IA.
