function atualizacaoPost(titulo , fotoBlog , paragrafo,i){
    var article = document.querySelector(".postNoticias"); 
    var h2 = document.createElement("h2");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var hr = document.createElement("hr");
    var picture = document.createElement("picture");

    img.classList.add("fotoBlog");
    img.getAttribute("img");
    img.setAttribute("src","imagem/blog/"+fotoBlog)
    img.getAttribute("alt")
    img.setAttribute("alt", "L.U.C.F.M");
    
    if(i != "U"){
        var source = document.createElement("source");
        source.getAttribute("media");
        source.setAttribute("media","(max-width: 800px");
        source.getAttribute("srcset");
        source.setAttribute("srcset","imagem/home/"+fotoBlog)
        picture.appendChild(source);
    }else{
        img.setAttribute("src","imagem/Home/"+fotoBlog)
        h2.classList.add("postHome");
    }

    h2.textContent = titulo;
    p.textContent = paragrafo;

    picture.appendChild(img);
    article.appendChild(h2);
    article.appendChild(picture);
    article.appendChild(p);

    condicaoHr(i , article , hr);

    console.log(article);
}

function condicaoHr(i , article , hr){
    if(i == 0){
        article.appendChild(hr);
    }
}
