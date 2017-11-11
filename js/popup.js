'use strict';
$(document).ready(function () {
    $("#run").click(function run() {
        const size = {shoeSize: $("#shoe-size").val()};
        localStorage.setItem('size', JSON.stringify(size));
        
        alert($(".select__").html());
        
    });
});