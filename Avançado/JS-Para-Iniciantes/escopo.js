// Por qual motivo o código abaixo retorna com erros?
{//Res: pq a variavel const e let esta sendo chamada fora,
// de bloco. e a console log está chamando o tipo de varivel (var)
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(cor, marca, portas);
  
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  somarDois(4);
  dividirDois(6);
  //Resposta: Declarar a variavel "const dois = 2" fora da função
  
  // O que fazer para total retornar 500?
  //Resposta: Mudar o tipo de varivel dentro do FOR para LET
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {//aqui
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  