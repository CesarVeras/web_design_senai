const txt = document.getElementById('txt');

const mudarCor = (element, change) => {
    if (change) {
        element.style.backgroundColor = '#eee';
    } else {
        element.style.backgroundColor = '#fff';
    }
}

txt.addEventListener('mouseover', () => mudarCor(txt, true));
txt.addEventListener('mouseout', () => mudarCor(txt, false));