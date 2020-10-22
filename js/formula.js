function grupo4(grupo,a,b,c,d){
    nome = grupo;
    time1 = a;
    time2 = b;
    time3 = c;
    time4 = d;
    document.write("<table border=1>\n\
                        <caption>"+nome+"</caption>\n\
                            <tr><td>"+time1+"</td><td><input type='text' size='1' onblur='alert('m')'></input></td><td>X</td><td><input type='text' size='1'></input></td><td>"+time2+"</td></tr>\n\
                    </table>");
}