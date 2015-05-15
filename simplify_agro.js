
function test() {
    var result = simplify(points, 1, false);
    var path = newPolygon.getPath();
    var path2 = path.j;
    var result2 = simplify(path2, 0.00001, true);
    var str = GetCoordinate(result2);
    var a = 5;
}

function simplifyPolygon(object, tolerance, highestQuality) {

    var paths = object.getPath();
    for (var i = 0; i < paths.length; i++) {
        simplify(newPolygon.getPath().j, tolerance, highestQuality);
    }

    return object;
}

function simplifyStringPath(object, tolerance, highestQuality) {


    return null;
}
