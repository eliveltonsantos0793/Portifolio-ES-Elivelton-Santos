# ES-DRIVERS — apresentação do projeto

> Plataforma web em desenvolvimento para apoiar a gestão de rotinas operacionais de empresas de transporte.

O **ES-DRIVERS** é um projeto independente de desenvolvimento de software idealizado por Elivelton Santos. Sua proposta é reunir, em um ambiente digital, registros e informações importantes da operação de transporte, contribuindo para uma gestão mais organizada e para o acompanhamento das atividades.

O sistema está em desenvolvimento incremental. Esta página apresenta a finalidade, a visão funcional e a arquitetura geral do projeto; não representa uma declaração de que todos os módulos estejam concluídos ou disponíveis para uso em produção.

## Objetivo do produto

A proposta é oferecer uma ferramenta de apoio à operação e à administração de empresas de transporte, centralizando informações que normalmente ficam distribuídas entre registros, planilhas e processos manuais.

O desenvolvimento considera uma estrutura multiempresa, na qual cada organização acessa seus próprios dados e os recursos disponíveis de acordo com o perfil e as permissões do usuário.

## Visão funcional

O escopo planejado e trabalhado no projeto contempla as seguintes áreas:

- **Diário de bordo:** registros relacionados à rotina do motorista e às atividades operacionais.
- **Motoristas e veículos:** organização de informações e vínculos operacionais.
- **Jornadas e viagens:** acompanhamento de registros de trabalho e deslocamentos.
- **Quilometragem e abastecimentos:** histórico de informações relevantes para o controle da operação.
- **Ocorrências:** registro de eventos relacionados às atividades.
- **Gestão por empresa:** separação dos ambientes e dos dados de cada organização, com permissões por perfil.
- **Consultas e relatórios:** apoio à consulta e à análise das informações registradas.

A lista representa a visão funcional do produto. A disponibilidade e o nível de conclusão de cada módulo devem ser confirmados na versão de desenvolvimento correspondente.

## Perfis de acesso

A concepção do sistema considera diferentes responsabilidades, incluindo motoristas, usuários administrativos vinculados às empresas e administração geral da plataforma. O acesso aos recursos deve respeitar o contexto da organização e as permissões atribuídas a cada perfil.

## Arquitetura e tecnologias

A base técnica atualmente trabalhada utiliza:

| Camada | Tecnologia |
| --- | --- |
| Frontend | React e Vite |
| Backend | API em PHP |
| Banco de dados | MariaDB |
| Desenvolvimento e versionamento | GitHub |
| Validação automatizada | Integração contínua (CI) |

A arquitetura é desenvolvida de forma incremental, com a interface web integrada a uma API e a uma base de dados relacional.

## Segurança e confiabilidade

A implementação considera medidas de proteção adequadas a um sistema multiempresa, incluindo isolamento de dados entre organizações, autenticação, controle de permissões, proteção de sessões, validações no servidor e registros de auditoria.

Também está em desenvolvimento uma experiência de uso offline, com armazenamento local e posterior sincronização com a API. Essa funcionalidade exige validações adicionais em navegadores e cenários reais antes de ser considerada pronta para produção.

Esta apresentação não divulga código-fonte, credenciais, dados de clientes, detalhes internos de segurança ou informações operacionais privadas. A lógica sensível deve permanecer no servidor; qualquer código enviado ao navegador pode ser inspecionado pelo usuário.

## Estágio atual

O ES-DRIVERS permanece em desenvolvimento. A base de frontend, API e integração com MariaDB já foi trabalhada e submetida a validações automatizadas em CI, mas isso não significa que o produto esteja concluído, homologado ou pronto para implantação comercial.

Entre as frentes de evolução e validação estão:

- ampliar e validar os fluxos dos módulos operacionais;
- concluir testes práticos de uso offline e sincronização;
- revisar autenticação, permissões e isolamento multiempresa;
- evoluir consultas e relatórios;
- concluir revisões de desempenho, auditoria e preparação para implantação.

O status de cada recurso pode mudar conforme o desenvolvimento avança.

## Demonstração

No momento, esta documentação funciona como apresentação pública do projeto. Uma demonstração online poderá ser disponibilizada futuramente em ambiente separado, com dados fictícios e acesso controlado.

Uma demonstração não deverá utilizar dados reais de empresas, motoristas, veículos ou operações. O ambiente público do portfólio também não deve expor o repositório privado nem qualquer credencial ou configuração interna.

## Sobre o projeto

- **Projeto:** ES-DRIVERS
- **Responsável pelo desenvolvimento:** Elivelton Santos
- **Categoria:** sistema web para gestão de rotinas de transporte
- **Status:** em desenvolvimento
- **Portfólio:** [eliveltonsantos.com.br](https://www.eliveltonsantos.com.br/)

---

*Documento de apresentação. As funcionalidades descritas representam o escopo e as frentes de desenvolvimento conhecidas; a disponibilidade efetiva depende da versão do sistema.*
