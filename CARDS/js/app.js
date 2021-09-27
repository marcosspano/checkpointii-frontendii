const btn_add = document.getElementById('btn_add');
const form_entrada = document.getElementById('form_entrada');
const btn_enviar = document.getElementById('enviar');
const btn_cancelar = document.getElementById('cancelar');
const data_criacao = document.getElementById('data_criacao');
const data_limite = document.getElementById('data_limite');
const cards_content = document.getElementById('cards_content');  
const descricao = document.getElementById('descricao');

let dataHoje = new Date();
let dataMin = dataHoje.toISOString().slice(0,10);

data_criacao.value = dataMin;

btn_add.addEventListener('click', () => {

    data_criacao.value = dataMin;
    form_entrada.style.display = 'block';

})

function excluirCard (botaoExcluir) {

    let card = botaoExcluir.parentElement;

    let r = confirm("Confirma a exclusão deste Card?");

    if (r) {
        cards_content.removeChild(card);
    }

}

btn_enviar.addEventListener('click', (e) => {

    e.preventDefault();

    if (dataMin > data_limite.value) {
        alert("Preencha a data corretamente:\n\n- A data limite não pode estar em branco.\n- Não pode ser inferior a data de hoje")
        data_limite.value = "";
    } else if (descricao.value.trim() == "" || descricao.value.length < 10) {
        alert("Preencha a descrição corretamente:\n\n- A descrição não pode estar em branco.\n- Deve conter no mínimo 10 caracteres.")
        descricao.focus();
    } else { 
        cards_content.insertAdjacentHTML('beforeend',
            `<div class=cardUnit>
                <div>
                    <div class=cardUnit_1>
                        <img id=clock src=./img/clock.png />
                    </div>
                    
                    <div class=cardUnit_2>
                        <span class=date id=date_in>${dataMin}</span>
                        <span class=date id=date_end>${data_limite.value}</span>
                    </div>

                </div>

                <div id=editable class=editable contentEditable>
                    ${descricao.value}
                </div>

                <button id=btn_del onClick=excluirCard(this)>Excluir</button>
                <input id=tachado type="checkbox" onClick=tacharCard(this)>
            </div>`
        )

        data_limite.value = "";
        descricao.value = "";
     }
    
})

btn_cancelar.addEventListener('click', () => {

    document.querySelector('#form_entrada').style.display = 'none';

})

function tacharCard (checkTachado) {
    let cardTachado = checkTachado.parentElement;
    if (checkTachado.checked) {
        cardTachado.children[1].style.textDecoration = 'line-through'
    } else {
        cardTachado.children[1].style.textDecoration = 'none'
    }
}

