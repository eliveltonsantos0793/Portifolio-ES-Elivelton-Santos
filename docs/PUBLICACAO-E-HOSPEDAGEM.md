# Publicação e Hospedagem

**Última consolidação:** 23/11/2026

## Ambiente conhecido

- Provedor informado: Hostinger.
- Tipo de hospedagem informado: plano compartilhado com LiteSpeed.
- SSL informado como ativo para o domínio principal.
- Domínio canônico configurado no HTML: `https://www.eliveltonsantos.com.br/`.
- O site é estático e não requer instalação de dependências para executar localmente.

Essas informações refletem o ambiente relatado durante a auditoria. Configurações da conta e da hospedagem podem mudar e devem ser confirmadas no painel antes de qualquer alteração.

## Fluxo de publicação

O fluxo informado pelo responsável é baseado na integração de alterações na branch `master`, seguida da publicação pela hospedagem conectada ao repositório.

1. Criar branch a partir da versão atual de `master`.
2. Implementar e testar a alteração.
3. Abrir Pull Request direcionado a `master`.
4. Revisar os arquivos e o diff.
5. Integrar somente após aprovação explícita.
6. Confirmar a publicação no domínio.

Não presumir que uma alteração foi publicada apenas porque um commit foi criado em uma branch de trabalho.

## Verificações após publicação

- Página inicial carrega em HTTPS.
- Página `privacidade.html` está acessível.
- CSS, JavaScript, imagens e ícones carregam sem erros.
- Formulário envia e a mensagem chega ao endereço configurado.
- Links externos e WhatsApp funcionam.
- Canonical e sitemap apontam para o domínio correto.
- Redirecionamentos entre HTTP/HTTPS e www/não-www estão coerentes.

## Cabeçalhos HTTP e .htaccess

A configuração de cabeçalhos HTTP foi deixada pendente. Durante a auditoria, não foi localizado um arquivo `.htaccess` na raiz pública, e não houve confirmação suficiente da configuração efetiva do servidor.

**Não criar ou substituir um `.htaccess` às cegas.** Primeiro confirmar a raiz pública, as regras existentes, a compatibilidade com LiteSpeed e o comportamento de redirecionamentos. A política CSP deve começar em modo de observação (Report-Only) e ser avaliada antes de impor bloqueios. HSTS só deve ser habilitado após confirmar HTTPS em todo o domínio e subdomínios aplicáveis.

Cabeçalhos planejados para avaliação: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP e, após validação, HSTS.

## Limitações

Não há neste documento confirmação de cabeçalhos HTTP já implantados, nem evidência conclusiva de testes externos de redirecionamento. A configuração deve ser atualizada somente após verificação real da resposta HTTP.
