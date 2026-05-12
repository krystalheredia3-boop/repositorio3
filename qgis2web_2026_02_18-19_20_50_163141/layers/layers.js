var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_reasdeturismoenCuauhtmoc_1 = new ol.format.GeoJSON();
var features_reasdeturismoenCuauhtmoc_1 = format_reasdeturismoenCuauhtmoc_1.readFeatures(json_reasdeturismoenCuauhtmoc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdeturismoenCuauhtmoc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeturismoenCuauhtmoc_1.addFeatures(features_reasdeturismoenCuauhtmoc_1);
var lyr_reasdeturismoenCuauhtmoc_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasdeturismoenCuauhtmoc_1, 
                style: style_reasdeturismoenCuauhtmoc_1,
                popuplayertitle: 'Áreas de turismo en Cuauhtémoc',
                interactive: true,
                title: '<img src="styles/legend/reasdeturismoenCuauhtmoc_1.png" /> Áreas de turismo en Cuauhtémoc'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_reasdeturismoenCuauhtmoc_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_reasdeturismoenCuauhtmoc_1];
lyr_reasdeturismoenCuauhtmoc_1.set('fieldAliases', {'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Nombre del': 'Nombre', 'Horario': 'Horario', 'Descripcio': 'Descripcio', 'ruta_foto': 'ruta_foto', });
lyr_reasdeturismoenCuauhtmoc_1.set('fieldImages', {'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Nombre del': 'TextEdit', 'Horario': 'TextEdit', 'Descripcio': 'TextEdit', 'ruta_foto': 'ExternalResource', });
lyr_reasdeturismoenCuauhtmoc_1.set('fieldLabels', {'Latitud': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Nombre del': 'inline label - always visible', 'Horario': 'inline label - visible with data', 'Descripcio': 'inline label - always visible', 'ruta_foto': 'inline label - always visible', });
lyr_reasdeturismoenCuauhtmoc_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});