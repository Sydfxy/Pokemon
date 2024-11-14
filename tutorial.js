// Tasks:
//  Randomly generate bushes
//  Randomly generate pokeballs
//  Make the player move when the arrow keys are pressed
//  Make the player interact with the pokeballs
    // 1. When player collides with a pokeball, log "pokeball caught" to the console
    // 2. It'll run the randomize Pokemon fetch API function
    // 3. It'll display the Pokemon on the screen


// Challenges
// Level 1:
// Add a randomizer logic for the pokemon when player tries to catch it
// If the player catches the pokemon, display a "You caught a new pokemon!" message 

// Level 2:
// Add a "pokeball caught" animation
// If the player doesn't catch the pokemon, display a "You missed it!" message

// Level 3: 
// Add another event listener for holding down the Shift key + arrow keys, make the player run

const NUM_BUSHES = 1000
const NUM_BALLS = 5
const player = document.querySelector('.player')
const player_steps = 2
const player_run = 10
const player_pos = {
    x:parseInt(window.innerWidth/2),
    y:parseInt(window.innerHeight/2)
} 
const player_vel = {
    x: 0,
    y: 0
}

function createBushes(){
    for (let i = 0; i < NUM_BUSHES; i++){
        // 1. Create a div
        const div = document.createElement('div')
        //2. Add the bush class to it
        div.classList.add('bush')
        //3. Set the left and top position randomly (x,y coordinates)
        div.style.left = Math.random() * 100 + '%'
        // div.style.right = Math.random() * 100 + '%'
        // div.style.bottom = Math.random() * 100 + '%'
        div.style.top = Math.random() * 100 + '%'


        //4. Append it to the body
        document.body.appendChild(div)
    }
}


function createBalls(){
    for (let i = 0; i < NUM_BALLS; i++){
        // 1. Create a div
        const div = document.createElement('div')
        //2. Add the pokeball class to it
        div.classList.add('pokeball')
        //3. Set the left and top position randomly (x,y coordinates)
        div.style.left = Math.random() * 100 + '%'
        // div.style.right = Math.random() * 100 + '%'
        // div.style.bottom = Math.random() * 100 + '%'
        div.style.top = Math.random() * 100 + '%'


        //4. Append it to the body
        document.body.appendChild(div)
    }
}


function run(){
    // Update the player position (x,y)
    player_pos.x += player_vel.x
    // player_pos.x = player_vel.x = 3
    // player_pos.x = 23
    player_pos.y += player_vel.y

    //update the player style
    player.style.left = player_pos.x + 'px'
    player.style.bottom = player_pos.y + 'px'

    // check for collisions
    // checkCollisions()

    requestAnimationFrame(run)
}

function init(){
    createBushes()
    createBalls()
    run()
}

init()

// == Event Listeners ==

window.addEventListener('keydown',(event)=>{

    console.log('event =>', event)
    console.log('event.key =>', event.key)

    // -- Setting the logic for key pressed and player steps --
    if(event.key === 'ArrowRight'|| event.key === 'd'){
        console.log('player is moving right')
        player_vel.x = player_steps
        player.style.backgroundImage = 'url("player_right.png")'
    }

    if(event.key === 'ArrowLeft' || event.key === 'a'){
        console.log('player is moving left')
        player_vel.x = -player_steps
        player.style.backgroundImage = 'url("player_left.png")'
    }

    if(event.key === 'ArrowUp'|| event.key === 'w'){
        console.log('player is moving up')
        player_vel.y = player_steps
        player.style.backgroundImage = 'url("player_front.png")'
    }

    if(event.key === 'ArrowDown' || event.key === 's'){
        console.log('player is moving down')
        player_vel.y = -player_steps
        player.style.backgroundImage = 'url("player_back.png")'
    }

    // Homework: Shift key check to set the player to run
    // Shift key to set the player to run
    if(event.key === 'Shift'){
        console.log('player is running')
        player_vel.x = player_run
        player_vel.y = -player_run
    }

    // -- Setting the player animation
    player.classList.add('active')

})

window.addEventListener('keyup',(event)=>{

    console.log('event =>', event)
    console.log('player is not moving')


    player_vel.x = 0
    player_vel.y = 0
    
    // Remove the active class (walking animation)
    player.classList.remove('active')

})