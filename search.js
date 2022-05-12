
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-card-container]")
const searchInput = document.querySelector("[data-search")

let users = []

searchInput.addEventListener("input", e =>{
    const value = e.target.value
    console.log(users)
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    users = data.map(user =>{
    const card = userCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textConent = user.name
    body.textConent = user.email
    userCardContainer.append(card)
    return { name:users.name, email: user.email, element: card }
    })
})