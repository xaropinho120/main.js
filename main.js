const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
   const nomeComoArray = nomeCompleto.split('');
   return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomebeneficiario = document.getElementById('nome-beneficiario');
    if (validaNome(nomebeneficiario.value) === false) {
        alert("O nome não está completo");
    } 
})

console.log(form);