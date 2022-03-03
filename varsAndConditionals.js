/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonAttack = 25
let jamieAttack = 35

if (jonAttack > jamieAttack){
    console.log('Jon Snow has a better attack than Jamie')
} else if (jamieAttack > jonAttack){
    console.log('Jaime Lannister has a higher attack then Jon Snow')
} else {
    console.log(`"Jon Snow and Jamie Lannister have the same attack"`)
}

let jonHealth = 100
let jonDefense = 0

if(jonHealth <= jamieAttack){
    console.log('Jon Snow has been slain')
} else {
    jonHealth = jonHealth - jamieAttack
    console.log(`Jon Snow's health is now ${jonHealth}`)
}

jonDefense += 25

if(jonHealth <= jamieAttack - jonDefense){
    console.log('Jon Snow has been slain')

} else {
    jonHealth -= (jamieAttack - jonDefense)
    console.log(`Jon's health is now ${jonHealth}`)
}

if ((jonHealth + 50) >= 100){
    jonHealth = 100
} else {
    jonHealth += 50
}

console.log(jonHealth)

let coinIsHeads = true

if (coinIsHeads === true){
    console.log('The fight continues')
} else {
    console.log('Jon is allowed to run away')
}

// if (coinIsHeads !== false){
//     console.log('The fight continues')
// } else {
//     console.log('Jon is allowed to run away')
// }

// for(let i = 0; i < 5; i++){
//     if(jonHealth <= 0){
//         console.log('Jon has been slain')
//     } else {
//     jonHealth -= (jamieAttack - jonDefense)
//     console.log(`Jon's health is now ${jonHealth}`)
//     }
//}    

while(jonHealth > 0){
    jonHealth -= (jamieAttack - jonDefense)
    console.log(`Jon's health is now ${jonHealth}`)
    if(jonHealth <= 0){
        console.log('Jon has been slain')
    }
}