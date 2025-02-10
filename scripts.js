const copyButton = document.getElementById('copyID');
const ipText = 'WorldTraveler5.aternos.me:56692';

copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(ipText)
        .then(() => {
            alert('¡IP copiada al portapeles!');
        })
        .catch((err) => {
            console.error('Error al copiar la IP: ', err);
            alert('No se pudo copiar la IP. Inténtalo de nuevo.');
        });
});