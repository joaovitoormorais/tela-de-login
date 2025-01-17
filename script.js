document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação adicional de email
    if (email.length < 5 || email.length > 50) {
        showNotification('O email deve ter entre 5 e 50 caracteres.', 'error');
        return;
    }

    // Simular envio seguro para um servidor
    try {
        const response = await fetch('https://example.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) // Dados são enviados de forma segura
        });

        if (response.ok) {
            showNotification('Login bem-sucedido!', 'success');
        } else {
            showNotification('Erro no login. Verifique suas credenciais.', 'error');
        }
    } catch (error) {
        showNotification('Erro ao conectar com o servidor.', 'error');
    }

    // Limpa os campos após o envio
    document.getElementById('loginForm').reset();
});

// Função para exibir notificações
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';

    // Ocultar a notificação após 5 segundos
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}


