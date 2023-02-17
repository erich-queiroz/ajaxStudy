//Trata-se apenas de um estudo sobre Ajax.

const loadFormButton = document.getElementById('load-form');
      const contentDiv = document.getElementById('content');

      loadFormButton.addEventListener('click', async () => {
        const response = await fetch('./formulario.html');
        const html = await response.text();
        contentDiv.innerHTML = html;
      });