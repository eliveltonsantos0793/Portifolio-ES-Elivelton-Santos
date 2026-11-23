# Guia de Manutenção

**Última consolidação:** 23/11/2026

## 1. Antes de alterar

1. Consulte este diretório de documentação e os registros históricos relevantes.
2. Confira a branch atual e crie uma branch específica para a tarefa.
3. Leia o código existente antes de modificar comportamentos.
4. Evite misturar alterações de conteúdo, correções funcionais e mudanças de hospedagem sem necessidade.
5. Abra um Pull Request e revise o diff antes de integrar na `master`.

## 2. Atualizar projetos da galeria

Os metadados dos projetos são mantidos na estrutura `PROJECTS` em `assets/js/script.js`.

Ao adicionar ou atualizar um projeto, conferir:
- nome e descrição objetivos;
- tecnologias realmente utilizadas naquele projeto;
- status correto (concluído, demonstração, estudo ou em desenvolvimento);
- imagem existente e caminho válido;
- texto alternativo que descreva a imagem;
- URL de destino segura e funcional;
- conteúdo da mensagem preparada para WhatsApp.

Não apresentar protótipos ou sistemas em desenvolvimento como produtos concluídos ou em produção.

## 3. Imagens e arquivos estáticos

- Manter os arquivos em `assets/images/` quando forem recursos visuais do site.
- Usar nomes claros e caminhos relativos coerentes.
- Conferir se o arquivo existe antes de publicar a referência.
- Priorizar dimensões e formatos adequados à web; a otimização adicional de imagens grandes continua sendo uma pendência registrada.
- Não substituir imagens sem revisar o texto alternativo e o enquadramento em telas pequenas.

## 4. Contatos e formulário

- Conferir o endpoint FormSubmit e os campos do formulário em `index.html`.
- Não publicar tokens de ativação, credenciais ou dados de acesso no repositório.
- Após qualquer alteração no formulário, realizar envio real de teste e confirmar o recebimento na caixa configurada.
- Preservar os estados acessíveis de envio, sucesso e erro implementados em `contact-form.js`.
- Verificar links de e-mail, WhatsApp e LinkedIn.

## 5. Tema, navegação e acessibilidade

Após alterações na interface, verificar:
- alternância entre tema claro e escuro;
- menu em viewport móvel e desktop;
- navegação por teclado e foco visível;
- rótulos e mensagens de status;
- preferência por movimento reduzido;
- contraste, textos alternativos e comportamento responsivo.

## 6. Publicação

A integração na branch `master` é o marco de publicação informado para a hospedagem atual. Depois do merge:
1. aguardar a publicação da hospedagem;
2. abrir a versão pública em janela privada ou limpar cache;
3. verificar página principal, privacidade, formulário e links alterados;
4. registrar falhas e corrigir em nova branch.

## 7. Proteção de informações

Não inserir dados pessoais de clientes, credenciais, tokens, chaves de API, informações reais de operação ou código de projetos privados na documentação pública do portfólio.
