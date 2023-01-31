// Função atribuida ao botão
function calc(){
    var n1 = window.document.getElementById('n1').value
    var n2 = window.document.getElementById('n2').value
    if(n1 == '' && n2 == ''){
        var res = window.document.getElementById('res')
        res.innerHTML = 'Digite valores para calcular'
        res.style.margin = '20px'
        res.style.fontSize = '20px'
    }else{
        var res = window.document.getElementById('res')
        var n1nv = parseInt(n1)
        var n2nv = parseInt(n2)
        var md = (n1nv + n2nv)/2
        res.innerHTML = `A média dos valores ${n1nv} e ${n2nv} é: ${md}`
        res.style.margin = '20px'
        res.style.fontSize = '20px'
    }
}