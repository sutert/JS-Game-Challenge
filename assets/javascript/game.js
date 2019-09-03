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

let resetButton = document.querySelector("#reset")
        //console.log(resetButton)
let numResetsCount = document.querySelector("#num-resets")
    let numReset =0

    numResetsCount.addEventListener("click", function(){
        teamTwoShotCount = teamTwoShotCount + 1   
        teamTwoShotCountElement.innerHTML = teamTwoShotCount       
        
})