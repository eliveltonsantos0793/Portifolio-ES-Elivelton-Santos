# ES-DRIVERS — visão geral do projeto

> Sistema web para apoiar o controle das rotinas de transporte e o registro do diário de bordo. Projeto em desenvolvimento; este documento descreve seu propósito, a direção técnica e o estágio conhecido, sem afirmar que todas as funcionalidades previstas já estejam concluídas.

## Objetivo

O ES-DRIVERS está sendo desenvolvido para organizar informações operacionais de empresas de transporte em um ambiente digital, com separação dos dados por empresa e acesso conforme o perfil do usuário.

A proposta é centralizar registros do dia a dia da operação, facilitar o acompanhamento das atividades e criar uma base para consultas e controles administrativos.

## Escopo funcional

A visão do produto contempla:

- **Diário de bordo:** registros relacionados à rotina do motorista e à operação.
- **Motoristas e veículos:** organização dos vínculos e das informações operacionais.
- **Jornadas e viagens:** acompanhamento dos registros de trabalho e deslocamentos.
- **Quilometragem e abastecimentos:** histórico de dados relevantes para a operação.
- **Ocorrências:** registro de eventos durante as atividades.
- **Gestão por empresa:** ambiente multiempresa, com isolamento dos dados e permissões por perfil.
- **Consultas e relatórios:** evolução futura para acompanhamento e análise dos registros.

O escopo acima representa a visão funcional do sistema. A disponibilidade de cada módulo deve ser conferida na versão em desenvolvimento.

## Perfis de acesso

A estrutura do produto considera diferentes responsabilidades, incluindo usuários administrativos vinculados à empresa e motoristas, além de administração geral da plataforma. As permissões são tratadas de acordo com o contexto da empresa e a função do usuário.

## Tecnologias e arquitetura

A base técnica atualmente trabalhada utiliza:

- **Frontend:** React e Vite.
- **Backend:** API em PHP.
- **Banco de dados:** MariaDB.
- **Interface e experiência:** aplicação web com foco em uso operacional.
- **Desenvolvimento e validação:** GitHub, integração contínua e testes automatizados.

## Segurança e confiabilidade

O desenvolvimento contempla controles como isolamento entre empresas, proteção de sessões, autenticação reforçada para perfis administrativos, trilhas de auditoria e validação das operações no servidor.

Também existe trabalho em uma experiência de uso offline, com armazenamento local protegido e fila de operações para posterior sincronização. Essa frente ainda exige validações em navegadores reais, cenários entre múltiplas abas e integração completa da sincronização com a API.

## Estágio do desenvolvimento

O projeto está em desenvolvimento ativo. A base de frontend, API e integração com MariaDB já foi trabalhada e submetida a validações automatizadas em CI. Isso não significa que o sistema esteja pronto para produção.

Entre as próximas frentes de validação e evolução estão:

- concluir os testes práticos do fluxo offline e da sincronização;
- validar cenários de autenticação e permissões;
- evoluir os módulos operacionais e seus relatórios;
- concluir revisões de desempenho, auditoria e preparação de implantação.

## Transparência sobre o projeto

O ES-DRIVERS é um projeto de desenvolvimento em andamento, construído de forma incremental. Este resumo apresenta a finalidade e a arquitetura geral sem divulgar detalhes internos de segurança ou credenciais. A implementação e o estágio de cada funcionalidade podem mudar conforme as etapas de desenvolvimento e validação avançam.

---

**Projeto:** ES-DRIVERS  
**Responsável:** Elivelton Santos  
**Portfólio:** [eliveltonsantos.com.br](https://eliveltonsantos.com.br)  
