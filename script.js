/**
 * Script Principal - AGRINHO 2026
 * Responsável pela interatividade e comportamento do site.
 */

// 1. Inicialização Geral
document.addEventListener('DOMContentLoaded', () => {
    inicializarMenuMobile();
    inicializarValidacoes();
    inicializarInteracoes();
});

// 2. Menu Mobile (Interatividade)
function inicializarMenuMobile() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }
}

// 3. Validação de Formulários
function inicializarValidacoes() {
    const form = document.querySelector('#form-cadastro-agrinho');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            const nomeParticipante = document.querySelector('#nome').value;

            if (nomeParticipante.length < 3) {
                e.preventDefault();
                alert('Por favor, digite um nome válido para o cadastro.');
            } else {
                console.log('Formulário enviado com sucesso para:', nomeParticipante);
                // Aqui você pode adicionar lógica para enviar os dados via Fetch API
            }
        });
    }
}

// 4. Interações Dinâmicas (Exemplo: Botões de Curiosidades Agrícolas)
function inicializarInteracoes() {
    const botoesCuriosidade = document.querySelectorAll('.btn-curiosidade');
    
    botoesCuriosidade.forEach(btn => {
        btn.addEventListener('click', () => {
            const info = btn.nextElementSibling;
            info.style.display = info.style.display === 'block' ? 'none' : 'block';
        });
    });
}
