/// <reference path="C:\Users\huisama\Documents\GitHub\BMapPolygonDemo\Scripts/bmap.getscript.cache.js" />

function program() {

    var map = null;
    var polygon = new BMap.Polygon([], {
        strokeWeight: 2, strokeColor: "#ff0000", fillColor: "#555", fillOpacity: 0.5 });
    var $points = $("#points");

    // "清除".
    $("#btn-clear-points").on("click", function () {
        $points.children().remove();
        polygon.setPath([]);
        map.removeOverlay(polygon);
    });

    $("#btn-create-polygon").on("click", function () {
        // 封闭多边形
        var path = polygon.getPath();
        if (path.length > 0) {
            path.push(path[path.length - 1]);
            polygon.setPath(path);
        }

        map.addOverlay(polygon);
        //map.setViewport(polygon.getPath());
    });

    // 构造函数.
    function constructor() {
        initMap();
    }

    // 初始地图
    function initMap() {
        map = new BMap.Map("map");          // 创建地图实例  
        mapCenter = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(mapCenter, 19);
        map.addEventListener("click", function (e) {
            addItemToPoints(e.point);
            var path = polygon.getPath();
            path.push(e.point);    
        });
    };

    // 
    function addItemToPoints(point) {
        var $item = $(document.createElement("li"));
        $item.data("point", point);
        $item.text("[lng:" + point.lng + ", lat:" + point.lat);
        $item.appendTo($points);
    }

    //// call constructor
    constructor();
}

$(function () {
    var app = new program();
});
