const campoValorEquip = document.getElementById('valorEquip')
const campoValorSucata = document.getElementById('valorSucata')
const campoVidaUtil = document.getElementById('vidaUtil')


const campoTempoUso = document.getElementById('tempoUso')
const campoValorDeprec = document.getElementById('valorDepreciacao')

document.getElementById("calcular").addEventListener('click',function(){
    let result = ((campoValorEquip.value - campoValorSucata.value)/campoVidaUtil.value)
    campoValorDeprec.value = result.toFixed(2)
    

    })