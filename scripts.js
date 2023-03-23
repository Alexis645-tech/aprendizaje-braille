var verso = document.getElementById("verso");
var username = null
var inicial = null, unitall = null, topicview = [],
    teoria = null, alfanum = [], activity = [], quiztest = []
var unittxt = [4]
var topictxt = [[], [], [], []]
var teoriaparrafo = [[], [], []]
var activityhistory = []
var dataactivity = [[], [], [], []]
let avancesaved = []
var topicfila = [[], [], [], []]
let moment = 0
var audio = []
let certc = false
geninfos()
dataactivitygen()
audiogen()
newuser()

var inser = document.createElement("iframe")
inser.src = "https://view.genial.ly/5e3a385d5cd3b056b0b75390"
inser.width = "60%"
inser.height = "80%"
inser.frameborder = "0"
inser.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
inser.allowfullscreen = "false"

function geninfos() {
    unittxt[0] = "UNIDAD I: DEFINICIÓN DEL SISTEMA BRAILLE."
    unittxt[1] = "UNIDAD II: EXPLORACIÓN BRAILLE."
    unittxt[2] = "UNIDAD III: LECTURA INICIAL."
    unittxt[3] = "UNIDAD IV: EVALUACIÓN DE CONOCIMIENTOS Y RECURSO."
    topictxt[0][0] = "¿QUÉ ES BRAILLE?."
    topictxt[0][1] = "¿CÓMO SE ESCRIBE EN BRAILLE?."
    topictxt[0][2] = "¿CÓMO SE LEE EN BRAILLE?."
    topictxt[1][0] = "ALFABETO EN BRAILLE."
    topictxt[1][1] = "NÚMEROS EN BRAILLE."
    topictxt[2][0] = "ACTIVIDAD BÁSICO."
    topictxt[2][1] = "ACTIVIDAD INTERMEDIO."
    topictxt[2][2] = "ACTIVIDAD AVANZADO."
    topictxt[2][3] = "ACTIVIDAD PROFESIONAL."
    topictxt[3][0] = "EVALUACIÓN BRAILLE."
    topictxt[3][1] = "VALORACIÓN DEL RECURSO."
    topictxt[3][2] = "GENERAR CERTIFICADO."

    teoriaparrafo[0][0] = "El braille o cecografía, es un sistema de lectura y escritura táctil pensado para personas ciegas. Fue ideado a mediados del siglo XIX por el francés Louis Braille, que se quedó ciego debido a un accidente durante su niñez mientras jugaba en el taller de su padre. Cuando tenía 13 años, el director de la Escuela de Ciegos y Sordos de París le pidió que probara un sistema de lecto-escritura táctil inventado por un militar llamado Charles Barbier de la Serre para transmitir órdenes a puestos de avanzada sin tener necesidad de delatar la posición durante las noches. "
    teoriaparrafo[0][1] = "Louis Braille descubrió al cabo de un tiempo que el sistema era válido y lo reinventó utilizando un sistema de 8 puntos. Al cabo de unos años lo simplificó dejándole en el sistema universalmente conocido y adoptado de 6 puntos."
    teoriaparrafo[0][2] = ""
    teoriaparrafo[1][0] = "1.Reúne les herramientas: Necesitaras una regleta, un estilete (o punzón) y cartón. Puedes adquirirlos"
    teoriaparrafo[1][1] = "2.Pon el papel en la regleta y comienza a escribir con el estilete. El papel debe ir entre las dos hojas de la regleta. Utiliza el estilete a través de los agujeros de la regleta para hacer los puntos y escribir el patrón que desees."
    teoriaparrafo[1][2] = "3.Voltea la página. AL presionar el cartón con el estilete estás en realidad escribiendo en la parte trasera de la página. Esto quiere decir que tendrás que utilizar estilete para escribir de derecha a izquierda, como si se tratara de una imagen reflejada en un espejo Una vez que termines, voltea la página para que tu texto pueda leerse normalmente de izquierda a derecha"
    teoriaparrafo[2][0] = "El braille es un método de lectura por medio del tacto, en lugar de la vista. Aunque lo usan en su mayoría las personas con visión disminuida, las que tienen miopía también pueden aprender a leerlo."
    teoriaparrafo[2][1] = "Quizás te parezca que el braille es un lenguaje, pero, en realidad, es más como un código. Hay códigos braille para casi cualquier lenguaje, así como diferentes tipos para cada disciplina especializada como la música, las matemáticas y la computación."
    teoriaparrafo[2][2] = ""
    activityhistory[0] = "Identifique la palabra correcta de 4 letras"
    activityhistory[1] = "Identifique la palabra correcta de 8 letras"
    activityhistory[2] = "Identifique la palabra correcta de 12 letras"
    activityhistory[3] = "Identifique la palabra correcta de 16 letras"
}
function dataactivitygen() {
    //BASICO 4 LETRAS
    dataactivity[0][0] = "MAMA"
    dataactivity[0][1] = "PAPA"
    dataactivity[0][2] = "NIÑO"
    dataactivity[0][3] = "DADO"
    dataactivity[0][4] = "MANO"
    dataactivity[0][5] = "CARA"
    dataactivity[0][6] = "PIES"
    dataactivity[0][7] = "MESA"
    dataactivity[0][8] = "TINA"
    dataactivity[0][9] = "PELO"
    //MEDIO 8 LETRAS
    dataactivity[1][0] = "EDIFICIO"
    dataactivity[1][1] = "ACORDEON"
    dataactivity[1][2] = "CACHORRO"
    dataactivity[1][3] = "LADRILLO"
    dataactivity[1][4] = "CUADERNO"
    dataactivity[1][5] = "PLATILLO"
    dataactivity[1][6] = "HISTORIA"
    dataactivity[1][7] = "BANCARIO"
    dataactivity[1][8] = "ZORRILLO"
    dataactivity[1][9] = "PIMIENTA"
    //AVANZADO 12 LETRAS
    dataactivity[2][0] = "INVERTEBRADO"
    dataactivity[2][1] = "INVOLUNTARIO"
    dataactivity[2][2] = "CONVENCIONAL"
    dataactivity[2][3] = "#09822321234"
    dataactivity[2][4] = "CUESTIONARIO"
    dataactivity[2][5] = "#98765432123"
    dataactivity[2][6] = "CAPACITACION"
    dataactivity[2][7] = "CIRCULATORIO"
    dataactivity[2][8] = "#11223343432"
    dataactivity[2][9] = "DEPARTAMENTO"
    //PROFESIONAL 16 LETRAS
    dataactivity[3][0] = "HUMANITARIAMENTE"
    dataactivity[3][1] = "#101029384776293"
    dataactivity[3][2] = "DEMOCRATIZADORES"
    dataactivity[3][3] = "EXPERIMENTADORES"
    dataactivity[3][4] = "FRACCIONAMIENTOS"
    dataactivity[3][5] = "#564728920132123"
    dataactivity[3][6] = "#764738473625384"
    dataactivity[3][7] = "#443291029343294"
    dataactivity[3][8] = "LATINOAMERICANOS"
    dataactivity[3][9] = "MINICOMPUTADORAS"

}
function audiogen() {
    audio[0] = new Audio()
    audio[0].src = "assets/sound/next.mp3"
    audio[1] = new Audio()
    audio[1].src = "assets/sound/back.mp3"
    audio[2] = new Audio()
    audio[2].src = "assets/sound/win.mp3"
    audio[3] = new Audio()
    audio[3].src = "assets/sound/fail.mp3"
}
function newuser() {
    inicial = null, unitall = null, topicview = [],
        teoria = null, alfanum = [], activity = [], quiztest = []
    for (let index = 0; index < 4; index++) {
        avancesaved[index] = 0
    }
    username = localStorage.getItem('nuserlbraille');
    if (username != null && username != "null") {
        var avanceload = localStorage.getItem('datalbraille');
        var senddata=""
        for (let index = 0; index < avancesaved.length; index++) {
                if ( avanceload.charAt(index)=="x") {
                avancesaved[index]=10
            }else{
                avancesaved[index] = avanceload.charAt(index)
            }
        }
        unitallgen()
    } else {
        inicialgen()
    }
}
function inicialgen() {
    //SUBVERSO
    verso.innerHTML = "";
    inicial = crearobj("div", "", "100%", "", "", "", "")
    inicial.style.display = "flex";
    inicial.style.flexDirection = "column";
    inicial.style.overflow = "hidden";
    inicial.style.alignItems = "center";
    //TITTLE
    inicialtitlediv = crearobj("h1", "Aprende Braille", "", "", "", "", "")
    inicialtitlediv.style.fontFamily = "Georgia";
    inicialtitlediv.style.fontSize = "50px";
    inicialtitlediv.style.color = "#fff";
    inicial.appendChild(inicialtitlediv)
    //SALUDO BRAILLE
    inicialtittleimgtable = crearobj("table", "", "", "", "static", "", "")
    inicialtittleimgtable.style.display = "flex";
    inicialtittleimgtable.style.flexWrap = "wrap";
    inicial.appendChild(inicialtittleimgtable)
    inicialtittleimgfila = crearobj("tr", "", "", "", "static", "", "")
    inicialtittleimgfila.style.display = "flex";
    inicialtittleimgfila.style.flexWrap = "wrap";
    inicialtittleimgtable.appendChild(inicialtittleimgfila)
    inicialtittleimgcolum = crearobj("td", "", "", "", "static", "", "")
    inicialtittleimgcolum.style.display = "flex";
    inicialtittleimgcolum.style.flexWrap = "wrap";
    inicialtittleimgfila.appendChild(inicialtittleimgcolum)
    txt = "bienvenido"
    var obp = []
    let contt = 0
    for (const char of txt) {
        obp[contt] = createpiece(char, "5%", "15%", (contt * 10) + "%", "18%")
        inicialtittleimgcolum.appendChild(obp[contt]);
        contt++
    }
    inicialtextobienv = crearobj("h1", "BIENVENIDO", "", "", "", "", "30%")
    inicialtextobienv.style.color = "white";
    inicialtextobienv.style.textAlign = "center";
    inicialtextobienv.style.fontSize = "30px";
    inicialtextobienv.style.margin = "100px 0 10px";
    inicial.appendChild(inicialtextobienv)
    //TEXTO
    inicialtext = crearobj("h1", "INGRESE SU NOMBRE Y APELLIDO", "", "", "", "", "")
    inicialtext.style.margin = "40px 0";
    inicialtext.style.fontSize = "25px";
    inicialtext.style.color = "white";
    inicial.appendChild(inicialtext)
    //INPUT
    inicialinput = crearobj("input", "", "75%", "", "", "", "")
    inicialinput.style.fontSize = "30px";
    inicialinput.style.textAlign = "center"
    inicialinput.style.padding = "20px";
    inicial.appendChild(inicialinput)
    //TETXT FAIL
    inicialtextf = crearobj("h3", "Ingrese correctamente su nombre y apellido", "", "", "", "", "")
    inicialtextf.style.color = "white";
    inicialtextf.style.display = "none"
    inicialtextf.style.fontSize = "20px";
    inicialtextf.style.textAlign = "center";
    inicial.appendChild(inicialtextf)
    //button OK
    butonok = crearobj("button", "Listo", "50%", "", "", "", "")
    butonok.style.borderRadius = "1rem";
    butonok.style.padding = "20px";
    butonok.style.margin = "30px 0 10px";
    butonok.style.backgroundColor = "#456";
    butonok.style.fontSize = "40px";
    butonok.style.color = "#fff";
    butonok.style.cursor = "pointer";
    butonok.addEventListener("click", function () {
        if (inicialinput.value.length > 5) {
            audio[0].play();
            username = inicialinput.value.toUpperCase()
            localStorage.setItem('nuserlbraille', username);
            localStorage.setItem('datalbraille', "0000");
            unitallgen()
        } else {
            audio[1].play();
            inicialtextf.style.display = "block"
            inicialinput.style.background = "#EE95C1"
        }
    }, false);
    inicial.appendChild(butonok)
    verso.appendChild(inicial)
}
function unitallgen() {
    verso.innerHTML = "";
    if (unitall != null) {
        verso.appendChild(unitall)
        return null
    }
    //SUBVERSO
    unitall = crearobj("div", "", "", "", "static", "", "")
    unitall.classList.add('unitall')
    //TITLE
    titlediv = crearobj("h2", "UNIDADES", "", "", "static", "", "")
    titlediv.style.fontSize = "30px";
    titlediv.style.color = "#fff";
    titlediv.style.padding = "20px";
    unitall.appendChild(titlediv)
    var evenactive = 0
    //USERNAME
    usernameshowdiv = crearobj("div", "", "", "", "static", "", "")
    usernameshow = crearobj("h2", "<b>USUARIO:</b> " + username, "", "", "static", "", "")
    usernameshow.classList.add('nameDiv')
    usernameshow.style = "text-align:left; color:white";
    usernameshowdiv.appendChild(usernameshow)
    unitall.appendChild(usernameshowdiv)
    //BORRAR USUARIO
    butoneraseuser = crearobj("button", "Borrar usuario", "", "", "static", "", "")
    butoneraseuser.classList.add('buttonUser');
    butoneraseuser.style.cursor = "pointer"
    butoneraseuser.addEventListener("click", function () {
        eliminaruserdiv.style.display = "block"
    }, false);
    unitall.appendChild(butoneraseuser)
    //table
    unittable = crearobj("table", "", "", "", "", "", "")
    unitall.appendChild(unittable)
    unitallfila = []
    unitallimg = []
    unitalltext = []
    for (let index = 0; index < 4; index++) {
        unitallfila[index] = crearobj("tr", "", "", "", "", "", "")
        unitallfila[index].style = "font-size:1.2vw"
        unittable.appendChild(unitallfila[index])
        unitallfila[index].style.background = 'url(assets/buttonbg.svg) no-repeat center center';
        unitallfila[index].style.backgroundSize = "100%"
        unitallfila[index].addEventListener("click", function () {
            audio[0].play();
            topicgen(index)
        }, false);
        //UNIT
        //colum1
        unitalltext[index] = crearobj("h1", unittxt[index], "", "", "", "", "")
        unitalltext[index].style = "margin-top:34px;margin-left:54px; cursor:pointer"
        unitallfila[index].appendChild(unitalltext[index])
    }
    //DIV ERRASE USER
    eliminaruserdiv = crearobj("div", "", "100%", "100%", "absolute", "0%", "0%")
    eliminaruserdiv.style.backgroundImage = "url('assets/opacity.svg')"
    eliminaruserdiv.style.backgroundSize = "100% 100%"
    eliminaruserdiv.style.display = "none"
    eliminarusercheck = crearobj("div", "", "30%", "40%", "absolute", "35%", "10%")
    eliminarusercheck.style.backgroundImage = "url('assets/eraseico.svg')"
    eliminarusercheck.style.backgroundSize = "100% 100%"
    eliminaruserdiv.appendChild(eliminarusercheck)
    eliminarusertext = crearobj("h1", "¿ELIMINAR USUARIO " + username + "?", "100%", "5%", "absolute", "", "50%")
    eliminarusertext.style.background = "red"
    eliminaruserdiv.appendChild(eliminarusertext)
    unitall.appendChild(eliminaruserdiv)
    //BTNERASE YES
    eliminaruserbutonyes = crearobj("div", "", "15%", "7%", "absolute", "43%", "60%")
    eliminaruserbutonyes.style.backgroundImage = "url('assets/buttonyes.svg')"
    eliminaruserbutonyes.style.backgroundSize = "100% 100%"
    eliminaruserbutonyes.style.cursor = "pointer"
    eliminaruserbutonyes.addEventListener("click", function () {
        audio[0].play();
        localStorage.setItem('nuserlbraille', "null");
        localStorage.setItem('datalbraille', "0000");
        newuser()
    }, false);
    eliminaruserdiv.appendChild(eliminaruserbutonyes)
    //BTNERASE NO
    eliminaruserbutonno = crearobj("div", "", "15%", "7%", "absolute", "43%", "70%")
    eliminaruserbutonno.style.backgroundImage = "url('assets/buttonno.svg')"
    eliminaruserbutonno.style.backgroundSize = "100% 100%"
    eliminaruserbutonno.style.cursor = "pointer"
    eliminaruserbutonno.addEventListener("click", function () {
        audio[1].play();
        eliminaruserdiv.style.display = "none"
    }, false);
    eliminaruserdiv.appendChild(eliminaruserbutonno)
    //LAST CONFI
    unitall.style.background = 'url(assets/backg/bgactall.jpg) no-repeat center center';
    unitall.style.backgroundSize = "100% 100%"
    verso.appendChild(unitall)
}
function topicgen(unit) {
    verso.innerHTML = "";
    if (topicview[unit] != null) {
        if (unit == 3) {
            if (avancesaved[3] < 7) {
                topicfila[unit][2].style.display = "none"
            } else {
                topicfila[unit][2].style.display = "block"
            }
        }
        if (unit == 2) {
            // topictable.innerHTML = ""
            topicfila[unit][0].style.display = "block"
            try {
                if (avancesaved[0] >= 7) {
                    topicfila[unit][1].style.display = "block"
                }
                if (avancesaved[1] >= 7) {
                    topicfila[unit][2].style.display = "block"
                }
                if (avancesaved[2] >= 7) {
                    topicfila[unit][3].style.display = "block"
                }
            } catch (error) {
                alert("error")
                topicgen(unit)
                return null
            }
        }
        verso.appendChild(topicview[unit])
        return null
    }
    var fwid = "30%"
    var fhei = "20%"
    topicview[unit] = crearobj("div", "", "100%", "100%", "relative", "", "")
    topicview[unit].style.background = "blue"
    verso.appendChild(topicview[unit])
    //TITTLE
    topictitle = crearobj("h1", unittxt[unit], "100%", "5%", "relative", "", "")
    topictitle.style.color = "white";
    topicview[unit].appendChild(topictitle)

    //IMAGEN
    topicimgdiv = crearobj("div", "", "100%", "", "relative", "-", "")
    topicimg = crearobj("img", "", "100%", "", "", "", "")
    topicimg.src = "assets/topicbanner/banner" + unit + ".png"
    topicimgdiv.appendChild(topicimg)
    topicview[unit].appendChild(topicimgdiv)
    //table
    txt = document.createElement('br');
    topicview[unit].appendChild(txt);
    topictable = crearobj("table", "", "95%", "", "relative", "1%", "")
    topicview[unit].appendChild(topictable)
    topicimg = []
    topictext = []
    let limit = topictxt[unit].length
    for (let index = 0; index < limit; index++) {
        topicfila[unit][index] = crearobj("tr", "", "100%", "", "", "", "")
        topicfila[unit][index].style = "font-size:1.2vw"
        topictable.appendChild(topicfila[unit][index])
        topicfila[unit][index].style.background = 'url(assets/buttonbg.svg) no-repeat center center';
        topicfila[unit][index].style.backgroundSize = "100% 100%"
        topictable.appendChild(topicfila[unit][index])
        topicfila[unit][index].style.border = "-1px solid #0009"
        if (unit == 2) {
            topicfila[unit][index].style.display = "none"
        }
        topicfila[unit][index].addEventListener("click", function () {
            var indice = "" + unit + "" + index
            audio[0].play();
            gototopic(indice)
        }, false);
        //topic
        //TEXT
        topictext[index] = crearobj("h1", topictxt[unit][index], "95%", "", "relative", "", "")
        topictext[index].style = "margin-top:14px;margin-left:34px; cursor:pointer"
        topicfila[unit][index].appendChild(topictext[index])
    }
    if (unit == 3 && avancesaved[3] < 7) {
        topicfila[unit][2].style.display = "none"
    }
    //////
    //BACKBUTTON
    butonback = crearobj("div", "", "15%", "7%", "absolute", "80%", "90%")
    butonback.style.backgroundImage = "url('assets/btnback.svg')"
    butonback.style.backgroundSize = "100% 100%"
    butonback.style.cursor = "pointer"
    butonback.addEventListener("click", function () {
        audio[1].play();
        unitallgen()
    }, false);
    if (unit == 2) {
        topicfila[unit][0].style.display = "block"
        if (avancesaved[0] >= 7) {
            topicfila[unit][1].style.display = "block"
        }
        if (avancesaved[1] >= 7) {
            topicfila[unit][2].style.display = "block"
        }
        if (avancesaved[2] >= 7) {
            topicfila[unit][3].style.display = "block"
        }
    }
    topicview[unit].style.background = 'url(assets/backg/topic.jpg) no-repeat center center';
    topicview[unit].style.backgroundSize = "100% 100%"
    topicview[unit].appendChild(butonback)
    return null
}
function gototopic(indice) {
    let nindice = indice[0]
    switch (nindice) {
        case "0":
            teoriagen(indice)
            break;
        case "1":
            alfanumgen(indice)
            break;
        case "2":
            activitygen(indice)
            break;
        case "3":
            quiztestgen(indice)
            break;
        default:
            break;
    }

}
function teoriagen(indice) {
    let unit = indice[0]
    let topic = indice[1]
    verso.innerHTML = "";
    if (teoria != null) {
        teoriatitle.innerHTML = topictxt[unit][topic]
        teoriaimg.src = "assets/unit1teoria/teoria" + topic + ".png"
        teoriaparrafo1.innerHTML = teoriaparrafo[topic][0]
        teoriaparrafo2.innerHTML = teoriaparrafo[topic][1]
        teoriaparrafo3.innerHTML = teoriaparrafo[topic][2]
        verso.appendChild(teoria)
        return null
    }
    //CHILD
    teoria = crearobj("div", "", "100%", "100%", "absolute", "", "")
    teoria.style.background = "red"
    //TITLE
    teoriatitle = crearobj("h1", topictxt[unit][topic], "100%", "5%", "absolute", "", "")
    teoria.appendChild(teoriatitle)
    //IMAGEN
    teoriaimgdiv = crearobj("div", "", "40%", "25%", "absolute", "30%", "10%")
    teoriaimg = crearobj("img", "", "100%", "100%", "", "", "")
    teoriaimg.src = "assets/unit1teoria/teoria" + topic + ".png"
    teoriaimgdiv.appendChild(teoriaimg)
    teoria.appendChild(teoriaimgdiv)
    //PARRAFODIV
    teoriaparrafodiv = crearobj("div", "", "90%", "50%", "absolute", "5%", "35%")
    teoria.appendChild(teoriaparrafodiv)
    //PARRAFO1
    teoriaparrafo1 = crearobj("h3", teoriaparrafo[topic][0], "90%", "", "relative", "", "")
    teoriaparrafodiv.appendChild(teoriaparrafo1)
    //PARRAFOESPAC
    teoriaparrafospac1 = crearobj("h2", "", "90%", "1%", "relative", "", "")
    teoriaparrafodiv.appendChild(teoriaparrafospac1)
    //PARRAFO2
    teoriaparrafo2 = crearobj("h3", teoriaparrafo[topic][1], "90%", "", "relative", "", "")
    teoriaparrafodiv.appendChild(teoriaparrafo2)
    //PARRAFOESPAC2
    teoriaparrafospac2 = crearobj("h2", "", "90%", "1%", "relative", "", "")
    teoriaparrafodiv.appendChild(teoriaparrafospac2)
    //PARRAFO3
    teoriaparrafo3 = crearobj("h3", teoriaparrafo[topic][2], "90%", "", "relative", "", "")
    teoriaparrafodiv.appendChild(teoriaparrafo3)
    //BTN BACK
    butonback = crearobj("div", "", "15%", "7%", "absolute", "80%", "90%")
    butonback.style.backgroundImage = "url('assets/btnback.svg')"
    butonback.style.backgroundSize = "100% 100%"
    butonback.style.cursor = "pointer"
    butonback.addEventListener("click", function () {
        audio[1].play();
        topicgen(unit)
    }, false);
    teoria.style.background = 'url(assets/backg/teoribg.jpg) no-repeat center center';
    teoria.style.backgroundSize = "100% 100%"
    teoria.appendChild(butonback)
    verso.appendChild(teoria)
}
function alfanumgen(indice) {
    let unit = indice[0]
    let topic = indice[1]
    verso.innerHTML = "";
    var fwid = "30%"
    var fhei = "20%"
    //CONDICION
    if (topic == 0) {
        if (alfanum[topic] != null) {
            alfanumtitle.innerHTML = topictxt[unit][topic]
            ficherdiv.innerHTML = "";
            var fichero = createpiece("@", "100%", "100%", "0%", "1%")
            ficherdiv.appendChild(fichero)
            verso.appendChild(alfanum[topic])
            return null
        }
        //SUBVERSO
        alfanum[topic] = crearobj("div", "", "100%", "100%", "static", "", "")
        //FICHER
        ficherdiv = crearobj("div", "", "6%", "17%", "absolute", "47%", "10%")
        alfanum[topic].appendChild(ficherdiv)
        var ficher = createpiece("@", "100%", "100%", "0%", "1%")
        ficherdiv.appendChild(ficher)
        //TITTLW
        alfanumtitle = crearobj("h1", topictxt[unit][topic], "100%", "5%", "absolute", "", "")
        alfanumtitle.style.color = "white";
        alfanum[topic].appendChild(alfanumtitle)
        //alfanum
        //TABL
        alfanumtable = crearobj("div", "", "90%", "50%", "absolute", "5%", "30%")
        alfanum[topic].appendChild(alfanumtable)
        alfanumimg = []
        //alfanum
        var fila = 0
        var tamwid = (100 / 14)
        var spacex = 0
        for (let index = 0; index < 27; index++) {
            if (index == 14) {
                fila = 50
                spacex = 0
            }
            alfanumimg[index] = crearobj("img", "", tamwid + "%", "50%", "absolute", (tamwid * spacex) + "%", fila + "%")
            spacex++
            alfanumimg[index].src = "assets/abc123/a" + index + ".svg"
            alfanumimg[index].style.cursor = "pointer"
            alfanumimg[index].addEventListener("click", function () {
                ficherdiv.innerHTML = "";
                audio[0].play();
                var fichero = createpiece("a" + [index], "100%", "100%", "0%", "1%")
                ficherdiv.appendChild(fichero)
            }, false);
            alfanumtable.appendChild(alfanumimg[index])
        }
    } else {
        if (alfanum[topic] != null) {
            ficherdivn.innerHTML = "";
            alfanumtitle.innerHTML = topictxt[unit][topic]
            var fichern = createpiece("#", "45%", "100%", "0%", "1%")
            var ficher = createpiece("@", "45%", "100%", "50%", "1%")
            ficherdivn.appendChild(fichern)
            ficherdivn.appendChild(ficher)
            verso.appendChild(alfanum[topic])
            return null
        }
        //SUBVERSO
        alfanum[topic] = crearobj("div", "", "100%", "100%", "relative", "", "")
        //FICHER
        ficherdivn = crearobj("div", "", "14%", "17%", "relative", "43%", "2%")
        alfanum[topic].appendChild(ficherdivn)
        var fichern = createpiece("#", "45%", "100%", "0%", "1%")
        var ficher = createpiece("@", "45%", "100%", "50%", "1%")
        ficherdivn.appendChild(fichern)
        ficherdivn.appendChild(ficher)
        //TITTLW
        alfanumtitle = crearobj("h1", topictxt[unit][topic], "100%", "5%", "absolute", "", "")
        alfanumtitle.style.color = "white";
        alfanum[topic].appendChild(alfanumtitle)
        //alfanum
        //TABL
        alfanumtable = crearobj("div", "", "90%", "50%", "absolute", "5%", "30%")
        alfanum[topic].appendChild(alfanumtable)
        alfanumimg = []
        //alfanum
        var fila = 0
        var tamwid = (100 / 5)
        var spacex = 0
        for (let index = 0; index < 10; index++) {
            if (index == 5) {
                fila = 50
                spacex = 0
            }
            alfanumimg[index] = crearobj("img", "", tamwid + "%", "50%", "absolute", (tamwid * spacex) + "%", fila + "%")
            spacex++
            alfanumimg[index].src = "assets/abc123/n" + index + ".svg"
            alfanumimg[index].style.cursor = "pointer"
            alfanumimg[index].addEventListener("click", function () {
                audio[0].play();
                ficherdivn.innerHTML = "";
                var fichern = createpiece("#", "45%", "100%", "0%", "1%")
                ficherdivn.appendChild(fichern)
                var fichero = createpiece("n" + [index], "45%", "100%", "50%", "1%")
                ficherdivn.appendChild(fichero)
            }, false);
            alfanumtable.appendChild(alfanumimg[index])
        }

    }

    alfanum[topic].style.background = 'url(assets/backg/backexplor.png) no-repeat center center';
    alfanum[topic].style.backgroundSize = "100% 100%"
    //BACKBUTTON
    butonback = crearobj("div", "", "15%", "7%", "absolute", "80%", "90%")
    butonback.style.backgroundImage = "url('assets/btnback.svg')"
    butonback.style.backgroundSize = "100% 100%"
    butonback.addEventListener("click", function () {
        audio[1].play();
        topicgen(unit)
    }, false);
    alfanum[topic].appendChild(butonback)
    verso.appendChild(alfanum[topic])
}
function activitygen(indice) {
    // alert("DJDFDKJK")
    let unit = indice[0]
    let topic = indice[1]
    if (avancesaved[topic] >= 10) {
        avancesaved[topic] = 10
        verso.innerHTML = "";
        congratulationsdiv = crearobj("div", "", "100%", "100%", "relative", "", "")
        avancetxt = crearobj("h1", "Felicitaciones has culminado: " + topictxt[unit][topic], "100%", "7%", "absolute", "", "10%")
        congratulationsdiv.appendChild(avancetxt)
        avancecc = crearobj("h1", "Puntaje: " + avancesaved[topic] + "/10", "100%", "7%", "absolute", "", "15%")
        congratulationsdiv.appendChild(avancecc)
        congratulationsdiv.style.backgroundImage = "url('assets/helpbg.svg')"
        congratulationsdiv.style.backgroundSize = "100% 100%"
        congratulationsimg = crearobj("div", "", "20%", "30%", "absolute", "37%", "30%")
        congratulationsimg.style.backgroundImage = "url('assets/medals/medal" + topic + ".svg')"
        congratulationsimg.style.backgroundSize = "100% 100%"
        butonclosecongratulations = crearobj("div", "", "16%", "10%", "absolute", "42%", "85%")
        butonclosecongratulations.style.backgroundImage = "url('assets/btnback.svg')"
        butonclosecongratulations.style.backgroundSize = "100% 100%"
        butonclosecongratulations.style.cursor = "pointer"
        butonclosecongratulations.addEventListener("click", function () {
            topicgen(unit)
        }, false);
        congratulationsdiv.appendChild(congratulationsimg)
        congratulationsdiv.appendChild(butonclosecongratulations)
        verso.appendChild(congratulationsdiv)
        return null

    }
    let random = Math.floor(Math.random() * 10)
    txt = dataactivity[topic][random]
    var ob = []
    let cont = 0
    let select = 0
    let correct = Math.floor(Math.random() * 4)
    verso.innerHTML = "";
    var fwid = "30%"
    var fhei = "20%"
    //SUBVERSO
    activity[topic] = crearobj("div", "", "100%", "100%", "relative", "", "")
    activity[topic].style.background = "blue"
    //TITULO
    activitytitle = crearobj("h1", topictxt[unit][topic], "100%", "5%", "relative", "", "")
    activity[topic].appendChild(activitytitle)
    //QUESTION
    activityhistorytxt = crearobj("h2", activityhistory[topic], "100%", "5%", "relative", "", "")
    activity[topic].appendChild(activityhistorytxt)
    tittleimgtable = crearobj("table", "", "100%", "15%", "relative", "", "")
    activity[topic].appendChild(tittleimgtable)
    tittleimgfila = crearobj("tr", "", "100%", "100%", "absolute", "", "")
    tittleimgtable.appendChild(tittleimgfila)
    tittleimgcolum = crearobj("td", "", "100%", "100%", "absolute", "", "")
    tittleimgfila.appendChild(tittleimgcolum)

    //formula 
    let preformula = txt.length //16
    let formula = 100 / preformula //6,25
    let fspace = formula / preformula//1,25
    //gen
    for (const char of txt) {
        ob[cont] = createpiece(char, "5%", "98%", (cont * formula) + fspace + "%", "1%")
        tittleimgcolum.appendChild(ob[cont])
        cont++
    }
    //ANSWER
    answertable = crearobj("table", "", "99%", "40%", "relative", "", "")
    answercolum = []
    answer = []
    //file1
    answerfila1 = crearobj("tr", "", "100%", "40%", "relative", "", "")
    answerfila1.style = "font-size:1.2vw"
    answertable.appendChild(answerfila1)
    answercolum[0] = crearobj("td", "", "50%", "50%", "relative", "", "")
    answercolum[0].style.background = 'url(assets/answerbg.svg) no-repeat center center';
    answercolum[0].style.backgroundSize = "100% 100%"
    answercolum[0].style.cursor = "pointer"
    answerfila1.appendChild(answercolum[0])
    answer[0] = crearobj("h1", "RESP 1", "", "", "", "", "")
    answer[0].style = "text-align: center;"
    answercolum[0].appendChild(answer[0])
    answercolum[1] = crearobj("td", "", "50%", "50%", "relative", "", "")
    answercolum[1].style.background = 'url(assets/answerbg.svg) no-repeat center center';
    answercolum[1].style.backgroundSize = "100% 100%"
    answercolum[1].style.cursor = "pointer"
    answer[1] = crearobj("h1", "RESP 2", "", "", "", "", "")
    answer[1].style = "text-align: center"
    answercolum[1].appendChild(answer[1])
    answerfila1.appendChild(answercolum[1])
    //file2
    answerfila2 = crearobj("tr", "", "100%", "40%", "relative", "", "")
    answerfila2.style = "font-size:1.2vw"
    answertable.appendChild(answerfila2)
    answercolum[2] = crearobj("td", "", "50%", "50%", "relative", "", "")
    answercolum[2].style.background = 'url(assets/answerbg.svg) no-repeat center center';
    answercolum[2].style.backgroundSize = "100% 100%"
    answercolum[2].style.cursor = "pointer"
    answerfila2.appendChild(answercolum[2])
    answer[2] = crearobj("h1", "RESP 3", "", "", "", "", "")
    answer[2].style = "text-align: center"
    answercolum[2].appendChild(answer[2])
    answercolum[3] = crearobj("td", "", "50%", "50%", "relative", "", "")
    answercolum[3].style.background = 'url(assets/answerbg.svg) no-repeat center center';
    answercolum[3].style.backgroundSize = "100% 100%"
    answercolum[3].style.cursor = "pointer"
    answerfila2.appendChild(answercolum[3])
    answer[3] = crearobj("h1", "RESP 4", "", "", "", "", "")
    answer[3].style = "text-align: center"
    answercolum[3].appendChild(answer[3])
    activity[topic].appendChild(answertable)
    //correctanswer put
    let activnumber = []
    activnumber[0] = Math.floor(Math.random() * 10)
    cont = 1
    contint = 0
    while (cont < answer.length) {
        similar = false
        activnumber[cont] = Math.floor(Math.random() * 10)
        for (let index = 0; index < cont; index++) {
            if (activnumber[cont] == activnumber[index] || activnumber[cont] == random || activnumber[index] == random) {
                similar = true
                contint++
                if (contint == 30) {
                    activitygen(indice)
                }
                console.log("int: " + contint)
                index = 99
            }
        }
        if (similar == false) {
            cont++
        }
    }
    answer[0].innerHTML = dataactivity[topic][activnumber[0]]
    answer[1].innerHTML = dataactivity[topic][activnumber[1]]
    answer[2].innerHTML = dataactivity[topic][activnumber[2]]
    answer[3].innerHTML = dataactivity[topic][activnumber[3]]
    answer[correct].innerHTML = txt
    for (let index = 0; index < answer.length; index++) {
        answercolum[index].addEventListener("click", function () {
            if (select == 0) {
                if (index == correct) {
                    if (avancesaved[topic] == 10) {
                        avancesaved[topic] = 10
                    }
                    avancesaved[topic]++
                    avance.innerHTML = "Puntaje: " + avancesaved[topic] + "/10"
                    var avancesave = ""
                    var sendsave=""

                    for (let index = 0; index < avancesaved.length; index++) {
                        if (avancesaved[index]==10) {
                            sendsave="x"
                        }else{
                            sendsave=String(avancesaved[index])
                        }
                        avancesave = avancesave + sendsave 
                    }
                    audio[2].pause();
                    audio[3].pause();
                    audio[2].play();
                    localStorage.setItem('datalbraille', avancesave);
                    correctshow.innerHTML = "Felicitaciones"
                    imgcheck.src = "assets/correcto.svg"
                } else {
                    audio[2].pause();
                    audio[3].pause();
                    audio[3].play();
                    correctshow.innerHTML = "La palabra correcta es " + txt
                    imgcheck.src = "assets/incorrecto.svg"
                }
                checkdiv.style.display = "block"
                select = 1;
            }
        }, false);
        //result
        checkdiv = crearobj("div", "", "100%", "100%", "absolute", "0%", "0%")
        checkdiv.style.backgroundImage = "url('assets/opacity.svg')"
        checkdiv.style.backgroundSize = "100% 100%"
        checkdiv.style.display = "none"
        imgcheck = crearobj("img", "", "30%", "40%", "absolute", "35%", "10%")
        imgcheck.style.cursor = "pointer"
        checkdiv.appendChild(imgcheck)
        correctshow = crearobj("h1", " ", "100%", "5%", "absolute", "", "50%")
        checkdiv.appendChild(correctshow)
        butonnext = crearobj("div", "", "15%", "7%", "absolute", "43%", "70%")
        butonnext.style.backgroundImage = "url('assets/btnnext.svg')"
        butonnext.style.backgroundSize = "100% 100%"
        butonnext.style.cursor = "pointer"
        butonnext.addEventListener("click", function () {
            audio[0].play();
            activitygen(indice)
        }, false);
        checkdiv.appendChild(butonnext)
        activity[topic].appendChild(checkdiv)
        avance = crearobj("h1", "Puntaje: " + avancesaved[topic] + "/10", "100%", "7%", "absolute", "", "90%")
        activity[topic].appendChild(avance)
        //HELPCOMP
        helpdiv = crearobj("div", "", "40%", "60%", "absolute", "10%", "20%")
        helpdiv.style.display = "none"
        helpdiv.style.backgroundImage = "url('assets/helpbg.svg')"
        helpdiv.style.backgroundSize = "100% 100%"
        helpimg = crearobj("div", "", "90%", "80%", "absolute", "5%", "5%")
        helpimg.style.backgroundImage = "url('assets/help.jpg')"
        helpimg.style.backgroundSize = "100% 100%"
        butonclose = crearobj("div", "", "16%", "10%", "absolute", "10%", "85%")
        butonclose.style.backgroundImage = "url('assets/btnclose.svg')"
        butonclose.style.backgroundSize = "100% 100%"
        butonclose.style.cursor = "pointer"
        butonclose.addEventListener("click", function () {
            helpdiv.style.display = "none"
            audio[1].play();
            select = 0
        }, false);
        helpdiv.appendChild(helpimg)
        helpdiv.appendChild(butonclose)
        activity[topic].appendChild(helpdiv)
        //BACKBUTTON AND HELP        
        butontip = crearobj("div", "", "15%", "7%", "absolute", "10%", "90%")
        butontip.style.backgroundImage = "url('assets/btnhelp.svg')"
        butontip.style.backgroundSize = "100% 100%"
        butontip.style.cursor = "pointer"
        butontip.addEventListener("click", function () {
            if (select == 0) {
                audio[0].play();
                helpdiv.style.display = "block"
                select = 1
            }
        }, false);
        activity[topic].appendChild(butontip)
        butonback = crearobj("div", "", "15%", "7%", "absolute", "80%", "90%")
        butonback.style.backgroundImage = "url('assets/btnback.svg')"
        butonback.style.backgroundSize = "100% 100%"
        butonback.style.cursor = "pointer"
        butonback.addEventListener("click", function () {
            audio[1].play();
            topicgen(unit)
        }, false);
        activity[topic].appendChild(butonback)
        activity[topic].style.background = 'url(assets/backg/gamebg' + topic + '.gif) no-repeat center center';
        activity[topic].style.backgroundSize = "100% 100%"
        verso.appendChild(activity[topic])
    }
}
function quiztestgen(indice) {
    let unit = indice[0]
    let topic = indice[1]
    verso.innerHTML = "";
    if (quiztest[topic] != null) {
        verso.appendChild(quiztest[topic])
        return null
    }
    //CHILD
    quiztest[topic] = crearobj("div", "", "100%", "100%", "absolute", "", "")
    quiztest[topic].style.background = "red"
    //TITLE
    quiztesttitle = crearobj("h1", topictxt[unit][topic], "100%", "5%", "absolute", "", "")
    quiztest[topic].appendChild(quiztesttitle)
    //QDIV
    quizdiv = crearobj("div", "", "100%", "80%", "absolute", "", "10%")
    quiztestframe = crearobj("iframe", "", "100%", "100%", "", "", "")
    quiztestframe.width = "100%"
    quiztestframe.height = "100%"
    quiztestframe.frameborder = "0"
    quiztestframe.marginheight = "0"
    quiztestframe.marginwidth = "0"
    quizdiv.appendChild(quiztestframe)
    if (topic == 0) {
        quiztestframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSd7BAeBLCs-BqUpIm4b2AIt9QKb9oynanwD2J-NYQ70iGZV5A/viewform?embedded=true"
    } else if (topic == 1) {
        quiztestframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSeuueRbNsf8sYRwHysw2lmVWLqUhrWW_wMHAQ6862dfmWRnkw/viewform?embedded=true"
    } else {
        //DIV CERTID GENERAL
        quizdiv = crearobj("div", "", "800px", "600px", "absolute", "", "10%")
        quizdiv.style.backgroundSize = "100% 100%"
        certifinamediv = crearobj("div", "", "100%", "30px", "absolute", "", "30%")
        certifiname = crearobj("p", "" + username, "", "", "absolute", "", "")
        certifiname.style = "font-size:1.2vw; display:none"
        certifinamediv.appendChild(certifiname)
        quizdiv.appendChild(certifinamediv)
       
        //DIV CERT DOWNLOAD
        certifidiv = crearobj("div", "", "600", "400", "absolute", "50%", "10%")
        certifidiv.style.backgroundImage = "url('assets/opacity.svg')"
        certifidiv.style.backgroundSize = "100% 100%"
        certifidiv.style.display = "none"
        certifitext1 = crearobj("p", "Clic derecho en el certificado y guardar imagen como", "100%", "5%", "absolute", "", "80%")
        certifitext1.style = "font-size:0.9vw"
        certifidiv.appendChild(certifitext1)
        certifitext2 = crearobj("p", "Mantén presionado con el dedo en el certificado y guardar imagen como", "100%", "5%", "absolute", "", "90%")
        certifitext2.style = "font-size:0.9vw"
        certifidiv.appendChild(certifitext2)
        quiztest[topic].appendChild(certifidiv)
        //BTN cerrar
        certifibutonclose = crearobj("div", "", "15%", "7%", "absolute", "43%", "95%")
        certifibutonclose.style.backgroundImage = "url('assets/btnclose.svg')"
        certifibutonclose.style.backgroundSize = "100% 100%"
        certifibutonclose.style.cursor = "pointer"
        certifibutonclose.addEventListener("click", function () {
            audio[1].play();
            certifidiv.style.display = "none"
        }, false);
        certifidiv.appendChild(certifibutonclose)
        //BTN GENERT
        butonsend = crearobj("div", "", "15%", "7%", "absolute", "80%", "70%")
        butonsend.style.backgroundImage = "url('assets/buttonsendgen.svg')"
        butonsend.style.backgroundSize = "100% 100%"
        butonsend.style.cursor = "pointer"
        butonsend.addEventListener("click", function () {
            genser = Math.floor(Math.random() * 2)
            certifiname.style = "display:block"
            quizdiv.style.backgroundImage = "url('assets/certif/CERTIFICADO" + genser + ".PNG')"
            topdf(quizdiv, certifidiv,certifitext1,certifitext2,certifibutonclose)
            certifidiv.style.display = "block"
        }, false);
        quiztest[topic].appendChild(butonsend)

    }


    quiztest[topic].appendChild(quizdiv)
    //BNT BACK
    butonback = crearobj("div", "", "15%", "7%", "absolute", "80%", "90%")
    butonback.style.backgroundImage = "url('assets/btnback.svg')"
    butonback.style.backgroundSize = "100% 100%"
    butonback.style.cursor = "pointer"
    butonback.addEventListener("click", function () {
        audio[1].play();
        topicgen(unit)
    }, false);
    quiztest[topic].appendChild(butonback)
    quiztest[topic].style.background = 'url(assets/backg/test.jpg) no-repeat center center';
    quiztest[topic].style.backgroundSize = "100% 100%"
    verso.appendChild(quiztest[topic])
}
function createpiece(letter, wid, hei, lef, top) {
    piece = [5]
    captian = ""
    letter = letter.toLowerCase()
    switch (letter) {
        case "@":
            captian = "000000"
            break;
        case "a":
        case "a0":
            captian = "100000"
            break;
        case "b":
        case "a1":
            captian = "101000"
            break;
        case "c":
        case "a2":
            captian = "110000"
            break;
        case "d":
        case "a3":
            captian = "110100"
            break;
        case "e":
        case "a4":
            captian = "100100"
            break;
        case "f":
        case "a5":
            captian = "111000"
            break;
        case "g":
        case "a6":
            captian = "111100"
            break;
        case "h":
        case "a7":
            captian = "101100"
            break;
        case "i":
        case "a8":
            captian = "011000"
            break;
        case "j":
        case "a9":
            captian = "011100"
            break;
        case "k":
        case "a10":
            captian = "100010"
            break;
        case "l":
        case "a11":
            captian = "101010"
            break;
        case "m":
        case "a12":
            captian = "110010"
            break;
        case "n":
        case "a13":
            captian = "110110"
            break;
        case "ñ":
        case "a14":
            captian = "111101"
            break;
        case "o":
        case "a15":
            captian = "100110"
            break;
        case "p":
        case "a16":
            captian = "111010"
            break;
        case "q":
        case "a17":
            captian = "111110"
            break;
        case "r":
        case "a18":
            captian = "101110"
            break;
        case "s":
        case "a19":
            captian = "011010"
            break;
        case "t":
        case "a20":
            captian = "011110"
            break;
        case "u":
        case "a21":
            captian = "100011"
            break;
        case "v":
        case "a22":
            captian = "101011"
            break;
        case "w":
        case "a23":
            captian = "011101"
            break;
        case "x":
        case "a24":
            captian = "110011"
            break;
        case "y":
        case "a25":
            captian = "110111"
            break;
        case "z":
        case "a26":
            captian = "100111"
            break;
        default:
            break;
        case "#":
            captian = "010111"
            break;
        case "0":
        case "n0":
            captian = "011100"
            break;
        case "1":
        case "n1":
            captian = "100000"
            break;
        case "2":
        case "n2":
            captian = "101000"
            break;
        case "3":
        case "n3":
            captian = "110000"
            break;
        case "4":
        case "n4":
            captian = "110100"
            break;
        case "5":
        case "n5":
            captian = "100100"
            break;
        case "6":
        case "n6":
            captian = "111000"
            break;
        case "7":
        case "n7":
            captian = "111100"
            break;
        case "8":
        case "n8":
            captian = "101100"
            break;
        case "9":
        case "n9":
            captian = "011000"
            break;
    }
    cont = 0
    for (const cap of captian) {
        if (cap == "0") {
            piece[cont] = "pieceoff"
        } else {
            piece[cont] = "pieceon"
        }
        cont++
    }
    tablepiece = crearobj("table", "", wid, hei, "absolute", lef, top)


    //file1
    file1piece = crearobj("tr", "", "10%", "10%", "", "", "")
    tablepiece.style.backgroundImage = "url(assets/wood.svg)"
    tablepiece.style.backgroundSize = "100% 100%"
    tablepiece.appendChild(file1piece)
    file1campo1piece = crearobj("td", "", "5%", "5%", "", "", "")
    file1piece.appendChild(file1campo1piece)
    file1campo1piece.style.backgroundImage = "url(assets/" + piece[0] + ".svg)"
    file1campo1piece.style.backgroundSize = "100% 100%"
    file1campo2piece = crearobj("td", "", "5%", "5%", "", "", "")
    file1campo2piece.style.backgroundImage = "url(assets/" + piece[1] + ".svg)"
    file1campo2piece.style.backgroundSize = "100% 100%"
    file1piece.appendChild(file1campo2piece)
    //file2
    file2piece = crearobj("tr", "", "10%", "10%", "", "", "")
    tablepiece.style.backgroundImage = "url(assets/wood.svg)"
    tablepiece.style.backgroundSize = "100% 100%"
    tablepiece.appendChild(file2piece)
    file2campo1piece = crearobj("td", "", "5%", "5%", "", "", "")
    file2piece.appendChild(file2campo1piece)
    file2campo1piece.style.backgroundImage = "url(assets/" + piece[2] + ".svg)"
    file2campo1piece.style.backgroundSize = "100% 100%"
    file2campo2piece = crearobj("td", "", "5%", "5%", "", "", "")
    file2campo2piece.style.backgroundImage = "url(assets/" + piece[3] + ".svg)"
    file2campo2piece.style.backgroundSize = "100% 100%"
    file2piece.appendChild(file2campo2piece)
    //file3
    file3piece = crearobj("tr", "", "10%", "10%", "", "", "")
    tablepiece.style.backgroundImage = "url(assets/wood.svg)"
    tablepiece.style.backgroundSize = "100% 100%"
    tablepiece.appendChild(file3piece)
    file3campo1piece = crearobj("td", "", "5%", "5%", "", "", "")
    file3piece.appendChild(file3campo1piece)
    file3campo1piece.style.backgroundImage = "url(assets/" + piece[4] + ".svg)"
    file3campo1piece.style.backgroundSize = "100% 100%"
    file3campo2piece = crearobj("td", "", "5%", "5%", "", "", "")
    file3campo2piece.style.backgroundImage = "url(assets/" + piece[5] + ".svg)"
    file3campo2piece.style.backgroundSize = "100% 100%"
    file3piece.appendChild(file3campo2piece)


    return tablepiece
}
function crearobj(type, txt, wid, hei, position, lef, topi) {
    obj = document.createElement(type)
    obj.innerHTML = txt
    obj.style.position = position;
    obj.style.width = wid
    obj.style.left = lef
    obj.style.top = topi
    obj.style.height = hei
    return obj;
}
function topdf(view, dad,text1,text2,btnclose) {
    html2canvas(view).then(function (canvas) {
        setTimeout(function(){
        },2500);
        canvas.style.position = "absolute"
        canvas.style = "width:100%"
        dad.innerHTML=""
        dad.appendChild(canvas)
        dad.appendChild(text1)
        dad.appendChild(text2)
        dad.appendChild(btnclose)

    });
}