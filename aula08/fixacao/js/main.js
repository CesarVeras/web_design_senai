window.addEventListener('load',() => {
    const txtNome = document.querySelector('#txtNome');
    const pNome = document.querySelector('#pNome');

    txtNome.addEventListener('keyup', (e) => {
        if (txtNome.value !== '') {
            pNome.innerText = 'Usuário informado: ' + txtNome.value;
            pNome.style.opacity = 1;
        } else {
            pNome.style.opacity = 0;
        }
    });
});