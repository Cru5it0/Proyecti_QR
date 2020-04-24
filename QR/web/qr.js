/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var miCodigoQR = new QRCode("codigoQR");

$(document).ready(function () {
    $("#generarCodigo").on("click", function () {
        var cadena = $("#item_txt").val();
        if (cadena == "") {
            alert("Ingresa un texto");
            $("#item_txt").focus();
        } else {
            $("#descargarCodigo").css("display", "inline-block");
            miCodigoQR.makeCode(cadena);
        }
    });
    $("#descargarCodigo").on("click", function () {
        var base64 = $("#codigoQR img").attr('src');
        $("#descargarCodigo").attr('href', base64);
        $("#descargarCodigo").attr('download', "codigoQR");
        $("#descargarCodigo").trigger("click");
    });
});