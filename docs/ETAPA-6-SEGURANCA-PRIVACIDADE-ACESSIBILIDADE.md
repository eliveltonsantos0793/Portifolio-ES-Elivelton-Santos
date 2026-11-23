# Etapa 6 — Segurança, privacidade e acessibilidade

**Projeto:** Portfólio Elivelton Santos  
**Data do registro original:** 23/11/2026  
**Branch de implementação original:** `modernizacao/portfolio-2026`  
**Status original:** implementação aplicada; verificação dos cabeçalhos HTTP da hospedagem pendente.

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

## Verificações executadas originalmente
- Leitura de retorno dos arquivos alterados após gravação.
- Compilação sintática do JavaScript do formulário e do script principal.
- Verificação dos atributos ARIA do status e do botão.
- Verificação do campo honeypot e do endpoint FormSubmit preservado.
- Verificação dos links externos com nova aba.
- Verificação do link da política no formulário, rodapé e sitemap.

## Limitações e pendências registradas originalmente
- Não foi possível consultar o domínio publicado nesta execução por falha de resolução DNS/acesso da ferramenta. Portanto, não foi possível confirmar os cabeçalhos HTTP, compressão, cache ou redirecionamentos.
- Não foi criado `.htaccess` nem configuração de cabeçalhos às cegas, para evitar incompatibilidade com a hospedagem. A configuração deverá ser feita após confirmar o servidor e as regras suportadas pela Hostinger.
- O honeypot não substitui CAPTCHA ou limitação de taxa. A opção `_captcha=false` continua ativa e deve ser reavaliada em teste funcional.
- Não foi possível enviar um formulário real de teste sem produzir contato de teste na caixa de entrada.
- Não foram executados testes com leitor de tela ou auditoria completa de acessibilidade em navegador.
- A política deve ser revisada pelo responsável do site e, se necessário, por profissional jurídico para adequação ao contexto real de tratamento e aos contratos dos fornecedores.

## Controle de publicação — registro original
Na data do registro original, as alterações ainda estavam na branch `modernizacao/portfolio-2026`; o merge para `master` ainda não havia sido realizado.

---

## Atualização histórica — 23/11/2026

Esta seção complementa o registro original e documenta fatos confirmados após a implementação inicial.

### Integração na branch principal
- As alterações da modernização foram posteriormente integradas à `master` por meio do PR #2.
- Merge commit registrado: `b13a0d3faa144780ad2077658cd834372dd542d5`.
- A publicação do site segue o fluxo de integração da branch principal com a hospedagem Hostinger, conforme informado pelo responsável pelo projeto.

### Teste real do formulário FormSubmit
- Durante o teste inicial, o FormSubmit exibiu a mensagem de que o endereço de recebimento ainda precisava ser ativado.
- O responsável pelo projeto recebeu a mensagem de ativação por e-mail e concluiu a ativação solicitada pelo serviço.
- Após a ativação, um novo teste foi realizado e o responsável confirmou que a mensagem enviada chegou corretamente à caixa de e-mail.
- Portanto, o teste real de envio foi aprovado após a ativação do endereço no FormSubmit.
- Não há evidência de que tenha sido necessário alterar o JavaScript para resolver esse incidente; a causa confirmada foi a ativação inicial pendente no serviço.
- O fluxo funcional não deve ser modificado sem necessidade, pois o envio foi confirmado como operacional.
- Qualquer token ou identificador de ativação fornecido pelo FormSubmit deve permanecer fora do repositório e de registros públicos.

### Estado atual de segurança e hospedagem
- O campo honeypot continua sendo uma camada básica de mitigação de spam.
- A opção `_captcha=false` permanece ativa; honeypot não equivale a CAPTCHA nem a limitação de taxa. A política antispam deve ser reavaliada se surgirem envios abusivos.
- A configuração de cabeçalhos HTTP continua pendente. O ambiente informado é hospedagem compartilhada Hostinger com LiteSpeed e SSL ativo; não foi localizado um arquivo `.htaccess` na raiz pública durante a verificação relatada.
- Não foi criado arquivo de configuração de servidor às cegas. A implementação deve ser precedida pela confirmação do comportamento atual de HTTP/HTTPS, domínio com e sem `www`, regras existentes e compatibilidade com LiteSpeed.
- A proposta de configuração inclui avaliar CSP inicialmente em modo Report-Only, além de `X-Content-Type-Options`, `Referrer-Policy` e `Permissions-Policy`. HSTS só deve ser ativado depois de confirmar que HTTPS está corretamente aplicado a todas as rotas e subdomínios relevantes.
- A configuração efetiva e a validação dos cabeçalhos ainda não foram concluídas. A etapa foi pausada enquanto não havia créditos disponíveis para a configuração assistida pela Hostinger AI.

### Limitações que permanecem
1. Confirmar e configurar os cabeçalhos HTTP na hospedagem.
2. Validar redirecionamentos HTTP para HTTPS e domínio com/sem `www`.
3. Reavaliar CAPTCHA e outras medidas antispam conforme a necessidade, sem interromper o formulário funcional.
4. Executar testes de acessibilidade com leitor de tela e em navegadores/dispositivos.
5. Revisar a política de privacidade à luz dos serviços efetivamente utilizados e, se necessário, obter avaliação jurídica.

### Conclusão documental
A implementação de formulário, feedback acessível e página de privacidade foi integrada à branch principal. O envio real do formulário foi confirmado após a ativação do endereço no FormSubmit. Isso não significa que todas as medidas de segurança de hospedagem e todas as validações de acessibilidade estejam concluídas; as pendências acima permanecem abertas.
