# Decisões Técnicas

**Registro inicial:** 23/11/2026

Este arquivo reúne decisões de arquitetura e manutenção confirmadas para o portfólio.

## Stack e arquitetura

- **Decisão:** manter HTML5, CSS3 e JavaScript puro.
- **Motivo:** preservar a arquitetura estática atual, facilitar a manutenção e respeitar o estágio de aprendizado do responsável.
- **Consequência:** não introduzir frameworks ou dependências de build sem uma decisão futura explícita.

## Fluxo de versionamento

- **Decisão:** trabalhar em branches específicas e revisar por Pull Request antes de integrar na `master`.
- **Motivo:** manter rastreabilidade e reduzir o risco de alterações diretas na versão publicada.
- **Consequência:** alterações em branches de trabalho não são tratadas como publicadas.

## Documentação do ES-DRIVERS

- **Decisão:** manter uma apresentação pública em `docs/projetos/ES-DRIVERS.md`, sem disponibilizar o código privado.
- **Motivo:** explicar o projeto sem expor implementação, credenciais ou dados reais.
- **Consequência:** qualquer demonstração futura deve ser separada do portfólio, usar dados fictícios e controles de acesso apropriados.

## Cabeçalhos HTTP

- **Decisão:** não criar ou substituir regras de servidor sem confirmar a configuração existente.
- **Motivo:** evitar quebrar publicação, redirecionamentos ou compatibilidade com LiteSpeed.
- **Consequência:** cabeçalhos permanecem pendentes até inspeção do ambiente real e teste controlado.

## Formulário de contato

- **Decisão:** preservar a integração atual com FormSubmit enquanto continuar funcional.
- **Motivo:** o responsável confirmou recebimento de uma mensagem real após concluir a ativação inicial do endereço.
- **Consequência:** não alterar o fluxo sem motivo técnico e repetir teste real após mudanças.

## Registro histórico

- **Decisão:** manter o contexto original dos relatórios de etapa e acrescentar atualizações datadas, em vez de reescrever o passado.
- **Motivo:** distinguir o status observado no momento da auditoria do estado posterior do projeto.
- **Consequência:** relatórios retrospectivos devem ser identificados como consolidações, nunca como registros contemporâneos.
