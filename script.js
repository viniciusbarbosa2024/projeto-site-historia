let menulista = document.querySelector('ul#menulista')

function acessomenu() {
    if (menulista.className == 'oculto') {
        menulista.className = 'visivel'
    } else {
        menulista.className = 'oculto'
    }
}