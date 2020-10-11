// Include this file in the <head> section of a web page using:
//
// <script src='mainfunctions.js'></script>

function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
function S(i) { return O(i).style                                            }
function C(i) { return document.getElementsByClassName(i)                    }