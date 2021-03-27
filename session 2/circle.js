function area(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function perimeter(radius) {
    return 2 * Math.PI * radius;
}

module.exports = {area, perimeter};
//It will convert these functions to modules..so they can be imported in other programs