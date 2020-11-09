function atualizacaoPost(titulo , fotoBlog , paragrafo,i){
    var article = document.querySelector(".postNoticias"); 
    var h2 = document.createElement("h2");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var hr = document.createElement("hr");
    var picture = document.createElement("picture");

    img.classList.add("fotoBlog");
    img.getAttribute("src");
    img.setAttribute("src","imagem/blog/"+fotoBlog)
    var source = document.createElement("source");
    source.getAttribute("media");
    source.setAttribute("media","(max-width: 800px");
    source.getAttribute("srcset");
    source.setAttribute("srcset","imagem/home/"+fotoBlog)
    picture.appendChild(source);
    img.getAttribute("alt")
    img.setAttribute("alt", "L.U.C.F.M");
    picture.appendChild(img);
    
    
    h2.textContent = titulo;
    p.textContent = paragrafo;

    article.appendChild(h2);
    article.appendChild(picture);
    article.appendChild(p);

    condicaoHr(i , article , hr);
}

function condicaoHr(i , article , hr){
    if(i == 0 ){
        article.appendChild(hr);
    }
}

function atualizacaoPostHome(titulo , fotoBlog , paragrafo){
    var article = document.querySelector(".postNoticias"); 
    var h2 = document.createElement("h2");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var picture = document.createElement("picture");

    img.classList.add("fotoBlog");
    img.getAttribute("src");
    img.setAttribute("src","imagem/home/"+fotoBlog)
    img.getAttribute("alt")
    img.setAttribute("alt", "L.U.C.F.M");
    picture.appendChild(img);
    
    
    h2.textContent = titulo;
    p.textContent = paragrafo;

    article.appendChild(h2);
    article.appendChild(picture);
    article.appendChild(p);

}