document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Impede o envio do formulário padrão

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simular envio seguro para um servidor
  const response = await fetch('https://example.com/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }) // Dados são enviados de forma segura
  });

  if (response.ok) {
      alert('Login bem-sucedido!');
  } else {
      alert('Erro no login. Verifique suas credenciais.');
  }

  // Limpa os campos após o envio
  document.getElementById('loginForm').reset();
});

