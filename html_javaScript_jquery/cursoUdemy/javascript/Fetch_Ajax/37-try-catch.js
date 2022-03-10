"use strict";

var num;
try {
    num = new Array(9999999999);
} catch (error) {
    console.error("Error array conversion " +error);
}
