# Documento Mestre — Portfólio ES

**Projeto:** Portfólio Elivelton Santos  
**Registro de consolidação:** 23/11/2026  
**Repositório:** `eliveltonsantos0793/Portifolio-ES-Elivelton-Santos`  
**Site:** https://www.eliveltonsantos.com.br/

## 1. Finalidade

Este documento consolida o propósito, o escopo técnico e as decisões gerais do portfólio. É uma referência de orientação e não substitui os registros históricos das etapas de auditoria.

## 2. Objetivos

- Apresentar a trajetória profissional e os projetos práticos de Elivelton Santos.
- Comunicar serviços e interesses profissionais sem atribuir senioridade ou experiência não comprovadas.
- Facilitar contatos para oportunidades de trabalho, projetos freelancer e parcerias.
- Manter um site estático, responsivo e de manutenção acessível ao responsável pelo projeto.

## 3. Posicionamento

O conteúdo público apresenta Elivelton como desenvolvedor web júnior em formação. A comunicação deve distinguir projetos concluídos, protótipos, estudos e sistemas em desenvolvimento. Não se deve declarar como produção ou concluído um recurso que ainda esteja em desenvolvimento.

## 4. Escopo técnico atual

- HTML5 para estrutura e conteúdo.
- CSS3 para apresentação e responsividade.
- JavaScript puro para interações e conteúdo dinâmico.
- Git e GitHub para versionamento.
- Hospedagem atual informada: Hostinger.
- Serviço externo FormSubmit para recebimento do formulário de contato.

Não faz parte do escopo atual migrar o portfólio para React, Vue, Angular ou outro framework.

## 5. Funcionalidades documentadas

- Alternância de tema claro/escuro com preferência armazenada no navegador.
- Navegação adaptada a dispositivos móveis.
- Galeria dinâmica de projetos, com seleção de múltiplos itens e encaminhamento de mensagem pelo WhatsApp.
- Formulário de contato integrado ao FormSubmit.
- Página de política de privacidade.
- Metadados básicos de SEO e compartilhamento, dados estruturados Person, `robots.txt` e `sitemap.xml`.
- Preferência por movimento reduzido contemplada na experiência da galeria.

## 6. Segurança, privacidade e qualidade

O projeto adota medidas no frontend para reduzir riscos comuns, mas não deve ser descrito como auditado ou protegido integralmente. O honeypot do formulário é uma mitigação básica e não equivale a CAPTCHA, limitação de taxa ou proteção antispam completa. Cabeçalhos HTTP de segurança e validações externas da hospedagem permanecem pendentes conforme os registros da Etapa 6.

## 7. Publicação e governança

As alterações devem ser desenvolvidas em branches próprias e submetidas por Pull Request para revisão. A branch `master` deve permanecer protegida pelo fluxo de revisão e aprovação adotado pelo responsável. A integração na `master` é o marco de publicação informado para a hospedagem atual; após o merge, confirmar o site publicado.

## 8. Limitações e pendências conhecidas

- Cabeçalhos HTTP ainda precisam ser verificados e configurados com compatibilidade para a hospedagem.
- A imagem social `og:image` / `twitter:image` não está configurada.
- Otimização adicional de imagens grandes permanece adiada.
- Testes completos em diferentes navegadores/dispositivos, leitores de tela, Lighthouse e Core Web Vitals ainda precisam ser executados.
- A validação externa do domínio, sitemap e robots não foi conclusiva na auditoria registrada.

## 9. Projetos relacionados

O ES-DRIVERS é documentado separadamente em [Projetos — ES-DRIVERS](projetos/ES-DRIVERS.md). Seu repositório de código é privado e não deve ser publicado como parte do código do portfólio.

## 10. Manutenção deste documento

Atualizar este documento quando houver mudança estrutural relevante, alteração de stack, mudança de hospedagem ou decisão que modifique o escopo geral. Resultados de testes e alterações específicas devem permanecer nos documentos próprios.
