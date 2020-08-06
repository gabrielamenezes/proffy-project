// Procurar o botão
document.querySelector('#add-time').addEventListener('click', cloneField);
//Quando clicar no botão

// Executar uma ação
function cloneField() {
    
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); //vai pegar o schedule e todo os filhos dele
    //no javascript a gente sempre vai usar "Node" para se referir a tags html

    // LIMPAR OS CAMPOS. QUE CAMPOS ?
    const fields = newFieldContainer.querySelectorAll('input'); //retorna um array com todos os inputs de newFieldContainer
    
    // Para cada campo, limpar:
    fields.forEach(function(field) {
        //pegar o field do momento
        //limpa
        field.value = "";
    }
    );

    //Colocar na página: ONDE?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);

    //appendChild é "adicionar filho"


}