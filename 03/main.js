// main.js

var alto=document.getElementById("alto");
var ancho=document.getElementById("ancho");
var color=document.getElementById("color");
var figura=document.getElementById("figura");
var radius=document.getElementById("radius");
var anchoborde=document.getElementById("anchoborde");
var colorborde=document.getElementById("colorborde");
var tipoborde=document.getElementById("tipoborde");

var sombrx=document.getElementById("sombrx");
var sombry=document.getElementById("sombry");
var blur=document.getElementById("blur");
var colorsombra=document.getElementById("colorsombra");

alto.oninput=()=>{

    figura.style.height=alto.value+"px";

    document.getElementById("valto").innerHTML=alto.value;
}

ancho.oninput=()=>{

    figura.style.width=ancho.value+"px";

    document.getElementById("vancho").innerHTML=ancho.value;
}

color.onchange=()=>{

    figura.style.backgroundColor=color.value;
}

radius.oninput=()=>{

    figura.style.borderRadius=radius.value+"%";

    document.getElementById("vradio").innerHTML=radius.value;
}

anchoborde.oninput=()=>{

    figura.style.borderWidth=anchoborde.value+"px";

    document.getElementById("vanchoborde").innerHTML=anchoborde.value;
}

colorborde.onchange=()=>{

    figura.style.borderColor=colorborde.value;
}

tipoborde.onchange=()=>{

    figura.style.borderStyle=tipoborde.value;
}



figura.style.boxShadow="0px 0px 30px cyan";

const actualizarSombra=()=>{

    figura.style.boxShadow=
    sombrx.value+"px "+
    sombry.value+"px "+
    blur.value+"px "+
    colorsombra.value;

    document.getElementById("vsombrx").innerHTML=sombrx.value;

    document.getElementById("vsombry").innerHTML=sombry.value;

    document.getElementById("vblur").innerHTML=blur.value;
}
sombrx.oninput=actualizarSombra;

sombry.oninput=actualizarSombra;

blur.oninput=actualizarSombra;

colorsombra.onchange=actualizarSombra;