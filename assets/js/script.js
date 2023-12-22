const campoValorEquip = document.getElementById('valorEquip')
const campoValorSucata = document.getElementById('valorSucata')
const campoVidaUtil = document.getElementById('vidaUtil')


const campoTempoUso = document.getElementById('tempoUso')


document.getElementById("calcular").addEventListener('click',function(){
    
    let campoValorDeprec = document.getElementById('valorDepreciacao')
    
    let result = ((campoValorEquip.value - campoValorSucata.value)/campoVidaUtil.value)
    
    if(campoValorDeprec.value!=null){
        campoValorDeprec.innerText = `R$ ${result.toFixed(2)}`
        
    }else{
        campoValorDeprec.value = 0
    }
    
    })