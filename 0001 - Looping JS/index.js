var catur = "";

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 11 / 2; j++) {
        catur += "#"
        catur += " "
    }
    catur += "\n";
    for (var k = 0; k < 10 / 2; k++) {
        catur += " "
        catur += "#"
    }
    catur += "\n";
}
console.log("PAPAN CATUR\n\n");
console.log(catur);