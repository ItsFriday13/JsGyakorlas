/**var kepEleresiut=["kepek/kep1.jpeg","kepek/kep2.jpeg","kepek/kep3.jpeg","kepek/kep4.jpeg"];
var kepCim=["kep1","kep2","kep3","kep4"];
var kepAr=[1234,4321,5432,4444];*/


var kepeim=[
{
kepEleresiut: "kepek/kep1.jpeg",
kepCim: "kep1",
kepAr: 1234
},
{
kepEleresiut: "kepek/kep2.jpeg",
kepCim: "kep2",
kepAr: 4321
},
{
kepEleresiut: "kepek/kep3.jpeg",
kepCim: "kep3",
kepAr: 5432
},
{
kepEleresiut: "kepek/kep4.jpeg",
kepCim: "kep4",
kepAr: 4444
},
];
console.log(kepeim);


var atlgAr=atlagAr();
console.log(atlgAr);


var kpAr=kepAr();
if (kpAr) {
    console.log("van");
} else {
    console.log("nincs");
}

function kepAr(){
    var i = 0;
    while(i < kepeim.length && !(kepeim[i].kepAr > 10000)) {
        i++;
    }
    return i < kepeim.length;
}


function atlagAr(){
    var osszeg = 0;
    for(let index = 0; index < kepeim.length; index++) {
        osszeg = kepeim[index].kepAr + atlag;
    }
    var atlag = osszeg / kepeim.length;
    return atlag;
}


for (let index = 0; index < kepeim.length; index++) {
    if(kepeim[index].kepCim.length >= 20){
        console.log(kepeim[index]);
    }
}


/**Objektumok */ 

var szemely = {
 nev: "Béla",
 kor: 12,
 nem: "férfi"
};

console.log(szemely);
szemely.szemSzin="kék";
console.log(szemely);
szemely.nem="nő";
console.log(szemely);

var szemely2 = {
 nev: "Juci",
 kor: 122,
 nem: "nő",
 szemSzin: "szürke"
};

console.log(szemely2);