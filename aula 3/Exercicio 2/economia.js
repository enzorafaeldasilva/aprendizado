

let valornobanco = 856;
let valordoproduto = 750;
let diferenca = valornobanco - valordoproduto;

if (valornobanco % valordoproduto == 0) {
    console.log('Você não tem dinheiro suficiente para efetuar seu pagamento');
} else {
    console.log('Você tem dinheiro suficiente para efetuar o pagamento');
}