    var captions = document.querySelectorAll("caption");
    var thead = document.querySelector("thead");
    captions.forEach(function(caption){
        caption.addEventListener("click" , function(){
            thead.classList.add("visivel");
        });
    });

    