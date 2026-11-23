# Arquitetura do Portfólio

**Última consolidação:** 23/11/2026

## Visão geral

O portfólio é um site estático. O navegador recebe HTML, CSS, JavaScript e arquivos de mídia; não há aplicação de servidor própria documentada para renderizar as páginas principais.

## Camadas

### HTML

- `index.html`: página principal, seções do portfólio, metadados SEO e dados estruturados JSON-LD.
- `privacidade.html`: página pública com informações sobre o tratamento de dados enviados pelo formulário.

### CSS

- `assets/css/style.css`: estilos globais, layout, componentes, responsividade e temas.
- `assets/css/privacy.css`: ajustes específicos da página de privacidade.

### JavaScript

- `assets/js/script.js`: interações da interface, alternância de tema, navegação e recursos dinâmicos da página.
- `assets/js/contact-form.js`: envio assíncrono do formulário, estados de carregamento, sucesso e erro.

### Recursos e serviços externos

- FormSubmit recebe as submissões do formulário de contato.
- WhatsApp é utilizado como destino para mensagens preparadas a partir dos projetos selecionados.
- Fontes web são carregadas do Google Fonts.
- A hospedagem atual é informada como Hostinger.

## Fluxo do formulário

1. O visitante preenche o formulário na página principal.
2. `contact-form.js` intercepta o envio e envia os dados usando `fetch` e `FormData` para o endpoint configurado no próprio formulário.
3. A resposta do serviço é interpretada para apresentar estado de sucesso ou falha.
4. O usuário também pode utilizar os canais alternativos de contato apresentados no site.

O recebimento real por e-mail foi testado pelo responsável após a ativação inicial exigida pelo FormSubmit, conforme registro da Etapa 6. Mudanças futuras no endpoint ou nos campos exigem novo teste real.

## Fluxo da galeria

Os dados dos projetos são mantidos no JavaScript em uma estrutura de dados do frontend. A interface apresenta os projetos, permite seleção múltipla e prepara uma mensagem para o WhatsApp. Os dados inseridos dinamicamente devem continuar passando pelas rotinas de escape e validação já existentes.

## Limites de segurança

Como o site é estático, qualquer código enviado ao navegador pode ser inspecionado pelo visitante. Não colocar credenciais, segredos, regras sensíveis ou dados privados no HTML, CSS, JavaScript ou arquivos públicos. Validações no cliente melhoram a experiência, mas não substituem validação e autorização no servidor quando estas forem necessárias.
