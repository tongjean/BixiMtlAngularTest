"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<!---------------------------- Début bar de menu ---------------------------->\n
            <div class=\"menu\">\n
                <div class=\"contenu\">\n
                    <ul>\n
                        <li id=\"titre\" class=\"font1\">\n
                            <a href=\"http://localhost:5000/\">Vélo Montréal</a>\n
                        </li>\n
                        <li id=\"accueil\" class=\"font2\">\n
                            <a href=\"http://localhost:5000/\" class=\"active\">Accueil</a>\n
                        </li>\n
                        <li id=\"globe\">\n
                            <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n
                        </li>\n
                    </ul>\n
                </div>\n
            </div>\n
            <!---------------------------- Fin bar de menu ---------------------------->\n\n

            <!---------------------------- Début partie contenu ---------------------------->\n
                <div class=\"contenu\">\n
            <!---------------------------- Début bar de navigation ---------------------------->\n
                    <ul class=\"nav nav-tabs\">\n
                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#carteDesStations\">Carte des stations</a></li>\n
                        <li><a data-toggle=\"tab\" href=\"#listeDesStations\">Liste des stations</a></li>\n
                    </ul>\n
            <!---------------------------- Fin bar de navigation ---------------------------->\n
            <!---------------------------- Début content ---------------------------->\n
                    <div class=\"tab-content\"> \n
                        <!-- tab qui affiche la recherche des stations et la googleMap -->\n
                        <div id=\"carteDesStations\" class=\"tab-pane fade in active\">\n
                            <div id=\"information\">\n
                                <div id=\"recherche\">\n
                                    <input id=\"saisie\" type=\"text\" name=\"saisie\" autocomplete=\"on\" placeholder=\"ex: du Mont-Royal / du Parc\">\n
                                    <p id=\"localisation\" class=\"bleu\">Localisation:</p>\n
                                    <p id=\"selection\">Aucune sélection</p>\n
                                </div>\n
                                <div id=\"etatStation\">\n
                                    <p class=\"bleu\">Etat de la station velo</p>\n
                                    <!-- div qui affiche le tableau d\'etat de la station -->\n
                                    <div class=\"table\">\n
                                        <table class=\"table-striped\">\n
                                            <tbody>\n
                                                <tr>\n
                                                    <td class=\"EG\">ID station</td>\n
                                                    <td class=\"ED\" id=\"Is\">-</td>\n
                                                    <td class=\"gauche\">Vélos disponibles</td>\n
                                                    <td class=\"droite\" id=\"Vd\">-</td>\n
                                                </tr>\n
                                                <tr>\n
                                                    <td class=\"EG\">Bloquée</td>\n
                                                    <td class=\"ED\" id=\"Bl\">-</td>\n
                                                    <td class=\"gauche\">Bornes disponibles</td>\n
                                                    <td class=\"droite\" id=\"Bd\">-</td>\n
                                                </tr>\n
                                                <tr>\n
                                                    <td class=\"EG\">Suspendue</td>\n
                                                    <td class=\"ED\" id=\"Sus\">-</td>\n
                                                    <td class=\"gauche\">Vélos indisponibles</td>\n
                                                    <td class=\"droite\" id=\"Vi\">-</td>\n
                                                </tr>\n
                                                <tr>\n
                                                    <td class=\"EG\">Hors service</td>\n
                                                    <td class=\"ED\" id=\"Hs\">-</td>\n
                                                    <td class=\"gauche\">Bornes indisponbiles</td>\n
                                                    <td class=\"droite\" id=\"Bi\">-</td>\n
                                                </tr>\n
                                            </tbody>\n
                                        </table>\n
                                    </div>\n
                                </div>\n
                            </div>\n
                            <!---------------------------- Google map API ---------------------------->\n
                            <div id=\"map\"></div>\n
                            <!---------------------------- Google map API ---------------------------->\n
                        </div>\n
                        <!-- tab qui affiche la liste des stations -->\n
                        <div id=\"listeDesStations\" class=\"tab-pane fade\">\n
                            <!-- div qui affiche la liste des stations -->\n
                            <p id=\"etat\">État de toutes les stations de vélos</p>\n
                            <table id=\"tableauStation\" class=\'display\'></table>\n
                        </div>\n
                    </div>\n
                </div>\n
            <!---------------------------- Fin content ---------------------------->\n
            <!---------------------------- Fin partie contenu ---------------------------->\n",
            styleUrls: []
        }),
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map