function comeco(campeonato  ,classeTbody){
    for(var i = 0 ; i < campeonato.length ; i++){
        criarTabela(campeonato , i  ,classeTbody);
    }
}

function criarClasseTabela(campeonato){
    var tabela = [];
    for(var i = 0 ; i < campeonato.length ; i++){
        tabela.push("tabela"+i);
    }
    return tabela;
}

function criarClasseTbody(campeonato){
    var tbody = [];
    for(var i = 0 ; i < campeonato.length ; i++){
        tbody.push("tbody"+i);
    }
    return tbody;
}

function criarTabelaToda(campeonato , body,i){
    var classeTabela = "table";
    var classeTbody = body;
    var secao = document.querySelector(".tabelasCampeonatos")
    var tabela = document.createElement("table"); 
    var caption = document.createElement("caption"); 
    var thead = document.createElement("thead");   
    var tr = document.createElement("tr");
    var th = "";
    var tbody = document.createElement("tbody");
    var campanha = ["COL.","Tecnico","PG","J","V","E","D","GP","GC","SG","%"];

    tabela.classList.add(classeTabela)
    caption.textContent = (i+1)+"º Campeonato L.U.C.F.M.";
    tabela.appendChild(caption);
    tabela.appendChild(thead);
    thead.appendChild(tr);
    criarTh(campanha , th , tr);
    tbody.classList.add(classeTbody);
    tabela.appendChild(tbody);
    secao.appendChild(tabela);
    comeco(campeonato  , "."+classeTbody) 
    console.log(tabela);
}

function criarTh(campanha , th , tr){
    for(var i = 0 ; i < campanha.length ; i++){
        th = document.createElement("th");
        th.textContent = campanha[i];
        tr.appendChild(th);
    }
    return tr;
}

function criarTabela(campeonato , contagem , classeTbody){
    var tr = document.createElement('tr');

    var tbody = document.querySelector(classeTbody);

    var td = "";

        var trs = criarCelula(campeonato , contagem , td , tr);
       
        tbody.appendChild(trs);
        //tabela.appendChild(tbody);
}

function criarCelula(campeonato , contagem , td , tr){

        tr = tabelaNormal(campeonato , contagem , td , tr);

    var c = condicaoClasse(campeonato);
    if(contagem == c){
        return;
    }
    return tr;
}

function paginas(){
    var pagina = ["file:///C:/Users/clovi/OneDrive/gitHup%20-%20Gustavo%20Guanabara/lucfm/index.html" , "https://lucfm.000webhostapp.com/" , "https://lucfm.000webhostapp.com/index.html"];
    return pagina;
}

function condicaoClasse(campeonato){
    var condicao = "";
    var url_atual = window.location.href;
    var pagina = paginas();

    if(url_atual == pagina[0] ||
    url_atual == pagina[1] ||
    url_atual == pagina[2]){
        condicao = 6;
    }else{
        condicao = campeonato.length;
    }
    return condicao;
}

function colocacao(i , contagem , td , tr){
    if(i == 0 ){
        var variavelColocacao = contagem + 1;
        td = (document.createElement('th'));
        td.textContent = variavelColocacao+"º";
        tr.appendChild(td);
    }
}

function criarTd(td , campeonato , contagem , i , tr){
    td = (document.createElement('td'));
    td.textContent = campeonato[contagem][i];
    tr.appendChild(td);
}


function tabelaNormal(campeonato , contagem , td , tr){
    for(var i = 0 ; i < campeonato[contagem].length ; i++){
        colocacao(i , contagem , td , tr);
        criarTd(td , campeonato , contagem , i , tr);
    }
    return tr
}