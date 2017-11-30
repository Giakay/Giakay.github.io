var size = 0;

function categories_Montaas_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'C° Bridges':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(212,212,67,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'C° Godoy':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(19,224,227,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'C° Martial':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(138,137,231,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'C° Roi':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(28,207,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
case 'C° Tonelli':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(214,98,212,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(231,120,120,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
                    break;}};

var style_Montaas_5 = function(feature, resolution){
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
    
var style = categories_Montaas_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
}
function update() {

    var features = lyr_Montaas_5.getSource().getFeatures();
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
