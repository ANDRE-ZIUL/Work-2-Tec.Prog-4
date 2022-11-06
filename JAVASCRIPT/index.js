//Arrays de cada colocação
var firstPlace = ['', 0, 0, 0, 0, 0];
var secondPlace = ['', 0, 0, 0, 0, 0];
var thirdPlace = ['', 0, 0, 0, 0, 0];
var fourthPlace = ['', 0, 0, 0, 0, 0];

//------------------------------------------
//Arrays de cada seleção
var brasil = ['Brasil', 0, 0, 0, 0, 0];
var servia = ['Sérvia', 0, 0, 0, 0, 0];
var suica = ['Suiça', 0, 0, 0, 0, 0];
var camaroes = ['Camarões', 0, 0, 0, 0, 0];

//------------------------------------------

//Função que chama a função clicada em seu devido botão
const start = () => {
    const buttonOne = document.getElementById('primeiraRodada');
    buttonOne.onclick = clickActualizationOne;

    const buttonTwo = document.getElementById('segundaRodada');
    buttonTwo.onclick = clickActualizationTwo;

    const buttonThree = document.getElementById('terceiraRodada');
    buttonThree.onclick = clickActualizationThree;
}

//Atualiza 1° Rodada
const clickActualizationOne = () => {
    //TRAZENDO OS VALORES DO HTML PARA O JAVASCRIPT
    const golSuica1 = document.getElementById('goalsSuica1');
    var golSuica = golSuica1.value;
    const golCamaroes1 = document.getElementById('goalsCamaroes1');
    var golCamaroes = golCamaroes1.value;
    const golBrasil1 = document.getElementById('goalsBrasil1');
    var golBrasil = golBrasil1.value;
    const golServia1 = document.getElementById('goalsServia1');
    var golServia = golServia1.value;

    //LOGICA DOS JOGOS

    //SUIÇA X CAMARÕES
    if(golSuica > golCamaroes) { //Caso de vitória da Suiça
        //pontuação +3
        suica[1] += 3;
        //vitorias +1
        suica[2] += 1;
        //derrotas +1
        camaroes[4] += 1; 
    }else if(golCamaroes > golSuica) { //Caso de vitória de Camarões
        //pontuação +3
        camaroes[1] += 3;
        //vitorias +1
        camaroes[2] += 1;
        //derrotas +1
        suica[4] += 1;
    }else{                             //Caso de empate
        //pontuação +1
        suica[1] += 1;
        camaroes[1] += 1;
        //empates +1
        suica[3] += 1;
        camaroes[3] += 1;
    }   
    //saldo de Gols
    suica[5] += (golSuica - golCamaroes);
    camaroes[5] += (golCamaroes - golSuica);

    //-------------------------------------------------------

    //BRASIL X SÉRVIA
    if(golBrasil > golServia) { //Caso de vitória da Brasil
        //pontuação +3
        brasil[1] += 3;
        //vitorias +1
        brasil[2] += 1;
        //derrotas +1
        servia[4] += 1; 
    }else if(golServia > golBrasil) { //Caso de vitória de Sérvia
        //pontuação +3
        servia[1] += 3;
        //vitorias +1
        servia[2] += 1;
        //derrotas +1
        brasil[4] += 1;
    }else{                             //Caso de empate
        //pontuação +1
        brasil[1] += 1;
        servia[1] += 1;
        //empates +1
        brasil[3] += 1;
        servia[3] += 1;
    }   
    //saldo de Gols
    brasil[5] += (golBrasil - golServia);
    servia[5] += (golServia - golBrasil);

    for(var x = 0; x < 6; x++) {
        firstPlace[x] = brasil[x];
        secondPlace[x] = suica[x];
        thirdPlace[x] = camaroes[x];
        fourthPlace[x] = servia[x];
    }
    
    sortedSort();
    
    printTableData();

}

//Atualiza 2° Rodada
const clickActualizationTwo = () => {
    //TRAZENDO OS VALORES DO HTML PARA O JAVASCRIPT
    const golSuica1 = document.getElementById('goalsSuica2');
    var golSuica = golSuica1.value;
    const golCamaroes1 = document.getElementById('goalsCamaroes2');
    var golCamaroes = golCamaroes1.value;
    const golBrasil1 = document.getElementById('goalsBrasil2');
    var golBrasil = golBrasil1.value;
    const golServia1 = document.getElementById('goalsServia2');
    var golServia = golServia1.value;

    //LOGICA DOS JOGOS
    
    //CAMARÕES X SÉRVIA
    if(golCamaroes > golServia) { //Caso de vitória de Camarões
        //pontuação +3
        camaroes[1] += 3;
        //vitorias +1
        camaroes[2] += 1;
        //derrotas +1
        servia[4] += 1; 
    }else if(golServia > golCamaroes) { //Caso de vitória de Sérvia
        //pontuação +3
        servia[1] += 3;
        //vitorias +1
        servia[2] += 1;
        //derrotas +1
        camaroes[4] += 1;
    }else{                             //Caso de empate
        //pontuação +1
        camaroes[1] += 1;
        servia[1] += 1;
        //empates +1
        camaroes[3] += 1;
        servia[3] += 1;
    }   
    //saldo de Gols
    servia[5] += (golServia - golCamaroes);
    camaroes[5] += (golCamaroes - golServia);

    //-------------------------------------------------------

    //BRASIL X SUIÇA
    if(golBrasil > golSuica) { //Caso de vitória da Brasil
        //pontuação +3
        brasil[1] += 3;
        //vitorias +1
        brasil[2] += 1;
        //derrotas +1
        suica[4] += 1; 
    }else if(golSuica > golBrasil) { //Caso de vitória de Suiça
        //pontuação +3
        suica[1] += 3;
        //vitorias +1
        suica[2] += 1;
        //derrotas +1
        brasil[4] += 1;
    }else{                             //Caso de empate
        //pontuação +1
        brasil[1] += 1;
        suica[1] += 1;
        //empates +1
        brasil[3] += 1;
        suica[3] += 1;
    }   
    //saldo de Gols
    brasil[5] += (golBrasil - golSuica);
    suica[5] += (golSuica - golBrasil);

    sortedSort();
    
    printTableData();
}

//Atualiza 3° Rodada
const clickActualizationThree = () => {
    //TRAZENDO OS VALORES DO HTML PARA O JAVASCRIPT
    const golSuica1 = document.getElementById('goalsSuica3');
    var golSuica = golSuica1.value;
    const golCamaroes1 = document.getElementById('goalsCamaroes3');
    var golCamaroes = golCamaroes1.value;
    const golBrasil1 = document.getElementById('goalsBrasil3');
    var golBrasil = golBrasil1.value;
    const golServia1 = document.getElementById('goalsServia3');
    var golServia = golServia1.value;

    //LOGICA DOS JOGOS
    
    //CAMARÕES X BRASIL
    if(golCamaroes > golBrasil) { //Caso de vitória de Camarões
        //pontuação +3
        camaroes[1] += 3;
        //vitorias +1
        camaroes[2] += 1;
        //derrotas +1
        brasil[4] += 1; 
    }else if(golBrasil > golCamaroes) { //Caso de vitória do Brasil
        //pontuação +3
        brasil[1] += 3;
        //vitorias +1
        brasil[2] += 1;
        //derrotas +1
        camaroes[4] += 1;
    }else{                             //Caso de empate
        //pontuação +1
        camaroes[1] += 1;
        brasil[1] += 1;
        //empates +1
        camaroes[3] += 1;
        brasil[3] += 1;
    }   
    //saldo de Gols
    brasil[5] += (golBrasil - golCamaroes);
    camaroes[5] += (golCamaroes - golBrasil);

    //-------------------------------------------------------

    //SÉRVIA X SUIÇA
    if(golServia > golSuica) { //Caso de vitória da Sérvia
        //pontuação +3
        servia[1] += 3;
        //vitorias +1
        servia[2] += 1;
        //derrotas +1
        suica[4] += 1; 
    }else if(golSuica > golServia) { //Caso de vitória de Suiça
        //pontuação +3
        suica[1] += 3;
        //vitorias +1
        suica[2] += 1;
        //derrotas +1
        servia[4] += 1;
    }else{                             //Caso de empate
        //pontuação +1
        servia[1] += 1;
        suica[1] += 1;
        //empates +1
        servia[3] += 1;
        suica[3] += 1;
    }   
    //saldo de Gols
    servia[5] += (golServia - golSuica);
    suica[5] += (golSuica - golServia);

    sortedSort();
    
    printTableData();
}

//Função que atribui valores nas devidas colocações
function printTableData() {
    //1° COLOCADO
    document.getElementById("sel1").innerHTML = "" + firstPlace[0]
    document.getElementById("pts1").innerHTML = "" + firstPlace[1];
    document.getElementById("vit1").innerHTML = "" + firstPlace[2];
    document.getElementById("emp1").innerHTML = "" + firstPlace[3];
    document.getElementById("der1").innerHTML = "" + firstPlace[4];
    document.getElementById("sg1").innerHTML = "" + firstPlace[5];

    //2° COLOCADO
    document.getElementById("sel2").innerHTML = "" + secondPlace[0]
    document.getElementById("pts2").innerHTML = "" + secondPlace[1];
    document.getElementById("vit2").innerHTML = "" + secondPlace[2];
    document.getElementById("emp2").innerHTML = "" + secondPlace[3];
    document.getElementById("der2").innerHTML = "" + secondPlace[4];
    document.getElementById("sg2").innerHTML = "" + secondPlace[5];

    //3° COLOCADO
    document.getElementById("sel3").innerHTML = "" + thirdPlace[0]
    document.getElementById("pts3").innerHTML = "" + thirdPlace[1];
    document.getElementById("vit3").innerHTML = "" + thirdPlace[2];
    document.getElementById("emp3").innerHTML = "" + thirdPlace[3];
    document.getElementById("der3").innerHTML = "" + thirdPlace[4];
    document.getElementById("sg3").innerHTML = "" + thirdPlace[5];

    //4° COLOCADO
    document.getElementById("sel4").innerHTML = "" + fourthPlace[0]
    document.getElementById("pts4").innerHTML = "" + fourthPlace[1];
    document.getElementById("vit4").innerHTML = "" + fourthPlace[2];
    document.getElementById("emp4").innerHTML = "" + fourthPlace[3];
    document.getElementById("der4").innerHTML = "" + fourthPlace[4];
    document.getElementById("sg4").innerHTML = "" + fourthPlace[5];
}

//Função que realiza a ordenação pelos pontos de cada seleção
function sortedSort() {
    var aux = ['', 0, 0, 0, 0, 0];
    for(var x = 0; x < 6; x++) {
        firstPlace[x] = brasil[x];
        secondPlace[x] = servia[x];
        thirdPlace[x] = camaroes[x];
        fourthPlace[x] = suica[x];
    }

    do{
        if(firstPlace[1] < fourthPlace[1]) {
            for(var x = 0; x < 6; x++) {
                aux[x] = firstPlace[x];
                firstPlace[x]  = fourthPlace[x];
                fourthPlace[x] = aux[x];
            }
            
        }

        if(firstPlace[1] < secondPlace[1]) {
            for(var x = 0; x < 6; x++) {
                aux[x] = firstPlace[x];
                firstPlace[x] = secondPlace[x];
                secondPlace[x] = aux[x];
            }
        }

        if(secondPlace[1] < thirdPlace[1]) {
            for(var x = 0; x < 6; x++) {
                aux[x] = secondPlace[x];
                secondPlace[x] = thirdPlace[x];
                thirdPlace[x] = aux[x];
            }
        }

        if(thirdPlace[1] < fourthPlace[1]) {
            for(var x = 0; x < 6; x++) {
                aux[x] = thirdPlace[x];
                thirdPlace[x] = fourthPlace[x];
                fourthPlace[x] = aux[x];
            }
        }

        //LÓGICAS PARA EMPATE DE PONTOS DECIDINDO POSIÇÃO PELO SALDO  DE GOLS
        if(firstPlace[1] == secondPlace[1]) {
            if(firstPlace[5] < secondPlace[5]) {
                for(var x = 0; x < 6; x++) {
                    aux[x] = secondPlace[x];
                    secondPlace[x] = firstPlace[x];
                    firstPlace[x] =aux[x];
                }
            }
        }
        
        if(secondPlace[1] == thirdPlace[1]) {
            if(secondPlace[5] <thirdPlace[5]) {
                for(var x = 0; x < 6; x++) {
                    aux[x] = thirdPlace[x];
                    thirdPlace[x] = secondPlace[x];
                    secondPlace[x] =aux[x];
                }
            }
        }

        if(thirdPlace[1] == fourthPlace[1]) {
            if(thirdPlace[5] < fourthPlace[5]) {
                for(var x = 0; x < 6; x++) {
                    aux[x] = thirdPlace[x];
                    thirdPlace[x] = fourthPlace[x];
                    fourthPlace[x] =aux[x];
                }
            }
        }
    }while(firstPlace[1] < fourthPlace[1] || firstPlace[1] < secondPlace[1] || secondPlace[1] < thirdPlace[1] || thirdPlace[1] < fourthPlace[1]);
}

start()