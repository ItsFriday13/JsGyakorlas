var kepeim=[
{
kepEleresiut: "kepek/kep1.jpg",
kepCim: "kep1",
kepAr: 1234
},
{
kepEleresiut: "kepek/kep2.jpg",
kepCim: "kep2",
kepAr: 4321
},
{
kepEleresiut: "kepek/kep3.jpg",
kepCim: "kep3",
kepAr: 5432
},
{
kepEleresiut: "kepek/kep4.jpg",
kepCim: "kep4",
kepAr: 4444
},
];



window.addEventListener("load", init);
function ID(elem) {
    return document.getElementById(elem);
}



function init() {
    ID("uzenet").innerHTML = "<h1>Valami</h1>";
    ID("uzenet").innerHTML = "<h1>Képek</h1>";
    var txt = "";
    for (let index = 0; index < kepeim.length; index++) {
        txt += "<div><img src='"+kepeim[index].kepEleresiut+"' alt='"+kepeim[index].kepCim+"' ></div>"; 
    }
    console.log(txt)
    ID("kepek").innerHTML = txt;


    var txtCimek = "<ul>";
    for (let index = 0; index < kepeim.length; index++) {
        txtCimek += "<li>" + kepeim[index].kepCim + "</li>"; 
    }
    txtCimek +="</ul>";
    ID("cimek").innerHTML = txtCimek;


    var txtArak = "<ul>";
    for (let index = 0; index < kepeim.length; index++) {
        txtArak += "<li>" + kepeim[index].kepAr + "</li>"; 
    }
    txtArak +="</ul>";
    ID("arak").innerHTML = txtArak;



    ID("uj").addEventListener("click",kepbetoltes);
    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
    megjelenit(aktKep);


}


var aktKep=0;

function balra() {
    aktKep--;
    if(aktKep<0) {
        aktKep=kepeim.length-1;
    }
    megjelenit(aktKep)
}

function jobbra() {
    aktKep++;
    if(aktKep>=kepeim.length) {
        aktKep=0;
    }
    megjelenit(aktKep)
}

function kepbetoltes(){
    var rnd=Math.floor(Math.random()*kepeim.length)
    megjelenit(rnd);
}



function megjelenit(index) {
    ID("fokep").src=kepeim[index].kepEleresiut;
    ID("fokep").alt=kepeim[index].kepCim;
}