let agentFull = document.querySelector(`.agent-full`);
let agentName = document.querySelector(`.agent-name`);
let info = document.querySelector(`.info`);

function repeat() {
    agentFull.innerHTML =``;
    agentName.innerHTML =``;
    agentName.classList.remove(`agent-name-active`);
    agentFull.classList.remove(`agent-full-active`)
}

let astraNode = document.querySelector(`#astra`);
let breachNode = document.querySelector(`#breach`);
let brimstoneNode= document.querySelector(`#brimstone`);
let chamberNode = document.querySelector(`#chamber`);
let cypherNode = document.querySelector(`#cypher`);
let deadlockNode = document.querySelector(`#deadlock`);
let fadeNode = document.querySelector(`#fade`);
let gekkoNode = document.querySelector(`#gekko`);
let harborNode = document.querySelector(`#harbor`);
let isoNode = document.querySelector(`#iso`);
let jettNode = document.querySelector(`#jett`);
let kayoNode = document.querySelector(`#kayo`);
let killjoyNode = document.querySelector(`#killjoy`);
let yoruNode = document.querySelector(`#yoru`);
let neonNode = document.querySelector(`#neon`);
let omenNode = document.querySelector(`#omen`);
let phoenixNode = document.querySelector(`#phoenix`);
let razeNode = document.querySelector(`#raze`);
let reynaNode = document.querySelector(`#reyna`);
let viperNode = document.querySelector(`#viper`);
let sageNode = document.querySelector(`#sage`);
let skyeNode = document.querySelector(`#skye`);
let sovaNode = document.querySelector(`#sova`);

astraNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/astra.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/astra-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
astraNode.addEventListener(`mouseout`, repeat)
breachNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/breach.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/breach-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
breachNode.addEventListener(`mouseout`, repeat)
brimstoneNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/brimstone.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/brimstone-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
brimstoneNode.addEventListener(`mouseout`, repeat)
chamberNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/chamber.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/chamber-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
chamberNode.addEventListener(`mouseout`, repeat)
cypherNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/cypher.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/cypher-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
cypherNode.addEventListener(`mouseout`, repeat)
deadlockNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/deadlock.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/deadlock-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
deadlockNode.addEventListener(`mouseout`, repeat)
fadeNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/fade.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/fade-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
fadeNode.addEventListener(`mouseout`, repeat)
gekkoNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/gekko.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/gekko-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
gekkoNode.addEventListener(`mouseout`, repeat)
harborNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/harbor.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/harbor-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
harborNode.addEventListener(`mouseout`, repeat)
isoNode.addEventListener(`mouseover`, function() {
    // agentFull.innerHTML += `<img src="assets/agents/iso.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/iso-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
isoNode.addEventListener(`mouseout`, repeat)
jettNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/jett.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/jett-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
jettNode.addEventListener(`mouseout`, repeat)
kayoNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/kayo.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/kayo-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
kayoNode.addEventListener(`mouseout`, repeat)
killjoyNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/killjoy.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/killjoy-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
killjoyNode.addEventListener(`mouseout`, repeat)
yoruNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/yoru.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/yoru-n.png" alt="">`
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
yoruNode.addEventListener(`mouseout`, repeat)
neonNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/neon.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/neon-n.png" alt="">`
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
neonNode.addEventListener(`mouseout`, repeat)
omenNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/omen.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/omen-n.png" alt="">`
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
omenNode.addEventListener(`mouseout`, repeat)
phoenixNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/phoenix.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/phoenix-n.png" alt="">`
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
phoenixNode.addEventListener(`mouseout`, repeat)
razeNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/raze.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/raze-n.png" alt="">`
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
razeNode.addEventListener(`mouseout`, repeat)
reynaNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/reyna.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/reyna-n.png" alt="">`
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
reynaNode.addEventListener(`mouseout`, repeat)
viperNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/viper.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/viper-n.png" alt="">`
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
viperNode.addEventListener(`mouseout`, repeat)
sageNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/sage.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/sage-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
sageNode.addEventListener(`mouseout`, repeat)
skyeNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/skye.png" alt="" class="agent-full">`
    agentName.innerHTML += `<img src="assets/agents/skye-n.png" alt="">`

    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
skyeNode.addEventListener(`mouseout`, repeat)
sovaNode.addEventListener(`mouseover`, function() {
    agentFull.innerHTML += `<img src="assets/agents/sova.png" alt="" class="agent-full">`;
    agentName.innerHTML += `<img src="assets/agents/sova-n.png" alt="">`;
    agentName.classList.add(`agent-name-active`);
    agentFull.classList.add(`agent-full-active`)
})
sovaNode.addEventListener(`mouseout`, repeat)
