# Testes e Validação

**Consolidação:** 23/11/2026

Este documento separa verificações efetivamente registradas de testes ainda necessários. Uma validação não deve ser marcada como concluída apenas por inspeção estática.

## Verificações registradas

| Verificação | Resultado registrado | Observação |
|---|---|---|
| IDs HTML | Aprovado na auditoria final | 31 IDs identificados, sem duplicidade. |
| Links com `target="_blank"` | Aprovado na auditoria final | 8 links verificados com `noopener`. |
| JavaScript | Aprovado na verificação sintática registrada | Dois scripts externos: `script.js` e `contact-form.js`. |
| Galeria | Conferida na auditoria final | 5 projetos registrados na galeria. |
| Parceiros | Coerente | Lista `PARTNER_COMPANIES` vazia, sem conteúdo fictício. |
| Formulário | Teste real aprovado pelo responsável | Após ativar o endereço no FormSubmit, o usuário confirmou recebimento do e-mail. |
| Página pública | Confirmação visual do responsável | O responsável informou que o site abriu e aparentava funcionar conforme planejado. |

## Validações ainda pendentes

- Testes completos em navegadores e dispositivos diferentes.
- Navegação integral por teclado e avaliação com leitor de tela.
- Auditoria Lighthouse e Core Web Vitals.
- Otimização de imagens grandes.
- Configuração e verificação de `og:image` e `twitter:image`.
- Verificação de redirecionamentos HTTP/HTTPS e www/não-www.
- Inspeção dos cabeçalhos HTTP efetivamente entregues pelo servidor.
- Validação externa do domínio, `robots.txt` e `sitemap.xml`; a ferramenta de verificação usada anteriormente não conseguiu acessar os recursos, o que não comprova indisponibilidade.

## Roteiro de teste após mudanças

1. Abrir a página em desktop e celular.
2. Alternar tema claro/escuro e recarregar a página.
3. Testar menu móvel, backdrop, tecla Escape e foco.
4. Testar galeria, seleção múltipla, pausa por hover/foco e preferência por movimento reduzido.
5. Testar todos os links externos e internos.
6. Enviar o formulário e confirmar recebimento real.
7. Conferir console, rede, imagens e estilos.
8. Registrar data, ambiente, resultado e falhas observadas.

## Critério de aprovação

Uma mudança só deve ser considerada aprovada quando os testes pertinentes ao seu escopo forem executados e o resultado for observado. Testes não executados devem permanecer identificados como pendentes.
