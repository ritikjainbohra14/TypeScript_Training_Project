var soprtsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
// for(let i = 0; i<soprtsOne.length; i++){
//     console.log(soprtsOne[i]);
// }
//simplfy for loop
for (var _i = 0, soprtsOne_1 = soprtsOne; _i < soprtsOne_1.length; _i++) {
    var tempSport = soprtsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log("This is my favorite" + tempSport);
    }
    console.log(tempSport);
}
