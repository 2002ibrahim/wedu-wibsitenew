let login = document.getElementById('login1')
let login2 = document.getElementById('login2')

const LogIn = () => {
    login.style.display = "flex";
    login2.style.display = "none";
}
const LogInCancel = () =>{
    login.style.display = "none";
    login2.style.display = "none";
}

const LogIn2Show = ()=>{
    login.style.display = "none";
    login2.style.display = "flex";
}


let plan1 = document.getElementById("plan1")
let home = document.getElementById("home")
let words = document.getElementById("words")
let offer = document.getElementById("offer")
let built = document.getElementById("built")
let leader = document.getElementById("leader")
let cilent = document.getElementById("cilent")
let footer2 = document.getElementById("footer2")
let header = document.getElementById("header-top")
let checkout = document.getElementById("checkout")

const Plan = () => {

    plan1.style.display = "block"
    home.style.display = "none"
    words.style.display = "none"
    offer.style.display = "none"
    built.style.display = "none"
    leader.style.display = "none"
    cilent.style.display = "none"
    option.style.display = "none"
    footer2.style.display = "none"
    checkout.style.display = "none"
    header.style.backgroundColor = "#FFD7EF"

}

const Home = () => {
    home.style.display = "block"
    words.style.display = "block"
    offer.style.display = "block"
    built.style.display = "block"
    leader.style.display = "block"
    cilent.style.display = "block"
    option.style.display = "flex"
    footer2.style.display = "block"
    plan1.style.display = "none"
    checkout.style.display = "none"
    header.style.backgroundColor = "#fff"
}


const Checkout = ()=> {
    checkout.style.display = "flex"
    plan1.style.display = "none"
    home.style.display = "none"
    words.style.display = "none"
    offer.style.display = "none"
    built.style.display = "none"
    leader.style.display = "none"
    cilent.style.display = "none"
    option.style.display = "none"
    footer2.style.display = "none"
    header.style.backgroundColor ="#fff"

}