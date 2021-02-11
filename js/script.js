const x = 10;
var season = "sommar";
var varType = 0;
var text = "test";


if (x <= 10){

    console.log(x + " är mindre eller lika stort som 10")

}


if (x > 10){

    console.log(x + " är större än 10")

}



else {

    console.log(x + " är mindre än 10")

}


if (season == "sommar"){

    console.log("sommar")
}

if (season == "vår"){

    console.log("vår")
}



if (season == "höst"){

    console.log("höst")
}



if (season == "vinter"){

    console.log("vinter")
}



var kodare = "Kalle";
var lang = "";

if(lang == "PHP") {
var upg4 = kodare + " kodar php";

} else if(lang == " JAVA") {
var upg4 = kodare + " är kock";
} else if(lang == "RUBY") {
var upg4 = kodare + " ruby";
} else {
var upg4 = kodare + " kodar något annat";
}
console.log(upg4);


if (x >2 && x < 10){

    console.log("true")

}


if (text.length == 0){


    console.log("0 tecken")
}

if (text.length > 1 && text.length < 3){


    console.log("1-3 tecken")
}

if (text.length > 3 && text.length < 10){


    console.log("4-10 tecken")
}


if (text.length > 10 && text.length < 20){


    console.log("mera en 10, mindre än 20")
}


if (text.length > 20) {


    console.log("mera än 20")
}
