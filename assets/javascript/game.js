let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneGoalCountElement = document.querySelector("#teamone-numhits")
let teamOneShootButtonElement = document.querySelector("#teamone-shoot")

let teamOneShotCount = 0;     
let teamOneGoalCount =0;

    teamOneShootButtonElement.addEventListener("click", function(){
        teamOneShotCount = teamOneShotCount + 1   
        teamOneShotCountElement.innerHTML = teamOneShotCount

        if(Math.random() <.25){
            teamOneGoalCount = teamOneGoalCount + 1
            teamOneGoalCountElement.innerHTML = teamOneGoalCount
        }
    })

let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits")
let teamTwoShootButtonElement = document.querySelector("#teamtwo-shoot")

let teamTwoShotCount = 0;     
let teamTwoGoalCount =0;

    teamTwoShootButtonElement.addEventListener("click", function(){
        teamTwoShotCount = teamTwoShotCount + 1   
        teamTwoShotCountElement.innerHTML = teamTwoShotCount

        if(Math.random() <.25){
            teamTwoGoalCount = teamTwoGoalCount + 1
            teamTwoGoalCountElement.innerHTML = teamTwoGoalCount
        }
    })

let resetButtonElement = document.querySelector("#reset")
let numResetsCountElement = document.querySelector("#num-resets")
let numResetsCount = 0;   

    resetButtonElement.addEventListener("click", function(){
        numResetsCount = numResetsCount + 1   
        numResetsCountElement.innerHTML = numResetsCount

        teamOneShotCount = 0
        teamOneShotCountElement.innerHTML = teamOneShotCount
        teamOneGoalCount =0;
        teamOneGoalCountElement.innerHTML = teamOneGoalCount

        teamTwoShotCount = 0;
        teamTwoShotCountElement.innerHTML = teamTwoShotCount
        teamTwoGoalCount =0;
        teamTwoGoalCountElement.innerHTML = teamTwoGoalCount

        
})