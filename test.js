const computerPlay = () => {
    rand = Math.floor(Math.random() * 3);
    if(rand == 0) {
        return "sissor";
    } else if(rand == 1) {
        return "rock";
    } else {
        return "paper";
    }
}

const userPlay = () => {
    const textBox = prompt('Rock, Sissor, Paper');
    return textBox;
}

const playRound = (playerSection, computerSection) => {
    const user = playerSection.toLowerCase();
    if(user == computerSection){
        return ("비겼습니다.");
        //return (`User ${user}, Computer ${computerSection} 비겼습니다.`);
    }else if ( 
           user === "sissor" && computerSection === "rock" 
        || user === "rock" && computerSection ==="paper"
        || user === "paper" && computerSection === "sissor"
        ) {
        return ("컴퓨터가 이겼습니다.");
        //return (`User ${user}, Computer ${computerSection} 컴퓨터가 이겼습니다.`);
    }else{
        return ("사용자가 이겼습니다.");
        //return (`User ${user}, Computer ${computerSection} 사용자가 이겼습니다.`);
    }
}

const game = () => {
    let UserCnt = 0;
    let CompCnt = 0;

    for(let i=0; i<5; i++){
        const result = playRound(userPlay(), computerPlay())
        if(result === "사용자가 이겼습니다.")
            UserCnt++;
        else if(result === "컴퓨터가 이겼습니다.")
            CompCnt++;
    }
    UserCnt === CompCnt ? console.log("비겼습니다.") 
    : (UserCnt < CompCnt ? console.log("컴퓨터가 이겼습니다.") 
    : console.log("유저가 이겼습니다."));
}

game();