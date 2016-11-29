
(function () { 
    var app, deps;
    deps = ['treeGrid'];
app = angular.module('treeGridTest', deps);
app.controller('treeGridController', function ($scope, $timeout, $http, $log) {
        var tree;
var rawTreeData = [

{"Site Name": "Kanton Z�rich","ParentId": null, "MDM ID": 1471346, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "GESUNDHEITSDIREKTION ZH","ParentId": 1471346, "MDM ID": 100022609, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Baudirektion","ParentId": 1471346, "MDM ID": 100084536, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "BAUDIREKTION KT ZURICH","ParentId": 100084536, "MDM ID": 8039918, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Urdorf", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Hochschule der K�nste","ParentId": 1471346, "MDM ID": 100203863, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�RCHER HOCHSCHULE DER K�NSTE","ParentId": 100203863, "MDM ID": 100200223, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Hochschule der K�nste (ZHdK)","ParentId": 100203863, "MDM ID": 781106, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "MBZ MITTELSCHUL- UND BERUFSBILDUNGSAMT Z�RICH","ParentId": 1471346, "MDM ID": 100677213, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "ZUERICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "FINANZDIREKTION","ParentId": 1471346, "MDM ID": 1183053, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Verkehrsbetriebe der Stadt Z�rich (VBZ)","ParentId": 1471346, "MDM ID": 1285301, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 1471346, "MDM ID": 1315164, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 1315164, "MDM ID": 100681197, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 1315164, "MDM ID": 1524819, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ZKB Z�RCHER KANTONALBANK","ParentId": 1524819, "MDM ID": 100582578, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank �sterreich AG","ParentId": 1315164, "MDM ID": 1561635, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Salzburg", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 1315164, "MDM ID": 1819952, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Zurich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Swisscanto Holding AG","ParentId": 1315164, "MDM ID": 3365954, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO ASSET MANAGEMENT AG","ParentId": 3365954, "MDM ID": 1451267, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO FUNDS CENTRE LIMITED","ParentId": 3365954, "MDM ID": 1579319, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "LONDON", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Swisscanto Fondsleitung AG","ParentId": 3365954, "MDM ID": 5181758, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Swisscanto Fondsleitung AG","ParentId": 5181758, "MDM ID": 5502517, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO ASSET MANAGEMENT AG","ParentId": 5502517, "MDM ID": 4792393, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO ASSET MANAGEMENT AG","ParentId": 5181758, "MDM ID": 9230005, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "R�mlang", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Swisscanto Anlagestiftung","ParentId": 3365954, "MDM ID": 63220, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Swisscanto Anlagestiftung","ParentId": 63220, "MDM ID": 100710939, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Schwyz", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "PREVISTA ANLAGENSTIFTUNG","ParentId": 100710939, "MDM ID": 1208219, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Zurich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Balfidor Holding AG","ParentId": 1315164, "MDM ID": 4925418, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Basel", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Switzerland Zurcher Kantonalbank Beijing Office","ParentId": 1315164, "MDM ID": 5495312, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "BEIJING", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Elektrizit�tswerke des Kantons Z�rich (EKZ)","ParentId": 1471346, "MDM ID": 1450129, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Elektrizit�tswerke des Kantons Z�rich (EKZ)","ParentId": 1450129, "MDM ID": 1384487, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Dietikon", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonsspital Winterthur","ParentId": 1471346, "MDM ID": 1487790, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KANTONSSPITAL WINTERTHUR","ParentId": 1487790, "MDM ID": 100460423, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "R�mlang", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Gesundheitsdirektion","ParentId": 1471346, "MDM ID": 1728533, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonale Zentralw�scherei Z�rich","ParentId": 1728533, "MDM ID": 1522846, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Psychiatrische Universit�tsklinik Z�rich","ParentId": 1728533, "MDM ID": 1561413, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "IPW Klinik Schlosstal","ParentId": 1728533, "MDM ID": 1654971, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KINDER- UND JUGENDPSYCHIATRISCHER DIENST","ParentId": 1728533, "MDM ID": 5059323, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonales Laboratorium","ParentId": 1728533, "MDM ID": 5349626, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Gemeindeverwaltung Regensdorf","ParentId": 1471346, "MDM ID": 1775860, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Regensdorf", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "EWZ","ParentId": 1471346, "MDM ID": 1795105, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "HARARE", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Direktion der Justiz und des Innern","ParentId": 1471346, "MDM ID": 187307, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Generalsekretariat der Direktion der Justiz und des Innern","ParentId": 187307, "MDM ID": 223536, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Geb�udeversicherung Kanton Z�rich","ParentId": 223536, "MDM ID": 1598634, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KANTON ZURICH","ParentId": 1598634, "MDM ID": 8547947, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "DIREKTION DER JUSTITZ UND DES INNEREN","ParentId": 187307, "MDM ID": 2456196, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Statistisches Amt des Kantons Z�rich","ParentId": 187307, "MDM ID": 5534272, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Strafverfolgung Erwachsener","ParentId": 187307, "MDM ID": 5534273, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Stadt Z�rich","ParentId": 1471346, "MDM ID": 2274117, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ","ParentId": 2274117, "MDM ID": 100787297, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Zuerich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "TIEFBAUAMT DER STADT Z�RICH","ParentId": 2274117, "MDM ID": 1097005, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Elektrizit�tswerk der Stadt Z�rich","ParentId": 2274117, "MDM ID": 1136630, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Steueramt der Stadt Z�rich","ParentId": 2274117, "MDM ID": 1203577, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT Z�RICH","ParentId": 2274117, "MDM ID": 1248339, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 2274117, "MDM ID": 1266705, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ ORGANISATION UND INFORMATIK","ParentId": 2274117, "MDM ID": 1341030, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "HOCHBAUAMT DER STADT Z�RICH","ParentId": 2274117, "MDM ID": 1503467, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Energie 360 Grad AG","ParentId": 2274117, "MDM ID": 1598635, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ERDGAS OSTSCHWEIZ AG","ParentId": 1598635, "MDM ID": 3444567, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Schlieren", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Erdgas Ostschweiz AG","ParentId": 1598635, "MDM ID": 686072, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Wasserversorgung Z�rich","ParentId": 2274117, "MDM ID": 1819217, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT Z�RICH ORGANISATION UND INFORMATIK","ParentId": 2274117, "MDM ID": 2275141, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Sihltal Z�rich Uetliberg Bahn SZU AG","ParentId": 2274117, "MDM ID": 2782472, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SIHLTAL-ZUERICH-UETLIBERGBAHN","ParentId": 2782472, "MDM ID": 5837600, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Ns on Conversion", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ Organisation und Informatik","ParentId": 2274117, "MDM ID": 4284500, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Finanzverwaltung der Stadt Z�rich","ParentId": 2274117, "MDM ID": 5534139, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Organisation und Informatik der Stadt Z�rich (OIZ)","ParentId": 2274117, "MDM ID": 785202, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ ORGANISATION UND INFORMATIK DER STADT ZUERICH","ParentId": 785202, "MDM ID": 100333318, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ORGANISATION UND INFORMATIK DER STADT ZURICH","ParentId": 785202, "MDM ID": 1006053, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Zurich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT Z�RICH OIZ","ParentId": 785202, "MDM ID": 1359812, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "GORE, W L & ASSOCIATES","ParentId": 785202, "MDM ID": 1598345, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "CHANDLER", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - ORGANISATION UND INFORMATIK DER STADT Z�RICH","ParentId": 785202, "MDM ID": 8047208, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 785202, "MDM ID": 9404237, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ORGANISATION UND INFORMATIK DER STA","ParentId": 785202, "MDM ID": 9765317, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Sportamt der Stadt Z�rich","ParentId": 2274117, "MDM ID": 7997140, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Zurich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT ZURICH TIEFBAUAMT","ParentId": 2274117, "MDM ID": 8041123, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Urdorf", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - ORGANISATION UND INFORMATIK DER STADT Z�RICH","ParentId": 2274117, "MDM ID": 8046760, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 2274117, "MDM ID": 8478664, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT Z�RICH, ORGANISATION UND INFORMATIK","ParentId": 2274117, "MDM ID": 9068578, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Sozialdepartement Stadt Z�rich","ParentId": 2274117, "MDM ID": 9396327, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Bildungsdirektion","ParentId": 1471346, "MDM ID": 248654, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Amt f�r Jugend und Berufsberatung","ParentId": 248654, "MDM ID": 1575712, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KZU Kantonsschule Z�rcher Unterland","ParentId": 248654, "MDM ID": 5142099, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "B�lach", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Allgemeine Berufsschule Z�rich","ParentId": 248654, "MDM ID": 5181276, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KANTONALES STEUERAMT Z�RICH","ParentId": 1471346, "MDM ID": 2839790, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Volkswirtschaftsdirektion","ParentId": 1471346, "MDM ID": 5290281, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Verkehrsverbund ZVV","ParentId": 5290281, "MDM ID": 4909194, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADTVERWALTUNG WINTERTHUR","ParentId": 1471346, "MDM ID": 5666251, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Stadtverwaltung Winterthur Departement Finanzen","ParentId": 5666251, "MDM ID": 1889241, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT WINTERTHUR IMMOBILIEN","ParentId": 5666251, "MDM ID": 9466358, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT WINTERTHUR","ParentId": 9466358, "MDM ID": 8334190, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Stadtverwaltung Winterthur","ParentId": 5666251, "MDM ID": 9913807, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Stadtwerk Winterthur","ParentId": 9913807, "MDM ID": 4537385, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Finanzamt der Stadt Winterthur","ParentId": 9913807, "MDM ID": 9914397, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 1471346, "MDM ID": 5677315, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Baden-Dattwil", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�t Z�rich","ParentId": 1471346, "MDM ID": 6101802, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSITY OF ZURICH","ParentId": 6101802, "MDM ID": 100365708, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Zurich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�t Z�rich","ParentId": 6101802, "MDM ID": 100461721, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 6101802, "MDM ID": 1128706, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 6101802, "MDM ID": 1355755, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�TSSPITAL Z�RICH DEPARTEMENT FRAUENHEILKUNDE","ParentId": 6101802, "MDM ID": 1401891, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�tsspital Z�rich","ParentId": 6101802, "MDM ID": 1490886, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSITATSSPITAL ZURICH","ParentId": 1490886, "MDM ID": 100442203, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�TSSPITAL Z�RICH","ParentId": 1490886, "MDM ID": 100591046, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�TSSPITAL Z�RICH","ParentId": 1490886, "MDM ID": 1131134, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�ts Spital Z�rich","ParentId": 1490886, "MDM ID": 4769394, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSITATSSPITAL ZURICH","ParentId": 1490886, "MDM ID": 9977438, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSITY HOSPITAL ZURICH","ParentId": 6101802, "MDM ID": 1618646, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIV OF ZURICH","ParentId": 6101802, "MDM ID": 1666441, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT ZURICH","ParentId": 6101802, "MDM ID": 5844238, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Urdorf", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�t Z�rich","ParentId": 6101802, "MDM ID": 6444252, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�t Z�rich","ParentId": 6101802, "MDM ID": 8443652, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�t Z�rich","ParentId": 6101802, "MDM ID": 8465147, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�t Z�rich","ParentId": 6101802, "MDM ID": 9301590, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 6101802, "MDM ID": 9302156, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 9302156, "MDM ID": 1803362, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�t Z�rich","ParentId": 9302156, "MDM ID": 9752103, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonsrat w�hrend des Ratssitzungen","ParentId": 1471346, "MDM ID": 6119434, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Zuerich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Sicherheitsdirektion","ParentId": 1471346, "MDM ID": 64527, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Amt f�r Milit�r und Zivilschutz","ParentId": 64527, "MDM ID": 1379577, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonspolizei Z�rich","ParentId": 64527, "MDM ID": 2854637, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonspolizei Z�rich","ParentId": 2854637, "MDM ID": 100754161, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich-Flughafen", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KAPO ZH","ParentId": 100754161, "MDM ID": 100168090, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Migrationsamt des Kantons Z�rich","ParentId": 64527, "MDM ID": 5685228, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonales Sozialamt","ParentId": 64527, "MDM ID": 8469559, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Strassenverkehrsamt des Kantons Z�rich","ParentId": 64527, "MDM ID": 874180, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SOZIALVERSICHERUNGS-ANSTALT KANTON Z�RICH","ParentId": 1471346, "MDM ID": 747889, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KANTON Z�RICH","ParentId": 1471346, "MDM ID": 776995, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Asyl-Organisation Z�rich (AOZ)","ParentId": 1471346, "MDM ID": 8351737, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Molekulare Krebsforschung der Universit�t Z�rich","ParentId": 1471346, "MDM ID": 8520820, "Site ID": "NA", "Account Type": "Master Account Profile", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Verwaltungsgericht","ParentId": 1471346, "MDM ID": 9272774, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Baudirektion Kanton Z�rich","ParentId": 1471346, "MDM ID": 9407679, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Hochschule f�r Angewandte Wissenschaften (ZHAW)","ParentId": 1471346, "MDM ID": 9455547, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Hochschule Winterthur (ZHW)","ParentId": 9455547, "MDM ID": 1153686, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Hochschule f�r Angewandte Wissenschaften (ZHAW)","ParentId": 9455547, "MDM ID": 9455590, "Site ID": "NA", "Account Type": "Hierarchy Node", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "GESUNDHEITSDIREKTION ZH","ParentId": 100022609, "MDM ID": "NA", "Site ID": 28080464, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "BAUDIREKTION KT ZURICH","ParentId": 8039918, "MDM ID": "NA", "Site ID": 15214305, "Account Type": "Location", "Billing City": "UROORF", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�RCHER HOCHSCHULE DER K�NSTE","ParentId": 100200223, "MDM ID": "NA", "Site ID": 29998013, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "MBZ MITTELSCHUL- UND BERUFSBILDUNGSAMT Z�RICH","ParentId": 100677213, "MDM ID": "NA", "Site ID": 1003899399, "Account Type": "Location", "Billing City": "", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonales Steueramt Zurich","ParentId": 1183053, "MDM ID": "NA", "Site ID": 4066967, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "VERKEHRSBETRIEBE Z�RICH VBZ","ParentId": 1285301, "MDM ID": "NA", "Site ID": 1003807997, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Verkehrsbetriebe Zurich","ParentId": 1285301, "MDM ID": "NA", "Site ID": 4266581, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 1315164, "MDM ID": "NA", "Site ID": 3987610, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ZUCHER KANTONALBANK","ParentId": 1315164, "MDM ID": "NA", "Site ID": 13649330, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�RCHER KANTONALBANK","ParentId": 1315164, "MDM ID": "NA", "Site ID": 6674776, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 100681197, "MDM ID": "NA", "Site ID": 1003901008, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�RCHER KANTONALBANK","ParentId": 1524819, "MDM ID": "NA", "Site ID": 15149285, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ZUERCHER KANTONALBANK","ParentId": 1524819, "MDM ID": "NA", "Site ID": 4301698, "Account Type": "Location", "Billing City": "ZURICH-MULLIGEN", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "Z�RCHER KANTONALBANK","ParentId": 1524819, "MDM ID": "NA", "Site ID": 13474860, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ZKB Z�rcher Kantonalbank","ParentId": 100582578, "MDM ID": "NA", "Site ID": 1003879727, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "PRIVATINVEST BANK AG","ParentId": 1561635, "MDM ID": "NA", "Site ID": 12633707, "Account Type": "Location", "Billing City": "SALZBURG", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ZURCHER KANTONALBANK","ParentId": 1819952, "MDM ID": "NA", "Site ID": 4341673, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO ASSET MGMT. AG","ParentId": 1451267, "MDM ID": "NA", "Site ID": 7388698, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Swisscanto Asset Management AG","ParentId": 1451267, "MDM ID": "NA", "Site ID": 4633435, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "Swisscanto Funds Centre Ltd","ParentId": 1579319, "MDM ID": "NA", "Site ID": 1003879927, "Account Type": "Location", "Billing City": "LONDON", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO FUNDS CENTRE LTD","ParentId": 1579319, "MDM ID": "NA", "Site ID": 12549389, "Account Type": "Location", "Billing City": "", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Swisscanto Asset Management AG","ParentId": 4792393, "MDM ID": "NA", "Site ID": 7881594, "Account Type": "Location", "Billing City": "Z�RICH-ALTST�TTEN", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO ASSET MANAGEMENT AG","ParentId": 9230005, "MDM ID": "NA", "Site ID": 25879101, "Account Type": "Location", "Billing City": "R�MLANG", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "SWISSCANTO ANLAGESTIFTUNG","ParentId": 63220, "MDM ID": "NA", "Site ID": 14983755, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "PREVISTA ANLAGENSTIFTUNG","ParentId": 1208219, "MDM ID": "NA", "Site ID": 4322115, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ELEKTRIZITAETSWERKE DES KANTONS ZUERICH","ParentId": 1384487, "MDM ID": "NA", "Site ID": 13490497, "Account Type": "Location", "Billing City": "DIETIKON", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonsspital Winterthur","ParentId": 1487790, "MDM ID": "NA", "Site ID": 6733766, "Account Type": "Location", "Billing City": "WINTERTHUR", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "Kantonsspital Winterthur (e-shelter)","ParentId": 100460423, "MDM ID": "NA", "Site ID": 1003851642, "Account Type": "Location", "Billing City": "R�mlang", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "PSYCHIATRISCHE UNIVERSIT�TSKLINIK Z�RICH","ParentId": 1561413, "MDM ID": "NA", "Site ID": 12594454, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "IPW Integrierte Psychiatrie Winterthur","ParentId": 1654971, "MDM ID": "NA", "Site ID": 5008324, "Account Type": "Location", "Billing City": "WINTERTHUR", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "KANTONALES LABOR ZURICH","ParentId": 5349626, "MDM ID": "NA", "Site ID": 14965830, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KANTON ZURICH","ParentId": 8547947, "MDM ID": "NA", "Site ID": 15857284, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "DIREKTION DER JUSTITZ UND DES INNEREN","ParentId": 2456196, "MDM ID": "NA", "Site ID": 6648784, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT ZUERICH ORGANISATION UND INFORMATIK","ParentId": 2274117, "MDM ID": "NA", "Site ID": 29778513, "Account Type": "Location", "Billing City": "ZUERICH", "Site Visibility": "Restricted", "MUP Profile": "Yes"},
{"Site Name": "OIZ - ORGANISATION UND INFORMATIK DER STADT ZURICH","ParentId": 2274117, "MDM ID": "NA", "Site ID": 25758161, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "Tiefbauamt der Stadt Z�rich","ParentId": 1097005, "MDM ID": "NA", "Site ID": 6077846, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Geomatik + Vermessung","ParentId": 1097005, "MDM ID": "NA", "Site ID": 3623133, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "Tiefbau- und Entsorgungsdepartement der Stadt Z�rich","ParentId": 1097005, "MDM ID": "NA", "Site ID": 3636744, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Tiefbau- und Entsorgungs-","ParentId": 1097005, "MDM ID": "NA", "Site ID": 5393103, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Elektrizit�tswerk der Stadt Z�rich (EWZ)","ParentId": 1136630, "MDM ID": "NA", "Site ID": 4131628, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "*DONOTUSE*ELEKTRIZITATSWERK DER STADT ZURICH","ParentId": 1136630, "MDM ID": "NA", "Site ID": 4290849, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Elektrizit�tswerk der Stadt Z�rich (EWZ)","ParentId": 1136630, "MDM ID": "NA", "Site ID": 4335494, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "ewz Services","ParentId": 1136630, "MDM ID": "NA", "Site ID": 28007456, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ewz Services","ParentId": 1136630, "MDM ID": "NA", "Site ID": 28006294, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STEUERAMT DER STADT Z�RICH","ParentId": 1203577, "MDM ID": "NA", "Site ID": 8124109, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Steueramt der Stadt Z�rich","ParentId": 1203577, "MDM ID": "NA", "Site ID": 4633211, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT Z�RICH","ParentId": 1248339, "MDM ID": "NA", "Site ID": 10997535, "Account Type": "Location", "Billing City": "Z�RICH 1", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 1266705, "MDM ID": "NA", "Site ID": 10490308, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "*DONOTUSE*OIZ ORGANISATION UND INFORMATIK","ParentId": 1341030, "MDM ID": "NA", "Site ID": 10186694, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Restricted", "MUP Profile": "Yes"},
{"Site Name": "STADT Z�RICH","ParentId": 1503467, "MDM ID": "NA", "Site ID": 10253147, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ERDGAS OSTSCHWEIZ AG","ParentId": 3444567, "MDM ID": "NA", "Site ID": 9445038, "Account Type": "Location", "Billing City": "SCHLIEREN", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ERDGAS OSTSCHWEIZ AG","ParentId": 686072, "MDM ID": "NA", "Site ID": 4348891, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "ERDGAS OSTSCHWEIZ AG","ParentId": 686072, "MDM ID": "NA", "Site ID": 13054205, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "WASSERVERSORGUNG Z�RICH","ParentId": 1819217, "MDM ID": "NA", "Site ID": 4335418, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT Z�RICH ORGANISATION UND INFORMATIK","ParentId": 2275141, "MDM ID": "NA", "Site ID": 10067946, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "*DONOTUSE*OIZ Organisation und Informatik","ParentId": 4284500, "MDM ID": "NA", "Site ID": 119335, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "Stadt Zurich Organisation und Informatik","ParentId": 785202, "MDM ID": "NA", "Site ID": 5097411, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "*DONOTUSE*OIZ ORGANISATION UND INFORMATIK","ParentId": 785202, "MDM ID": "NA", "Site ID": 13897775, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "*DONOTUSE*Organisation und Informatik der Stadt Zuerich","ParentId": 785202, "MDM ID": "NA", "Site ID": 4078372, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "OIZ - ORGANISATION UND INFORMATIK DER STADT Z�RICH","ParentId": 785202, "MDM ID": "NA", "Site ID": 1003869734, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Organisation und Informatik der Stadt Z�rich (OIZ)","ParentId": 785202, "MDM ID": "NA", "Site ID": 1003882614, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ ORGANISATION UND INFORMATIK DER STADT ZUERICH","ParentId": 100333318, "MDM ID": "NA", "Site ID": 1003810546, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "*DONOTUSE*STADT Z�RICH OIZ","ParentId": 1359812, "MDM ID": "NA", "Site ID": 13057260, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - ORGANISATION UND INFORMATIK DER STADT ZURICH","ParentId": 8047208, "MDM ID": "NA", "Site ID": 15278892, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 9404237, "MDM ID": "NA", "Site ID": 26382417, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "STADT ZURICH","ParentId": 7997140, "MDM ID": "NA", "Site ID": 15139397, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STADT ZURICH TIEFBAUAMT","ParentId": 8041123, "MDM ID": "NA", "Site ID": 15208318, "Account Type": "Location", "Billing City": "URDORF", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 8046760, "MDM ID": "NA", "Site ID": 15320263, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 8046760, "MDM ID": "NA", "Site ID": 15268760, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "OIZ - Organisation und Informatik der Stadt Z�rich","ParentId": 8478664, "MDM ID": "NA", "Site ID": 15734229, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "*DONOTUSE*STADT Z�RICH, ORGANISATION UND INFORMATIK","ParentId": 9068578, "MDM ID": "NA", "Site ID": 25176543, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Restricted", "MUP Profile": ""},
{"Site Name": "STADT Z�RICH","ParentId": 9396327, "MDM ID": "NA", "Site ID": 26260048, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "AMT F�R JUGEND UND BERUFSBERATUNG","ParentId": 1575712, "MDM ID": "NA", "Site ID": 13861152, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KANTONALES STEUERAMT Z�RICH","ParentId": 2839790, "MDM ID": "NA", "Site ID": 10719172, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Stadt Winterthur","ParentId": 1889241, "MDM ID": "NA", "Site ID": 6721682, "Account Type": "Location", "Billing City": "WINTERTHUR", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Steueramt Stadt Winterthur","ParentId": 1889241, "MDM ID": "NA", "Site ID": 8126776, "Account Type": "Location", "Billing City": "WINTERTHUR", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Stadt Winterthur c/o Kantonsspital Winterthur","ParentId": 8334190, "MDM ID": "NA", "Site ID": 15625180, "Account Type": "Location", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�rcher Kantonalbank","ParentId": 5677315, "MDM ID": "NA", "Site ID": 13728263, "Account Type": "Location", "Billing City": "BADEN-DATTWIL", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "University Zurich","ParentId": 6101802, "MDM ID": "NA", "Site ID": 14979642, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "University of Zurich","ParentId": 100365708, "MDM ID": "NA", "Site ID": 1003822338, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 1128706, "MDM ID": "NA", "Site ID": 9585953, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 1355755, "MDM ID": "NA", "Site ID": 9150122, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�ts Spital Z�rich","ParentId": 1401891, "MDM ID": "NA", "Site ID": 4183803, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT&AUML;TSSPITAL Z&UUML;RICH","ParentId": 1490886, "MDM ID": "NA", "Site ID": 27969776, "Account Type": "Location", "Billing City": "Z&UUMLRICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Uni Spital Z�rich Psychiatrische Klinik","ParentId": 1490886, "MDM ID": "NA", "Site ID": 5203342, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universitaetsspital Zuerich","ParentId": 1490886, "MDM ID": "NA", "Site ID": 5009849, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSITATSSPITAL ZURICH","ParentId": 100442203, "MDM ID": "NA", "Site ID": 1003847320, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universit�tsspital Z�rich","ParentId": 100591046, "MDM ID": "NA", "Site ID": 1003882612, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNISPITAL Z�RICH","ParentId": 1131134, "MDM ID": "NA", "Site ID": 9720532, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNISPITAL Z�RICH","ParentId": 4769394, "MDM ID": "NA", "Site ID": 10162573, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "UNIVERSITATSSPITAL ZURICH","ParentId": 9977438, "MDM ID": "NA", "Site ID": 27711814, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSITY HOSPITAL ZURICH","ParentId": 1618646, "MDM ID": "NA", "Site ID": 4304047, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Universitaet Zuerich","ParentId": 6444252, "MDM ID": "NA", "Site ID": 4008864, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "UNIVERSIT�T Z�RICH ZENTRUM ZAHNMEDIZIN","ParentId": 8443652, "MDM ID": "NA", "Site ID": 15204144, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSITY OF ZURICH","ParentId": 8465147, "MDM ID": "NA", "Site ID": 4278298, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 9302156, "MDM ID": "NA", "Site ID": 11699428, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 1803362, "MDM ID": "NA", "Site ID": 13369549, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "UNIVERSIT�T Z�RICH","ParentId": 9752103, "MDM ID": "NA", "Site ID": 27080775, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "VERWALTUNGSGERICHT DES KANTON ZUERI","ParentId": 6119434, "MDM ID": "NA", "Site ID": 14990201, "Account Type": "Location", "Billing City": "ZUERICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "AMT F�R MILIT�R UND ZIVILSCHUTZ","ParentId": 1379577, "MDM ID": "NA", "Site ID": 13064051, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Kantonspolizei Z�rich","ParentId": 2854637, "MDM ID": "NA", "Site ID": 1003949231, "Account Type": "Location", "Billing City": "Z�rich", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "KAPO ZH","ParentId": 100168090, "MDM ID": "NA", "Site ID": 29775442, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "MIGRATIONSAMT DES KANTONS Z�RICH","ParentId": 5685228, "MDM ID": "NA", "Site ID": 14623196, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "STRASSENVERKEHRSAMT DES KANTONS Z�RICH","ParentId": 874180, "MDM ID": "NA", "Site ID": 13416436, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "UNIVERSITY OF ZURICH INSTITUTE OF MOLECULAR LIFE SCIENCES","ParentId": 8520820, "MDM ID": "NA", "Site ID": 14847144, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": "Yes"},
{"Site Name": "VERWALTUNGSGERICHT DES KANTON","ParentId": 9272774, "MDM ID": "NA", "Site ID": 14029704, "Account Type": "Location", "Billing City": "ZURICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "BAUDIREKTION KANTON Z�RICH","ParentId": 9407679, "MDM ID": "NA", "Site ID": 26394758, "Account Type": "Location", "Billing City": "Z�RICH", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ZHAW","ParentId": 9455547, "MDM ID": "NA", "Site ID": 26657594, "Account Type": "Location", "Billing City": "WINTERTHUR", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "ZHAW Z�RCHER HOCHSCHULE F�R ANGEWANDTE WISSENSCHAFTEN","ParentId": 9455547, "MDM ID": "NA", "Site ID": 1003885668, "Account Type": "Location", "Billing City": "Winterthur", "Site Visibility": "Open", "MUP Profile": ""},
{"Site Name": "Z�RCHER HOCHSCHULE WINTERTHUR","ParentId": 1153686, "MDM ID": "NA", "Site ID": 6079731, "Account Type": "Location", "Billing City": "WINTERTHUR", "Site Visibility": "Open", "MUP Profile": ""},

]
;
        var myTreeData = getTree(rawTreeData, 'MDM ID', 'ParentId');
        
        
        $scope.tree_data = myTreeData;
        $scope.my_tree = tree = {};
        $scope.expanding_property = {
            field: "Site Name",
            displayName: "Site Name",
            sortable: true,
            filterable: true,
            cellTemplate: "<i>{{row.branch[expandingProperty.field]}}</i>"
        };
        $scope.col_defs = [
        {
            field: "MDM ID",
            sortable: true,
            sortingType: "number",
            filterable: true
        } ,
        {
        field: "Site ID",
        sortable: true,
        sortingType: "number",
        filterable: true
        },
        {
        field: "Account Type",
        sortable: true,
        sortingType: "string",
        filterable: true
        },
        {
        field: "Billing City",
        sortable: true,
        sortingType: "string",
        filterable: true
        },
        {
        field: "Site Visibility",
        sortable: true,
        sortingType: "string",
        filterable: true
        },
        {
        field: "MUP Profile",
        sortable: true,
        sortingType: "string",
        filterable: true
        }
        ];
        $scope.my_tree_handler = function (branch) {
            console.log('you clicked on', branch)
        }
        
        function getTree(data, primaryIdName, parentIdName) {
            if (!data || data.length == 0 || !primaryIdName || !parentIdName)
                return [];
            
            var tree = [],
            rootIds = [],
            item = data[0],
            primaryKey = item[primaryIdName],
            treeObjs = {},
            parentId,
            parent,
            len = data.length,
            i = 0;
            
            while (i < len) {
                item = data[i++];
                primaryKey = item[primaryIdName];
                treeObjs[primaryKey] = item;
                parentId = item[parentIdName];
                
                if (parentId) {
                    parent = treeObjs[parentId];
                    
                    if (parent.children) {
                        parent.children.push(item);
                    } else {
                        parent.children = [item];
                    }
                } else {
                    rootIds.push(primaryKey);
                }
            }
            
            for (var i = 0; i < rootIds.length; i++) {
                tree.push(treeObjs[rootIds[i]]);
            }
            ;
            
            return tree;
        }
        
    });
    
}).call(this);
