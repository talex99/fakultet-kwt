function prikazisliku(slika)
{
    slika.style.visibility="visible";    
}

function sakrijsliku(slika)
{
    slika.style.visibility="hidden";
}

       
var pred, xmlDoc, xhttp, x, price, title;
function loadDoc(){
    xhttp= new XMLHttpRequest;
    xhttp.open("GET", "predstave.xml", false);
    xhttp.send();
    xmlDoc=xhttp.responseXML;
    
    pred=xmlDoc.getElementsByTagName("predstava");

    prikaziPredstave();
}


function prikaziPredstave(){
    var i;
    var table="";
    var i;
    table+="<th>Naziv</th><th>Cena</th>";
    for(i=0; i<pred.length; i++){
         
        table+="<tr><td id='red"+i+"p'>"
        + pred[i].getElementsByTagName("title")[0].childNodes[0].nodeValue
        +"</td><td id ='red"+i+"d'>"
        +pred[i].getElementsByTagName("price")[0].childNodes[0].nodeValue
        +"</td><td><input type='button' value='Kupi' id="+i+" onclick='alertSvi()'\n\
         ></td></tr>";
        
    }
    document.getElementById("tabela1").innerHTML=table;
    // Filter();
}


 function alertSvi()
{
    if(document.getElementById("ime").value=="")
        {
            alert("Unesite ime");
            return;
                 }
    if(document.getElementById("prezime").value=="")
        {
            alert("Unesite prezime");
            return;
                 }
    var email=document.getElementById("email").value;
    if(!(email.indexOf("@")>0) || !(email.indexOf(".")>0))
    {
        alert("Unesite ispravan email");
        return;
                 }
        prozor=window.open('','','width=200, height=200');
        prozor.document.write("<p><b>Ulaznica kupljena! </b></p>");
        prozor.document.write("<b>Ime:</b> "+document.getElementById("ime").value+"<br/>");
        prozor.document.write("<b>Prezime:</b> "+document.getElementById("prezime").value+"<br/>");
        prozor.document.write("<b>Email:</b> "+document.getElementById("email").value+"<br/>");
        prozor.document.write("<b>Broj karata: </b> "+document.getElementById("brojKarata").options[document.getElementById("brojKarata").selectedIndex].text+"<br/>");
            
                 
     }
       



