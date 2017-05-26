var stations,
    nomStations = [],
    stationsData = {},
    info = [];

$(document).ready(function(){  
    initMap();
    loadStation();
});

function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.4991503, lng: -73.592779},
        zoom: 13
    });
}

// Fonction qui change les coordonnées de la map dependamment des choix dans l'input
function updateMap(infoStation) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: infoStation.la, lng: infoStation.lo},
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: {lat: infoStation.la, lng: infoStation.lo},
        map: map,
    });
}

// fonction qui cree une station
function createStation(infoStation) {
    return stations = {
        "id": infoStation.n,                                    // id
        "n": infoStation.s,                                      // nom
        "Vd": infoStation.ba,                                    // Vélos disponibles
        "Bd": infoStation.da,                                    // Bornes disponibles
        "Bl": infoStation.b === true ? "oui" : "non",            // Bloquée
        "Sus": infoStation.su === true ? "oui" : "non",          // Suspendue
        "Hs": infoStation.m === true ? "oui" : "non",            // Hors service
        "Vi": infoStation.bx,                                    // Vélos indisponibles
        "Bi": infoStation.dx,                                    // Bornes indisponibles
        "la": infoStation.la,                                    // latitude de la station 
        "lo": infoStation.lo,                                    // longitude de la station
    };
}

// fonction pour charger les données de stations
function loadStation() {  
    $.getJSON('https://secure.bixi.com/data/stations.json')
        .done(function (response) {
            console.log("second succes");
            stations = response.stations;

            stations.forEach(function (stat) {

            }, this);

            stations.forEach(function (station) {
                stationsData[station.s] = createStation(station);       
            }, this);
            autoComp(stationsData);
            generateDataTable(stationsData);
        })
        .fail(function () { alert("error"); })
        .always(function () { console.log("finished"); });
}

// fonction pour generer la liste des stations
function generateDataTable(infStat) {
    for (var i in infStat) {
        info.push([
            infStat[i].id,
            infStat[i].n,
            infStat[i].Vd,
            infStat[i].Bd,
            infStat[i].Bl,
            infStat[i].Sus
        ]);
    }

    $('#tableauStation').DataTable({
        data: info,
        columns: [
            { title: "Id" },
            { title: "Nom Station" },
            { title: "Vélos disponibles" },
            { title: "Bornes disponibles" },
            { title: "État bloqué" },
            { title: "État suspendu" }
        ]
    });
}

// Fonction d'autocomplete
function autoComp(infoStation) {
    $("#saisie").autocomplete({
        source: function (request, response) {
            var results = $.ui.autocomplete.filter(Object.keys(infoStation), request.term);
            response(results.slice(0, 20));
        },
        select: function (event, ui) {
            changeDom(infoStation[ui.item.value]);
            updateMap(infoStation[ui.item.value]);
            changeHtml(infoStation[ui.item.value]);
        }
    });
}

// Fonction qui change les informations de DOM
function changeDom(infoStation) {
    $("#selection").html(infoStation.n);
    $("#Is").html(infoStation.id);
    $("#Vd").html(infoStation.Vd);
    $("#Bl").html(infoStation.Bl);
    $("#Bd").html(infoStation.Bd);
    $("#Sus").html(infoStation.Sus);
    $("#Vi").html(infoStation.Vi);
    $("#Hs").html(infoStation.Hs);
    $("#Bi").html(infoStation.Bi);
}

// Fonction qui change la couleur des element de DOM dependamment de leur valeur
function changeHtml(infoStation){
    infoStation.Bl === "oui" ? $("#Bl").css({"background-color":"#EE634C"}) : $("#Bl").css({"background-color":"#27ae60"});
    infoStation.Sus === "oui"? $("#Sus").css({"background-color":"#EE634C"}) : $("#Sus").css({"background-color":"#27ae60"});
    infoStation.Hs === "oui"? $("#Hs").css({"background-color":"#EE634C"}) : $("#Hs").css({"background-color":"#27ae60"});
    infoStation.Vd === 0 ? $("#Vd").css({"background-color":"##EE634C"}) : $("#Vd").css({"background-color":"#27ae60"});
    infoStation.Bd === 0 ? $("#Bd").css({"background-color":"#EE634C"}) : $("#Bd").css({"background-color":"#27ae60"});
}



