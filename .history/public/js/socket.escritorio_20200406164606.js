var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.has('escritorio'));