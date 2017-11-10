'use strict';
$(document).ready(function () {
    $("#run").click(function run() {
        if ($("#add-to-bag").length > 0) {
            addToCart();
        } else {
            alert("Cannot find item to add to cart")
        }
        function addToCart() {
            
        }
    });
});