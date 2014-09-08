<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="BMapPolygonDemo._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>百度地图 demo</title>
    <link href="default.css" rel="stylesheet" />
    <script src="Scripts/jquery-1.8.2.min.js"></script>
    <script src="http://api.map.baidu.com/api?v=1.5&ak=6a8f0766a2f6a433b6e171a90e6b8fe0"></script>
    <script src="default.js"></script>
</head>
<body>
    <div id="main-content">
        <div id="map"></div>
        <aside id="aside-bar">
            <button id="btn-clear-points" type="button">清空</button>
            <button id="btn-create-polygon" type="button">创建</button>
            <ol id="points"></ol>
        </aside>
    </div>
</body>
</html>
