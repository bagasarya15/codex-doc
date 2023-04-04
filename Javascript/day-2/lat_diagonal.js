// console.log('A');
// console.log(' B');
// console.log('  C');
// console.log('   D');
// console.log('    E');
// console.log('     F');
// console.log('      G');
// console.log('       H');
// console.log('        I');
// console.log('         j');

const Diagonal=(abjad)=>{
    for (let i = 0; i < abjad; i++) {
        
        let space = "";
        for (let j = 0; j < i; j++) {
            space += " ";
        }

        output = space + String.fromCharCode(65 + i);
        console.log(output);
    }
}
Diagonal(5)

const diagonal = (abjad) => {
    let space = "";
    for (let i = 0; i < abjad; i++) {
        space += " ";
        console.log(space + String.fromCharCode(65 + i));
    }
};
diagonal(5);

const Reverse=(abjad)=>{
    // let abjad = 26;
    let nilai = abjad;

    for (let i = 0; i < abjad; i++) {
        let space = '';
        for (let j = 0; j < i; j++) {
            space = space + '*';
        }
        output = space + String.fromCharCode(65 + nilai -1);
        nilai--;
        console.log(output);
    }
}
// Reverse(5)

function latDiagonal(abjad){
    for(let i = 0; i < abjad; i++){
        let space = " ";
        for(let j = 0; j < i; j++){
            space += " ";
        }
        output = space + String.fromCharCode(65 + i);
        console.log(output); // Void
    }
}
// latDiagonal(4)

const Siku2=(abjad)=>{
    for (let i = 0; i < abjad; i++) {
        let space = '';
        for (let j = abjad; j > i; j--) {
            space = space + '*';
        }
        output = space + String.fromCharCode(65 + i);
        console.log(output);
    }
}
// Siku2(5)

const CallBack=(cb)=>{
    cb();
    latDiagonal(10);
}
// CallBack(latDiagonal)

const DiagonalWhile = (abjad) => {
    let i = 0;
    while (i < abjad) {
    let space = "";
    let j = 0;
    while (j < i) {
        space = space + "*";
        j++;
    }
    let output = space + String.fromCharCode(65 + i);
    console.log(output);
    i++;
    }
}  
DiagonalWhile(10)