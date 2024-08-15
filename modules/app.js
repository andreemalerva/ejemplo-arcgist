/*Importación de Librerías*/
import FeatureLayer from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/FeatureLayer.js";
import Map from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/Map.js";
import MapView from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/views/MapView.js";
import Extent from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/geometry/Extent.js";
import * as projection from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/geometry/projection.js";
import Basemap from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/Basemap.js";
import LayerList from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/LayerList.js";
import * as reactiveUtils from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/core/reactiveUtils.js";
import Query from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/Basemap.js";
import Field from "../libraries/arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/support/Field.js";

import {URLmunicipios, URLproyectos, key, PROYECTSoutFields, BCSoutFields, markerRenderer, markerLabels, columnChart, barChart } from "./info-services.js";

        /*Inicialización de mapa de fondo*/
        const map = new Map({
            basemap: "hybrid"
        });

        /*Capas de Servicios*/
            /*Polígonos de Municipios */
        const polygon = new FeatureLayer({
            url: URLmunicipios,
            apiKey: key,
            outFields: BCSoutFields,
            popupTemplate: barChart/*,
            renderer: openSpacesRenderer,
            opacity: 0.2*/
        });
        map.layers.add(polygon);

            /*Puntos de proyectos*/
        const dots = new FeatureLayer({
            url: URLproyectos,
            apiKey: key,
            outFields: PROYECTSoutFields,
            renderer: markerRenderer,
            labelingInfo: [markerLabels],
            popupTemplate: columnChart     
        });
        map.layers.add(dots);
        
        /*Inicialización de vista de Mapa*/
        const view = new MapView({
            map: map,  // References a Map instance
            container: "viewDiv",  // References the ID of a DOM element
            center: [15, 65], // Sets the center point of the view at a specified lon/lat
            zoom: 4 // MapView converts this to its corresponding scale which is 112823780.660964
        });

        if (!projection.isLoaded()) {//Carga el motor de proyección si no ha sido cargado
            await projection.load();
        }

        /*Posicionamiento del mapa sobre BCS*/
        const extent = new Extent({
            xmin: -115.564125010569,
            ymin: 21.36639054803,
            xmax: -105.014127583143,
            ymax: 31.490984853383,
            spatialReference: {
                wkid: 4326
            }
        });
        view.extent = extent;

        /*Inclusión y Posicionamiento de widgets*/
            /*Elementos por defecto*/
        view.ui.components = ([/* "attribution",  */"compass", "zoom"]);

            /*Lista de tipos de mapa*/
        let layerList = new LayerList({
            view: view
        });

        const updateBasemapStyle = (viewDiv) => {
            view.map.basemap = viewDiv;
        };

        const combobox = document.getElementById("basemapSelect");
        view.ui.add(combobox, "bottom-left");//Posicionamiento de listas de tipos de mapa
        const listCombobox = document.getElementById("styleCombobox");
        listCombobox.addEventListener("calciteComboboxChange", (event) => {//Event listener para seleccionar tipos de mapa
            updateBasemapStyle(event.target.value);
        });

            /*Inclusión de lista de capas de servicios*/
        view.ui.add(layerList, {position: "bottom-right"});

/*Filtro de Proyectos enla vista*/
let projects;

const layerView0 = await view.whenLayerView(dots);
reactiveUtils.when(
    () => !layerView0.dataUpdating,
    async () => {
        try {
            const featureSet = await layerView0.queryFeatures({// query all the features available for drawing.
                geometry: view.extent,
                returnGeometry: true,
                orderByFields: ["PROYECTO"]
            });
            projects = featureSet.features;

            const sumProjs = projects.length;
            var sumUnitsTotal = 0;
            var sumUnitsAvailable = 0;
            var sumUnitsAverage = 0;
            var objID = [];
            var udsTot = [];
            var absMes = [];

            projects.forEach(element => {
                const OBJID = element.attributes.OBJECTID;
                const FUDPROM = element.attributes.F__UD_PROM;
                const UDSTOT = element.attributes.UDS_TOT;
                const UDSDISP = element.attributes.UDS_DISP;
                const ABSMES = element.attributes.ABS_MES;
                sumUnitsTotal = sumUnitsTotal + UDSTOT;
                sumUnitsAvailable = sumUnitsAvailable + UDSDISP;
                sumUnitsAverage = sumUnitsAverage + FUDPROM;
                objID.push(OBJID);
                udsTot.push(UDSTOT);
                absMes.push(ABSMES);
            });

            const graph2 ={
                'OBJECTID' : objID,
                'UDS_TOT' : udsTot,
                'ABS_MES' : absMes
            }

            document.getElementById('sumTotProy').innerHTML = sumProjs;
            document.getElementById('sumUdsTot').innerHTML = sumUnitsTotal;
            document.getElementById('sumUdsDisp').innerHTML = sumUnitsAvailable;
            document.getElementById('promUD').innerHTML = sumUnitsAverage/sumProjs;
            
            //console.log([sumProjs,sumUnitsTotal,sumUnitsAvailable,sumUnitsAverage]);
        } catch (error) {
            console.error("query failed: ", error);
        }
    }
);

let BCS;
const layerView1 = await view.whenLayerView(polygon);
reactiveUtils.when(
    () => !layerView1.dataUpdating,
    async () => {
        try {
            const featureSet = await layerView1.queryFeatures({// query all the features available for drawing.
                geometry: view.extent,
                returnGeometry: true/* ,
                orderByFields: ["FID"] */
            });
            BCS = featureSet.features;
            //var objID = [];
            //BCS.forEach(element => {
                /*const OBJID = element.attributes.OBJECTID;
                objID.push(OBJID);*/
            //});
            //graph2 ={'OBJECTID' : objID}
            console.log(BCS[0].attributes);
        } catch (error) {
            console.error("query failed: ", error);
        }
    }
);
