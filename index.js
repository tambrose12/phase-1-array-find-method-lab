// code your solution here

function superbowlWin(array) {
    let wins = array.find(list => list.result === "W")
    return wins ? wins.year : undefined
}

