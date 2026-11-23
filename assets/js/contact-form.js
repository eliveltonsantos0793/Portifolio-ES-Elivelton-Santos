(() => {
  "use strict";

  const form = document.getElementById("contact-form-js");
  const status = document.getElementById("form-status");
  const button = document.getElementById("form-submit-btn");
  const buttonLabel = document.getElementById("form-submit-label");

  if (!form || !status || !button || !buttonLabel) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.dataset.submitting === "true") return;

    form.dataset.submitting = "true";
    form.setAttribute("aria-busy", "true");
    button.disabled = true;
    buttonLabel.textContent = "Enviando mensagem…";
    status.className = "form-note form-status is-pending";
    status.textContent = "Enviando sua mensagem. Aguarde.";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || String(data.success).toLowerCase() !== "true") {
        throw new Error("submission-failed");
      }

      status.className = "form-note form-status is-success";
      status.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
      form.reset();
    } catch (error) {
      status.className = "form-note form-status is-error";
      status.textContent = "Não foi possível enviar sua mensagem agora. Tente novamente ou utilize o e-mail/WhatsApp informado nesta página.";
    } finally {
      delete form.dataset.submitting;
      form.removeAttribute("aria-busy");
      button.disabled = false;
      buttonLabel.textContent = "Enviar mensagem";
    }
  });
})();
