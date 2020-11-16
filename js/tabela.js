function criarTabelaToda(campeonato ,head, body,i ,quantidade , nome){
    var classeTabela = "table";
    var classeTbody = body;
    var classeThead = head;
    var secao = document.querySelector(".tabelasCampeonatos")
    var tabela = document.createElement("table"); 
    var caption = document.createElement("caption"); 
    var thead = document.createElement("thead");   
    var tr = document.createElement("tr");
    var th = "";
    var tbody = document.createElement("tbody");
    var campanha = "";
    var grupo = ["A","B","C","D","E","F","G","H"];
    tabela.classList.add(classeTabela)
    
    campanha = grupos(nome,campanha,caption,grupo,i);

    tabela.appendChild(caption);
    tabela.appendChild(thead);
    thead.classList.add(classeThead);
    thead.appendChild(tr);
    tbody.classList.add(classeTbody);
    criarTh(campanha , th , tr);
    tabela.appendChild(tbody);
    secao.appendChild(tabela);
    comeco(campeonato  , "."+classeTbody) 
}

function grupos(nome,campanha,caption,grupo,i){
    if(nome == "Grupo"){
        campanha = ["COL.","Associação","Tecnico","PG","J","V","E","D","GP","GC","SG"];
        caption.textContent = nome+" "+(grupo[i]);
    }else{
        campanha = ["COL.","Tecnico","PG","J","V","E","D","GP","GC","SG","%"];
        caption.textContent = (i+1)+nome;
    }     
    return campanha;
}

function criarTh(campanha , th , tr){
    for(var i = 0 ; i < campanha.length ; i++){
        th = document.createElement("th");
        th.textContent = campanha[i];
        tr.appendChild(th);
    }
    return tr;
}

function comeco(campeonato  ,classeTbody){
    for(var i = 0 ; i < campeonato.length ; i++){
        criarTabela(campeonato , i  ,classeTbody);
    }
}

function criarTabela(campeonato , contagem , classeTbody){
    var tr = document.createElement('tr');

    var tbody = document.querySelector(classeTbody);

    var td = "";

        var trs = criarCelula(campeonato , contagem , td , tr);
       
        tbody.appendChild(trs);
}

function criarCelula(campeonato , contagem , td , tr){

    tr = tabelaNormal(campeonato , contagem , td , tr);

var c = condicaoClasse(campeonato);
if(contagem == c){
    return;
}
return tr;
}

function tabelaNormal(campeonato , contagem , td , tr){
    for(var i = 0 ; i < campeonato[contagem].length ; i++){
        colocacao(i , contagem , td , tr);
        criarTd(td , campeonato , contagem , i , tr);
    }
    return tr
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
    var img ="";
    if(i == 0 && campeonato[contagem][i].substr(campeonato[contagem][i].length - 3, campeonato[contagem][i].length) == "png"){
        logoCompeticao(img , campeonato , contagem , i , td , tr)
    }else{
        td = (document.createElement('td'));
        td.textContent = campeonato[contagem][i];
        tr.appendChild(td);
    }
}

function paginas(){
    var pagina = ["file:///C:/Users/clovi/OneDrive/gitHup%20-%20Gustavo%20Guanabara/lucfm/index.html" , "https://lucfm.000webhostapp.com/" , "https://lucfm.000webhostapp.com/index.html"];
    return pagina;
}

function criarClasseTabela(campeonato){
    var tabela = [];
    for(var i = 0 ; i < campeonato.length ; i++){
        tabela.push("tabela"+i);
    }
    return tabela;
}

function criarClasse(campeonato , valor){
    var tbody = [];
    for(var i = 0 ; i < campeonato.length ; i++){
        tbody.push(valor+i);
    }
    return tbody;
}

function criarTabelaAutomatica(campeonato , col){
    var secao = document.querySelector(".tabelasCampeonatos");
    var tabela = document.createElement('table');
    var caption = document.createElement('caption');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td = "";
    var th = "";
    var campanha = ["COL.","Tecnico","PG","J","V","E","D","GP","GC","SG","%"];
    var contagem = 0;
    var tb = "";
    tabela.classList.add("table")
    tbody.classList.add("home");
    caption.textContent = col+"º Campeonato L.U.C.F.M.";
    tabela.appendChild(caption);   
    tabela.appendChild(thead);
    thead.appendChild(tr);
    criarTh(campanha , th , tr);
    tb = criarTdAutomatico(tr , campeonato ,td , contagem , tbody); 
    tabela.appendChild(tb);   
    secao.appendChild(tabela)
}

function criarTdAutomatico(tr , campeonato ,td , contagem , tbody){
    for(var l = 0 ; l < 6 ; l++){
        tr = document.createElement('tr');
        for(var c = 0 ; c < campeonato[l].length ; c++){
        td = document.createElement('td');
        colocacao(c , contagem , td , tr);
        td.textContent = campeonato[l][c];
        tr.appendChild(td);
        }
        contagem++;
        tbody.appendChild(tr);
    }
    return tbody;
}

function grupo(grupos,nome,soma){
    var secao = document.querySelector(".tabelasCampeonatos")
    var h2 = document.createElement("h2");
    h2.textContent = nome;
    secao.appendChild(h2);
    var thead = criarClasse(grupos,"thead"+soma);
    var tbody = criarClasse(grupos,"tbody"+soma);
    var quantidade = grupos.length-1;            

    for(var i = 0 ; i <= quantidade ; i++ ){
        criarTabelaToda(grupos[i],thead[i],tbody[i],i ,quantidade,"Grupo");
    }
}

function eliminatorio(eliminatorios,fase ,head,body){
    var classeTabela = "table-eliminatorio";
    var classeTbody = body;
    var classeThead = head;
    var secao = document.querySelector(".tabelasCampeonatos");
    var tabela = document.createElement("table"); 
    var caption = document.createElement("caption"); 
    var thead = document.createElement("thead");   
    var tr = document.createElement("tr");
    var th = "";
    var tbody = document.createElement("tbody");
    var img = "";
    tabela.appendChild(caption)
    secao.appendChild(tabela)

    tabela.classList.add(classeTabela);

    var thTextos = ["Associação","Tecnico","Gols"]
    caption.textContent = fase;
    criarThEliminatorio(thTextos , th , tr);
 
    tabela.appendChild(caption);
    tabela.appendChild(thead);
    thead.classList.add(classeThead);
    thead.appendChild(tr);
    tbody.classList.add(classeTbody);
    var trs = "";

    jogosEliminatorios(eliminatorios , trs , th , tbody , img)
    
    tabela.appendChild(tbody);
    secao.appendChild(tabela);
}

function criarThEliminatorio(thTextos , th , tr){
    for(var i = 0 ; i < 5 ; i++){
        th = document.createElement("th");
        if(i == 0 || i == 4){
            th.textContent = thTextos[0];
        }else if(i == 1 || i == 3){
            th.textContent = thTextos[1];
        }else{
            th.textContent = thTextos[2];
            th.getAttribute("colspan");
            th.setAttribute("colspan",3);            
        }
        tr.appendChild(th)
    }
    return tr;
}

function jogosEliminatorios(eliminatorios , trs , th , tbody , img) {
    for(var l = 0 ; l < eliminatorios.length ; l++){
        trs = document.createElement("tr");
        for(var c = 0 ; c < eliminatorios[l].length; c++){
            if(c == 5){
                logoCompeticao(img , eliminatorios , l , c , th , trs);
            }else if(c == 3){
                dadosEliminatorios( th , eliminatorios , l , c , trs);
            }else if(c == 0){
                logoCompeticao(img , eliminatorios , l , c , th , trs);
            }else{
                dadosEliminatorios( th , eliminatorios , l , c , trs);
            }
        }
        tbody.appendChild(trs);
    }  
}

function logoCompeticao(img , eliminatorios , l , c , th , trs){
    img = document.createElement("img");
    img.getAttribute('src');
    img.setAttribute('src','imagem/associacao/'+eliminatorios[l][c])
    th = document.createElement("td");
    th.appendChild(img);
    trs.appendChild(th);
}

function dadosEliminatorios( th , eliminatorios , l , c , trs){
    th = document.createElement("td");
    if(c == 3){
        th.textContent = "X";
        trs.appendChild(th);
        th = document.createElement("td");
    }
    th.textContent = eliminatorios[l][c];
    trs.appendChild(th);
}

function copa(grupos,fases,eliminatorioIntegracao,quantidade){
    grupo(grupos,fases[0],quantidade);
    for(var i = 0 ; i < eliminatorioIntegracao.length ; i++){
        eliminatorio(eliminatorioIntegracao[i],fases[i+1],"thead","tbody");
    }
}
        
function ranking(tecnicos,campeonato,ponto){
    for(var t = 0 ; t < tecnicos.length ; t++){
        for(var l = 0 ; l < campeonato.length ; l++){
            for(var c = 0 ; c < campeonato[l].length ; c++){
                if(tecnicos[t].nome == campeonato[l][c][0]){
                    tecnicos[t].pontos = parseInt(tecnicos[t].pontos) + parseInt(ponto[c])
                }
            }
        }
    }
}

function mostraRanking(body , head , classe , fase , tecnicos){
    var classeTabela = "table-ranking";
    var classeTbody = body;
    var classeThead = head;
    var secao = document.querySelector(classe);
    var tabela = document.createElement("table"); 
    var caption = document.createElement("caption"); 
    var thead = document.createElement("thead");   
    var tr = document.createElement("tr");
    var th = "";
    var tbody = document.createElement("tbody");
    tabela.appendChild(caption)
    var campanha = ["COL.","Tecnicos","Pontos"];
    
    criarTh(campanha , th , tr);

    tabela.classList.add(classeTabela);

    caption.textContent = fase;
 
    tabela.appendChild(caption);
    tabela.appendChild(thead);
    thead.classList.add(classeThead);
    thead.appendChild(tr);
    tbody.classList.add(classeTbody);
    var trs = "";
    linhaRanking(trs , th , tbody , tecnicos)
    
    tabela.appendChild(tbody);
    secao.appendChild(tabela);
}

function linhaRanking(trs , td , tbody , tecnicos){
    for(var i = 0 ; i < tecnicos.length ; i++){
        if(tecnicos[i].pontos > 0 ){
        trs = document.createElement("tr");
        td = document.createElement('th');
        td.textContent = (tecnicos[i].colocacao+1+i)+"º";
        trs.appendChild(td);
        td = document.createElement('td');
        td.textContent = tecnicos[i].nome;
        trs.appendChild(td);
        td = document.createElement('td');
        td.textContent = tecnicos[i].pontos;
        trs.appendChild(td);
        tbody.appendChild(trs);
        }
    }
}

function escreverHr(){
    var secao = document.querySelector(".tabelasCampeonatos");
    var hr = document.createElement("hr");
    secao.appendChild(hr);
}

