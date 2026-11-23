# Etapa 6 — Segurança, privacidade e acessibilidade

**Projeto:** Portfólio Elivelton Santos  
**Data:** 23/11/2026  
**Branch:** `modernizacao/portfolio-2026`  
**Status:** implementação aplicada; verificação dos cabeçalhos HTTP da hospedagem pendente.

## Escopo e alterações

### Formulário e proteção antispam
- Mantida a integração AJAX existente com FormSubmit e o endereço de recebimento já configurado.
- Adicionado campo honeypot `_honey`, visualmente oculto, fora da navegação por teclado e ignorado por visitantes.
- Mantido `_captcha=false` para não alterar inesperadamente o fluxo já utilizado. Isso significa que a proteção adicional implementada é o honeypot; recomenda-se reavaliar a ativação de CAPTCHA após teste controlado.
- A documentação oficial do FormSubmit descreve o campo `_honey` e recomenda manter CAPTCHA quando possível: https://formsubmit.co/documentation

### Feedback acessível
- Extraído o tratamento do envio para `assets/js/contact-form.js`, removendo JavaScript inline da página principal.
- Mantidos `role="status"`, `aria-live="polite"` e `aria-atomic="true"`.
- Incluídos estados de envio, sucesso e erro com texto simples, sem inserir mensagens externas via HTML.
- Botão fica desabilitado durante o envio e o formulário recebe `aria-busy`.

### Política de privacidade
- Criada a página `privacidade.html`, com descrição dos campos coletados, finalidades, FormSubmit, Google Fonts, armazenamento local do tema, prazos, direitos dos titulares e canal de contato.
- Incluído link junto ao formulário e no rodapé.
- Incluída a página no sitemap.
- O texto evita afirmar retenção própria ou controles da hospedagem que não foram confirmados.

### Links externos
- Auditoria estática dos links com `target="_blank"`: todos os 8 encontrados já continham `rel="noopener noreferrer"`.
- Links externos adicionados à política também usam `rel="noopener noreferrer"`.
- Links dinâmicos da galeria permanecem sujeitos à validação HTTPS implementada na etapa anterior.

## Verificações executadas
- Leitura de retorno dos arquivos alterados após gravação.
- Compilação sintática do JavaScript do formulário e do script principal.
- Verificação dos atributos ARIA do status e do botão.
- Verificação do campo honeypot e do endpoint FormSubmit preservado.
- Verificação dos links externos com nova aba.
- Verificação do link da política no formulário, rodapé e sitemap.

## Limitações e pendências
- Não foi possível consultar o domínio publicado nesta execução por falha de resolução DNS/acesso da ferramenta. Portanto, não foi possível confirmar os cabeçalhos HTTP, compressão, cache ou redirecionamentos.
- Não foi criado `.htaccess` nem configuração de cabeçalhos às cegas, para evitar incompatibilidade com a hospedagem. A configuração deverá ser feita após confirmar o servidor e as regras suportadas pela Hostinger.
- O honeypot não substitui CAPTCHA ou limitação de taxa. A opção `_captcha=false` continua ativa e deve ser reavaliada em teste funcional.
- Não foi possível enviar um formulário real de teste sem produzir contato de teste na caixa de entrada.
- Não foram executados testes com leitor de tela ou auditoria completa de acessibilidade em navegador.
- A política deve ser revisada pelo responsável do site e, se necessário, por profissional jurídico para adequação ao contexto real de tratamento e aos contratos dos fornecedores.

## Controle de publicação
Todas as alterações permanecem na branch `modernizacao/portfolio-2026`. Nenhum merge para `master` ou publicação foi realizado.
