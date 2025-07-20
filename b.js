
let b = Math.floor(Math.random() * 3);
rounds = 0;
usercorrect = 0;
computercorrect = 0;
tie = 0;
while (rounds < 3) {
    let a = prompt('enter a number (stone=0,paper=1,scissors=2)');
    a = Number.parseInt(a);
    if (b === a) {
        tie++;
        rounds++;
        alert('tie');
    }
    else if ((a === 0 && b === 2) || (a === 1 && b === 0) || (a === 2 && b === 1)) {
        usercorrect++;
        rounds++;
        alert('you won');
    }
    else {
        computercorrect++;
        rounds++;
        alert('you lose')
    }

}
if (usercorrect >= computercorrect) {
    alert(`you won in ${usercorrect} chances noe eat potty`);
}
else {
    alert(`you lose in ${computercorrect}chances`);
}
