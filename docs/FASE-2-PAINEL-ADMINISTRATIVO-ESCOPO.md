# Fase 2 — Painel Administrativo ES: escopo e diagnóstico inicial

**Projeto:** Portfólio Elivelton Santos  
**Fase:** 2 — Painel Administrativo  
**Etapa:** 1 — Diagnóstico técnico e planejamento  
**Registro:** 23/11/2026  
**Status:** Planejamento inicial; arquitetura sujeita à validação do ambiente Hostinger

## 1. Finalidade

Planejar a criação de um painel administrativo privado para gerenciar os projetos da galeria e as empresas parceiras exibidas no portfólio, sem exigir edição manual dos arquivos do frontend a cada atualização de conteúdo.

O painel será um módulo administrativo integrado ao portfólio atual. A modernização já concluída deverá ser preservada. Esta etapa é documental e de diagnóstico: não altera o site publicado, não implementa backend e não modifica a branch `master`.

## 2. Decisões aprovadas pelo responsável

| Tema | Decisão |
|---|---|
| Senha administrativa | Senha forte com pelo menos 12 caracteres, combinando letras, números e símbolos |
| Segundo fator | Código temporário TOTP compatível com Google Authenticator |
| Infraestrutura | Priorizar a hospedagem compartilhada atual da Hostinger, condicionada à confirmação de compatibilidade e segurança |
| Administradores | Uma única conta administrativa inicialmente |
| Recuperação | Códigos de recuperação de uso único |
| Auditoria | Histórico de autenticações e alterações administrativas |

As decisões acima definem os requisitos do projeto. Não significam que os mecanismos já estejam implementados ou que a hospedagem tenha sido validada.

## 3. Diagnóstico do estado atual

A documentação e os arquivos consultados na branch `master` em 23/11/2026 indicam:

- O site público é estático e utiliza HTML5, CSS3 e JavaScript puro.
- A galeria é construída a partir da constante `PROJECTS` em `assets/js/script.js`.
- Os dados dos projetos incluem identificador, nome, categoria, status, descrição, imagem, texto alternativo, URL, tecnologias e, em alguns casos, destaque.
- As empresas parceiras são representadas pela constante `PARTNER_COMPANIES`, atualmente vazia.
- A interface da galeria e a faixa de parceiros são montadas no navegador a partir desses dados.
- Não há backend próprio ou banco de dados documentados na versão atual.
- O ambiente informado é uma hospedagem compartilhada Hostinger com LiteSpeed e SSL ativo. A configuração efetiva e os recursos disponíveis precisam ser confirmados no painel da hospedagem.
- A documentação anterior registra que não foi localizado um arquivo `.htaccess` na raiz pública durante a auditoria. Isso deve ser revalidado antes de qualquer alteração de regras do servidor.

### Consequência técnica

O painel não deve gravar dados diretamente no JavaScript público nem confiar em validações executadas somente no navegador. Será necessário introduzir uma camada de servidor que autentique o administrador, autorize cada operação, valide os dados e forneça ao site público somente os conteúdos aprovados para publicação.

## 4. Objetivo funcional

### 4.1 Projetos

O painel deverá permitir:

- Cadastrar projetos.
- Listar projetos cadastrados.
- Editar informações existentes.
- Publicar, retirar de publicação e arquivar projetos.
- Remover projetos com confirmação explícita.
- Definir ordem de exibição e destaque.
- Administrar imagem de capa, texto alternativo, categoria, descrição, tecnologias e link público.

A exclusão deverá ser protegida contra ações acidentais. Sempre que adequado, priorizar arquivamento ou despublicação antes da exclusão definitiva. A remoção de um registro não deverá apagar arquivos compartilhados ou utilizados por outros conteúdos sem uma verificação de dependências.

### 4.2 Empresas parceiras

O painel deverá permitir:

- Cadastrar e listar empresas parceiras.
- Editar nome, logotipo, endereço público e descrição opcional.
- Ativar, desativar, ordenar e remover registros.
- Publicar na seção de parceiros somente empresas cuja divulgação tenha sido autorizada.

A integração deverá preservar a faixa horizontal animada existente e respeitar as regras de acessibilidade e movimento reduzido já adotadas no portfólio.

### 4.3 Dashboard e navegação

A interface administrativa deverá possuir barra lateral e, no mínimo, as áreas:

- Dashboard.
- Cadastro de projetos.
- Projetos cadastrados.
- Cadastro de empresas parceiras.
- Empresas parceiras cadastradas.
- Segurança e recuperação de acesso.
- Histórico de atividades.
- Sair do painel.

Indicadores do dashboard deverão ser calculados a partir dos dados reais, sem números fictícios.

## 5. Requisitos de autenticação e segurança

### 5.1 Fluxo obrigatório de acesso

1. O administrador informa a senha.
2. O servidor valida a senha.
3. Se válida, solicita o código temporário do aplicativo autenticador.
4. O servidor valida o código TOTP.
5. Somente após as duas validações o servidor cria uma sessão administrativa autenticada.

A URL não secreta, a tela de login ou controles visuais não constituem proteção. Toda rota administrativa e toda operação de escrita deverão verificar a sessão e a autorização no servidor.

### 5.2 Requisitos mínimos

- HTTPS obrigatório para autenticação e administração.
- Armazenar a senha somente como hash resistente a ataques de força bruta, preferencialmente Argon2id quando suportado; avaliar alternativa segura compatível com a versão real do PHP.
- Nunca armazenar ou enviar a senha em texto aberto para logs.
- TOTP compatível com Google Authenticator, validado no servidor. Definir parâmetros interoperáveis e tolerância de relógio limitada.
- Proteger o segredo TOTP em repouso com criptografia e chave mantida fora da raiz pública, se o ambiente permitir. Não publicar o segredo no repositório.
- Códigos de recuperação aleatórios, armazenados como hashes, exibidos uma única vez e invalidados após uso.
- Limitação de tentativas, atraso progressivo ou bloqueio temporário e mensagens de erro que não revelem se usuário ou senha estavam corretos.
- Sessões com regeneração do identificador após autenticação, expiração por inatividade e duração máxima definida.
- Cookies de sessão com atributos `Secure`, `HttpOnly` e `SameSite` apropriados.
- Proteção CSRF em operações que alteram dados.
- Validação de autorização no servidor em todas as rotas administrativas.
- Validação de entrada e saída, consultas parametrizadas e tratamento seguro de erros.
- Registro de eventos de login, falhas relevantes, recuperação e alterações de conteúdo, sem gravar senhas, códigos TOTP, códigos de recuperação ou segredos.
- Backup periódico do banco de dados e procedimento testado de restauração.
- Uploads limitados por tamanho, tipo real de arquivo e formatos permitidos; nomes aleatórios; armazenamento sem permissão de execução; proteção contra caminhos arbitrários e arquivos maliciosos.
- Segredos e configurações fora do repositório público e, preferencialmente, fora da raiz pública da hospedagem.

A conta administrativa será única no escopo inicial. Não haverá cadastro público, criação autônoma de contas ou segundo administrador nesta fase.

## 6. Arquitetura candidata

A direção inicial é preservar o frontend existente e avaliar:

- **Frontend público:** HTML, CSS e JavaScript atuais.
- **Painel:** interface administrativa web, mantendo tecnologias simples e compatíveis com o projeto.
- **Backend candidato:** PHP executado no servidor da hospedagem.
- **Banco candidato:** MySQL ou MariaDB disponibilizado pela hospedagem.
- **Autenticação:** sessão no servidor, senha com hash e TOTP.
- **Conteúdo público:** endpoint de leitura que entregue apenas registros publicados e campos permitidos.
- **Operações administrativas:** endpoints autenticados para criar, editar, publicar, arquivar e remover registros.

PHP e MySQL/MariaDB são uma hipótese de arquitetura, não uma decisão de implementação final. A escolha depende da confirmação da versão do PHP, disponibilidade e limites do banco, configuração do servidor, armazenamento seguro de segredos e recursos operacionais do plano contratado.

O frontend público não deverá receber dados de rascunhos, dados administrativos, segredos ou informações de auditoria. O backend deverá aplicar a filtragem de publicação antes de responder.

## 7. Verificações obrigatórias na Hostinger

Antes de fechar a arquitetura e iniciar a implementação, confirmar no painel da conta e, quando necessário, com o suporte:

1. Plano exato contratado e limites aplicáveis ao domínio.
2. Versões de PHP disponíveis e possibilidade de selecionar uma versão suportada.
3. Extensões PHP necessárias para hash de senha, criptografia, banco de dados, sessão e TOTP.
4. Disponibilidade de MySQL/MariaDB, versão, quantidade de bancos, usuários e limites de armazenamento/conexões.
5. Possibilidade de manter arquivos de configuração e chaves fora de `public_html` ou da raiz pública equivalente.
6. Permissões de arquivos e diretórios, execução de PHP e regras LiteSpeed/Apache disponíveis.
7. Suporte a HTTPS no domínio administrativo e redirecionamento seguro.
8. Limites de upload, espaço em disco e tipos de arquivo.
9. Recursos de backup e possibilidade de restauração do banco e dos arquivos.
10. Disponibilidade de tarefas agendadas (cron), caso sejam necessárias para manutenção.
11. Regras atuais de cache, reescrita de URLs e arquivos `.htaccess` existentes.

Não presumir que recursos de VPS, SSH, cron, variáveis de ambiente ou configuração fora da raiz pública estejam disponíveis no plano compartilhado. Se algum requisito crítico não puder ser atendido, reavaliar a arquitetura antes de desenvolver.

## 8. Fases planejadas após o diagnóstico

| Etapa | Entrega prevista |
|---|---|
| 1 | Diagnóstico técnico, requisitos e arquitetura candidata |
| 2 | Backend, banco de dados e estrutura de conteúdo |
| 3 | Autenticação, TOTP, recuperação e controles de segurança |
| 4 | Interface administrativa e dashboard |
| 5 | Cadastro e gerenciamento de projetos |
| 6 | Cadastro e gerenciamento de empresas parceiras |
| 7 | Integração com o site, auditoria, testes, backup e publicação |

A ordem poderá ser ajustada com justificativa técnica, sem reduzir os requisitos de segurança.

## 9. Estratégia de integração e preservação do site

- Desenvolver em branch própria, sem trabalhar diretamente na `master`.
- Manter o site público atual funcionando durante o desenvolvimento.
- Não publicar o painel ou endpoints administrativos antes da auditoria de segurança.
- Integrar o novo conteúdo por uma fonte de dados controlada pelo backend.
- Prever fallback seguro e conteúdo público previamente publicado, para que uma indisponibilidade temporária do painel/backend não deixe a galeria sem conteúdo.
- Testar em ambiente controlado antes de publicar.
- Fazer backup verificável antes de qualquer implantação que altere dados ou arquivos no servidor.
- Abrir Pull Request para revisão e aguardar aprovação explícita antes de mesclar.
- Após a publicação, validar o site público, autenticação, operações administrativas, logs e restauração.

## 10. Critérios de conclusão da Etapa 1

A etapa será considerada concluída quando:

- As decisões aprovadas estiverem registradas.
- A estrutura atual de conteúdo e os limites da aplicação estática estiverem documentados.
- Os requisitos funcionais e de segurança estiverem definidos.
- As verificações pendentes da hospedagem estiverem identificadas.
- A arquitetura candidata e seus pontos de validação estiverem registrados.
- Nenhuma alteração de aplicação ou publicação tiver sido feita sem autorização.

## 11. Estado e limitações deste registro

Este documento registra o planejamento e o diagnóstico baseado nos arquivos e informações disponíveis em 23/11/2026. Não confirma recursos ainda não verificados na conta Hostinger, não declara a arquitetura final aprovada para implementação e não representa um painel já desenvolvido.

**Próxima ação:** realizar a verificação técnica do plano Hostinger e confirmar os requisitos de PHP, banco de dados, armazenamento de segredos, sessões, HTTPS e backups antes de iniciar a Etapa 2.
