var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_Prueba1_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Prueba1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Prueba1_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7616250.588654, -7324836.511667, -7610541.581324, -7318332.034401]
                            })
                        });var format_GrietasPf_1 = new ol.format.GeoJSON();
var features_GrietasPf_1 = format_GrietasPf_1.readFeatures(json_GrietasPf_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrietasPf_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GrietasPf_1.addFeatures(features_GrietasPf_1);var lyr_GrietasPf_1 = new ol.layer.Vector({
                source:jsonSource_GrietasPf_1, 
                style: style_GrietasPf_1,
    title: 'GrietasPf<br />\
    <img src="styles/legend/GrietasPf_1_0.png" /> A<br />\
    <img src="styles/legend/GrietasPf_1_1.png" /> R<br />'
        });var format_RegistroAv_2 = new ol.format.GeoJSON();
var features_RegistroAv_2 = format_RegistroAv_2.readFeatures(json_RegistroAv_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegistroAv_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RegistroAv_2.addFeatures(features_RegistroAv_2);var lyr_RegistroAv_2 = new ol.layer.Vector({
                source:jsonSource_RegistroAv_2, 
                style: style_RegistroAv_2,
                title: '<img src="styles/legend/RegistroAv_2.png" /> RegistroAv'
            });var format_AEstudiore_3 = new ol.format.GeoJSON();
var features_AEstudiore_3 = format_AEstudiore_3.readFeatures(json_AEstudiore_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEstudiore_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AEstudiore_3.addFeatures(features_AEstudiore_3);var lyr_AEstudiore_3 = new ol.layer.Vector({
                source:jsonSource_AEstudiore_3, 
                style: style_AEstudiore_3,
                title: '<img src="styles/legend/AEstudiore_3.png" /> AEstudiore'
            });var format_Circuitosrecomendados_4 = new ol.format.GeoJSON();
var features_Circuitosrecomendados_4 = format_Circuitosrecomendados_4.readFeatures(json_Circuitosrecomendados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circuitosrecomendados_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Circuitosrecomendados_4.addFeatures(features_Circuitosrecomendados_4);var lyr_Circuitosrecomendados_4 = new ol.layer.Vector({
                source:jsonSource_Circuitosrecomendados_4, 
                style: style_Circuitosrecomendados_4,
    title: 'Circuitos recomendados<br />\
    <img src="styles/legend/Circuitosrecomendados_4_0.png" /> Fuera de pista, Col de la Virg<br />\
    <img src="styles/legend/Circuitosrecomendados_4_1.png" /> Pista del Bosque<br />\
    <img src="styles/legend/Circuitosrecomendados_4_2.png" /> Pista principal<br />\
    <img src="styles/legend/Circuitosrecomendados_4_3.png" /> Fuera de pista, Cerro Bridges<br />\
    <img src="styles/legend/Circuitosrecomendados_4_4.png" /> Fuera de Pista, El del Medio<br />\
    <img src="styles/legend/Circuitosrecomendados_4_5.png" /> Fuera de Pista, El Murcielago<br />'
        });var format_Montaas_5 = new ol.format.GeoJSON();
var features_Montaas_5 = format_Montaas_5.readFeatures(json_Montaas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montaas_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Montaas_5.addFeatures(features_Montaas_5);var lyr_Montaas_5 = new ol.layer.Vector({
                source:jsonSource_Montaas_5, 
                style: style_Montaas_5,
    title: 'Montañas<br />\
    <img src="styles/legend/Montaas_5_0.png" /> C° Bridges<br />\
    <img src="styles/legend/Montaas_5_1.png" /> C° Godoy<br />\
    <img src="styles/legend/Montaas_5_2.png" /> C° Martial<br />\
    <img src="styles/legend/Montaas_5_3.png" /> C° Roi<br />\
    <img src="styles/legend/Montaas_5_4.png" /> C° Tonelli<br />\
    <img src="styles/legend/Montaas_5_5.png" /> <br />'
        });var format_Edificios_6 = new ol.format.GeoJSON();
var features_Edificios_6 = format_Edificios_6.readFeatures(json_Edificios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificios_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Edificios_6.addFeatures(features_Edificios_6);var lyr_Edificios_6 = new ol.layer.Vector({
                source:jsonSource_Edificios_6, 
                style: style_Edificios_6,
    title: 'Edificios<br />\
    <img src="styles/legend/Edificios_6_0.png" /> Casa del Te<br />\
    <img src="styles/legend/Edificios_6_1.png" /> CAU<br />\
    <img src="styles/legend/Edificios_6_2.png" /> Infuetur<br />\
    <img src="styles/legend/Edificios_6_3.png" /> Refugio<br />'
        });

lyr_Prueba1_0.setVisible(true);lyr_GrietasPf_1.setVisible(true);lyr_RegistroAv_2.setVisible(true);lyr_AEstudiore_3.setVisible(false);lyr_Circuitosrecomendados_4.setVisible(true);lyr_Montaas_5.setVisible(true);lyr_Edificios_6.setVisible(true);
var layersList = [baseLayer,lyr_Prueba1_0,lyr_GrietasPf_1,lyr_RegistroAv_2,lyr_AEstudiore_3,lyr_Circuitosrecomendados_4,lyr_Montaas_5,lyr_Edificios_6];
lyr_GrietasPf_1.set('fieldAliases', {'id': 'id', 'Ancho': 'Ancho', 'Tipo': 'Tipo', });
lyr_RegistroAv_2.set('fieldAliases', {'id': 'id', 'Fecha': 'Fecha', 'Accidenta': 'Accidenta', 'Muertos': 'Muertos', 'Descrip': 'Descrip', 'Tipo': 'Tipo', });
lyr_AEstudiore_3.set('fieldAliases', {'id': 'id', 'AEstudio': 'AEstudio', 'Area': 'Area', });
lyr_Circuitosrecomendados_4.set('fieldAliases', {'id': 'id', 'Tiemp': 'Tiemp', 'Nombre': 'Nombre', });
lyr_Montaas_5.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Altura': 'Altura', });
lyr_Edificios_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Telefono': 'Telefono', 'Alquiler': 'Alquiler', 'Rescate': 'Rescate', });
lyr_GrietasPf_1.set('fieldImages', {'id': 'TextEdit', 'Ancho': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_RegistroAv_2.set('fieldImages', {'id': 'TextEdit', 'Fecha': 'TextEdit', 'Accidenta': 'TextEdit', 'Muertos': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_AEstudiore_3.set('fieldImages', {'id': 'TextEdit', 'AEstudio': 'TextEdit', 'Area': 'TextEdit', });
lyr_Circuitosrecomendados_4.set('fieldImages', {'id': 'Hidden', 'Tiemp': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Montaas_5.set('fieldImages', {'id': 'Hidden', 'Nombre': 'TextEdit', 'Altura': 'TextEdit', });
lyr_Edificios_6.set('fieldImages', {'id': 'Hidden', 'Nombre': 'TextEdit', 'Telefono': 'TextEdit', 'Alquiler': 'TextEdit', 'Rescate': 'TextEdit', });
lyr_GrietasPf_1.set('fieldLabels', {'id': 'no label', 'Ancho': 'header label', 'Tipo': 'header label', });
lyr_RegistroAv_2.set('fieldLabels', {'id': 'no label', 'Fecha': 'header label', 'Accidenta': 'no label', 'Muertos': 'no label', 'Descrip': 'no label', 'Tipo': 'header label', });
lyr_AEstudiore_3.set('fieldLabels', {'id': 'no label', 'AEstudio': 'no label', 'Area': 'no label', });
lyr_Circuitosrecomendados_4.set('fieldLabels', {'Tiemp': 'header label', 'Nombre': 'header label', });
lyr_Montaas_5.set('fieldLabels', {'Nombre': 'header label', 'Altura': 'header label', });
lyr_Edificios_6.set('fieldLabels', {'Nombre': 'inline label', 'Telefono': 'inline label', 'Alquiler': 'inline label', 'Rescate': 'inline label', });
lyr_Edificios_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_Edificios_6.on("postcompose", update);

    var listenerKey = lyr_Edificios_6.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });