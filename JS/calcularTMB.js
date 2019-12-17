
$("#calculo-form").submit(dados);

function dados(event) {
    event.preventDefault();
    let nome = $('#nome').val();
    let altura = $('#altura').val();
    let peso = $('#peso').val();
    let idade = $('#idade').val();
    let opcoes = $('#opcoes input:radio:checked').val();
    let genero = $('#genero input:radio:checked').val();
    let objetivo = $('#objetivo input:radio:checked').val();
    let template = $('#template');
    let tbmAuxiliar;
    let auxiliarObjetivo;

   

    $('#modal').modal({
        show: true
    });

    let tmbHomem = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.755 * idade);

    let tbmMulher = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade);

    genero == 'm' ? tbmAuxiliar = tmbHomem : tbmAuxiliar = tbmMulher;

    objetivo == 'ganhar' ? auxiliarObjetivo = ((tbmAuxiliar * opcoes) + 500) : auxiliarObjetivo = ((tbmAuxiliar * opcoes) - 500);

    let calculos = ` 
    
                 Nome: <b class='text-dark'> ${nome} </b></br>
                 Altura: <b class='text-dark'> ${altura} </b></br>
                 Peso: <b class='text-dark'> ${peso} </b></br>
                 Idade: <b class='text-dark'> ${idade} </b></br></br>
                 
                 <label>Objetivo:<b class='text-dark'> ${$('#objetivo input:radio:checked').parent('label').text()} </b></label></br>
                 <label>Nível de atividade física:<b class='text-dark'> ${$('#opcoes input:radio:checked').parent('label').text()} </b> </label></br>

                    
                 <label>Taxa Metabólica Basal: <b class='text-success'> ${parseFloat(tbmAuxiliar).toFixed(2)} Kcal </b></label></br>
                 <label>Gasto Energético Total: <b class='text-success'>${parseFloat(tbmAuxiliar * opcoes).toFixed(2)} Kcal</b></label> 
                 </br>
                 Para o seu objetivo, você precisa ingerir o total de <b class='text-success'> ${parseFloat(auxiliarObjetivo).toFixed(2)} Kcal </b> diariamente.
                 </br>
                 </br>
                 De carboidrato você precisa de:  <b class='text-success'> ${parseFloat(auxiliarObjetivo * 0.6).toFixed(2)} Kcal</b> </br>
                 De proteina você precisa de:  <b class='text-success'> ${parseFloat(auxiliarObjetivo * 0.3).toFixed(2)} Kcal </b></br>
                 De gordura você precisa de:  <b class='text-success'> ${parseFloat(auxiliarObjetivo * 0.1).toFixed(2)} Kcal </b></br>

                 


`;

    template.html(calculos);


}

