const main = document.querySelector('#container');
const card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++){
    card[i].setAttribute('style', 'background: #e16e0e');
}

const cardTitle = document.querySelectorAll('.titulo-card');

for (let i = 0; i < cardTitle.length; i++){
    cardTitle[i].setAttribute('style', 'color: #6a474a');
    cardTitle[i].innerHTML = 'Meu Card';
};

const descriptionCard = document.querySelectorAll('.descricao-card');

for (let i = 0; i < descriptionCard.length; i++){
    descriptionCard[i].setAttribute('style', 'color: #ffffff; margin: 30px 0px; font-size: 14px');
    descriptionCard[i].innerHTML = 'Descrição modificada pelo JavaScript';
};

const btnEdit = document.querySelectorAll('.botao-editar');

for (let i = 0; i < btnEdit.length; i++){
    btnEdit[i].setAttribute('class', 'btn-edit');
    btnEdit[i].addEventListener('click', edit);
    function  edit(){
        const edit = prompt('Digite a alteração');
        if(edit == null || edit == ''){
            alert('Edição cancelada.')
        } else {
             descriptionCard[i].innerHTML = edit;
        alert('Editado com sucesso!');
        };      
    };
};

const btnErase = document.querySelectorAll('.botao-apagar');

for (let i = 0; i < btnErase.length; i++){
    btnErase[i].setAttribute('class', 'btn-erase');
    btnErase[i].addEventListener('click', erase)
    function erase(){
        const confirmErase = confirm('Tem certeza que quer apagar?');
        if(confirmErase){
            main.removeChild(card[i]);
        } else {
            alert('Cancelado');
        };
    };
};

//Criando cards

// const createCard = document.getElementById('createButton');

// const div = document.createElement('div');
// const h2 = document.createElement('h2');
// const p = document.createElement('p');
// const buttonEdit = document.createElement('button');
// const buttonErase = document.createElement('button');
// buttonEdit.setAttribute('class', 'btn-edit')
// buttonErase.setAttribute('class', 'btn-erase')
// buttonEdit.textContent = 'Editar'
// buttonErase.textContent = 'Deletar'
// buttonEdit.addEventListener('click', edit);
// buttonErase.addEventListener('click', erase);

// div.classList.add('card');
// div.setAttribute('style', 'background: #e16e0e');

// h2.setAttribute('style', 'color: #6a474a');
// h2.innerHTML = 'Meu Card';

// p.setAttribute('style', 'color: #ffffff; margin: 30px 0px; font-size: 14px');
// p.innerHTML = 'Descrição modificada pelo JavaScript';


// div.appendChild(h2);
// div.appendChild(p);
// div.appendChild(buttonEdit);
// div.appendChild(buttonErase);

// createCard.addEventListener('click', () => {
//     main.appendChild(div);
// });
