
// estrtura de dados para armazenar as imagens de um site

var img set =
    document.getElementsByTagName("img");
    var saida =" ";

    for(var i = 0;i<imgset.length;i++){
        saida += "<p> para a fonte da imagem ";
        saida += i;
        saida += " é ";
        saida += imgset[i].src;
        saida +="</p>";

    }

    document.write(saida);


