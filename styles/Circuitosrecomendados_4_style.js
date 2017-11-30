var size = 0;

function categories_Circuitosrecomendados_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Fuera de pista, Col de la Virg':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,75,219,1.0)', lineDash: [10,5,1,5,1,5], lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Pista del Bosque':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,230,134,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Pista principal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,235,164,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Fuera de pista, Cerro Bridges':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,79,208,1.0)', lineDash: [10,5,1,5,1,5], lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Fuera de Pista, El del Medio':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(118,80,232,1.0)', lineDash: [10,5,1,5,1,5], lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'Fuera de Pista, El Murcielago':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(101,7,99,1.0)', lineDash: [10,5,1,5,1,5], lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;}};

var style_Circuitosrecomendados_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nombre");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Circuitosrecomendados_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
}
function update() {

    var features = lyr_Circuitosrecomendados_4.getSource().getFeatures();
    features.forEach(function(feature){
        var context = {
            feature: feature,
            variables: {}
        };

        // Get the label text as a string
        var text = "";

        // Get the center point in pixel space
        var center = ol.extent.getCenter(feature.getGeometry().getExtent());
        var pixelCenter = map.getPixelFromCoordinate(center);

        var size = 12;
        var halfText = (size + 1) * (text.length / 4);

        // Create a bounding box for the label using known pixel heights
        var minx = parseInt(pixelCenter[0] - halfText);
        var maxx = parseInt(pixelCenter[0] + halfText);

        var maxy = parseInt(pixelCenter[1] - (size / 2));
        var miny = parseInt(pixelCenter[1] + (size / 2));

        // Get bounding box points back into coordinate space
        var min = map.getCoordinateFromPixel([minx, miny]);
        var max = map.getCoordinateFromPixel([maxx, maxy]);

        // Create the bounds
        var bounds = {
            bottomLeft: min,
            topRight: max
        };
        // Weight longer labels higher, use their name as the ID
        labelEngine.ingestLabel(bounds, text, text.length, feature)

    });

    // Call the label callbacks for showing and hiding
    labelEngine.update();

};
