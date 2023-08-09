let soprtsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// for(let i = 0; i<soprtsOne.length; i++){
//     console.log(soprtsOne[i]);
// }


//simplfy for loop

for(let tempSport of soprtsOne){

    if(tempSport == "Cricket"){
        console.log("This is my favorite " + tempSport);
    }
    console.log(tempSport);
}