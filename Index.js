function main(){
    getUserRank();
}

function getUserPoints(victory, defeat){
    let rankedScore = victory - defeat;
    return rankedScore;
}

let userPoints = getUserPoints(prompt("Won:"), prompt("Lost:"));

function getUserRank(){
    const rankTable = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal'];
    const pointsThreshold = [10, 20, 50, 80, 90, 100];
    let xpRank = userPoints; 

    for (let i = 0; i < pointsThreshold.length; i++){
        if(xpRank < pointsThreshold[i]){
            console.log(`O herói tem um saldo de ${xpRank} pontos, e está no rank: ${rankTable[i]}!`);
            break;           
        }
    }

    if (xpRank > pointsThreshold[5]){
        console.log(`O herói tem um saldo de ${xpRank} e está no rank: ${rankTable[6]}`)
    }
}

main();