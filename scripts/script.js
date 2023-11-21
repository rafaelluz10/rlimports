const mainContent= document.getElementById('main-content')
const cartBtt = document.getElementById("cart")
const categories = document.getElementsByClassName("category")
var category = "*"
var cart = []

for (i = 0; i < categories.length; i++) {
    if (i > 0) {
        let categoria = categories[i].innerHTML.toLowerCase()
        categories[i].addEventListener('click', () => setCategory(categoria))
    } else {
        categories[i].addEventListener('click', () => setCategory("*"))
    }
}

cartBtt.addEventListener('click', () => {location.href = "cart.html"})

class Produto {
    constructor(nome, tamanho, cor, preço, imagem, categoria) {
        this.nome = nome
        this.tamanho = tamanho
        this.cor = cor
        this.preço = preço
        this.id = Math.floor(Math.random() * 1000)
        this.imagem = imagem
        this.categoria = categoria
    }
    build() {
        return (`
        <div class="product" name="Teste">
        <img src="${this.imagem}" alt="">
        <div class="info">
            <h2>${this.nome}</h2>
            <p class="desc">${this.desc}</p>
        </div>
          <p>Tamanho:
            <select> `
            + this.tamanho.map(element =>
                `<option value="${element}">${element}</option>`
            ).join("\n")
            +
            `</select>
          </p>
          <p>Cor:
          <div class="colors">
            `
            + this.cor.map(val => `<div class="color-option" style="background-color: ${val};"></div>`).join("\n") +
            `
            </div>
          <div class="shop">
          <p class="price">R$ ${Number.parseFloat(this.preço).toFixed(2)}</p>
          <button class="addCart" onclick="addToCart(${this.id})"><span class="material-symbols-outlined">
          add_shopping_cart
          </span>Adicionar ao carrinho</button>
        </div>
        </div>
        `)
    }

    setSize(size) {
        this.size = size
    }

}

const products = [
    new Produto("Nike Air Max 97", [39,40,41,42,43,44], ["white", "black"], 625.00, "midia/Masculino/masculinoairmax97.png", ["masculino"]),
    new Produto("Nike Air Max TN", [39,40,41,42,43,44], ["black", "red", "blue", "cyan"], 700.90, "midia/Masculino/masculinoairmaxtn.png", ["masculino"]),
    new Produto("Tênis Nike Air Max SC", [39,40,41,42,43,44], ["black", "white"], 550.00, "midia/Página Inicial/airmaxsc.png", ["masculino"]),
    new Produto("Tênis Adidas Ultra Boost", [39,40,41,42,43,44], ["gray", "black", "white", "blue"], 1230.49, "midia/Lançamento/lançamentoadidasultra.png", ["masculino"]),
    new Produto("Tênis Nike Revolution 6", [39,40,41,42,43,44], ["black", "white", "red", "blue"], 159.60, "midia/Masculino/tenisnikerevolution6.png", ["masculino"]),
    new Produto("Tênis Puma Smash V2", [39,40,41,42,43,44], ["gray", "black", "green", "blue"], 267.35, "midia/Masculino/tenispumasmashv2.png", ["masculino"]),
    new Produto("Tênis Puma X-Ray 2", [39,40,41,42,43,44], ["red", "black", "white", "blue"], 560.25, "midia/Masculino/tenispumaxray2.png", ["masculino"]),
    new Produto("Tênis Vector X2", [39,40,41,42,43,44], ["brown", "gray", "white", "blue"], 345.50, "midia/Masculino/tenisvectorx2.png", ["masculino"]),

    new Produto("AllStar", [33,34,35,36,37], ["black", "red", "white"], 455.00, "midia/Feminino/allstar.png", ["feminino"]),
    new Produto("Vans", [33,34,35,36,37], ["black", "white", "brown"], 235.75, "midia/Feminino/vans.png", ["feminino"]),
    new Produto("Tênis Casual Lona Mari", [33,34,35,36,37], ["pink", "purple", "red"], 155.00, "midia/Feminino/teniscasuallonamari.png", ["feminino"]),
    new Produto("Tênis Adidas Breaknet", [33,34,35,36,37], ["white", "purple", "black"], 370.00, "midia/Feminino/adidasbreaknet.png", ["feminino"]),
    new Produto("Tênis Adidas Core Racer", [33,34,35,36,37], ["black", "white", "blue"], 300.00, "midia/Feminino/teniscoreracer.png", ["feminino"]),
    new Produto("Tênis Puma Carina", [33,34,35,36,37], ["white", "black", "red"], 256.99, "midia/Feminino/tenispumacarina.png", ["feminino"]),
    new Produto("Tênis Adidas Gel Impression 11", [33,34,35,36,37], ["pink", "black", "purple"], 347.00, "midia/Feminino/tenisasicsgelompression11.png", ["feminino"]),
    new Produto("Tênis Adidas Slip On", [33,34,35,36,37], ["pink", "black", "red"], 170.00, "midia/Feminino/tenisadidassliponsuperstar.png", ["feminino"]),

    new Produto("Adidas Infantil", [26,27,28,29,30,31,32,33,34], ["blue", "black", "white"], 75.90, "midia/Infantil/adidasinfantil.png", ["infantil"]),
    new Produto("Infantil Fashion", [26,27,28,29,30,31,32,33,34], ["pink", "red", "black"], 50.00, "midia/Infantil/infantilfashion.png", ["infantil"]),
    new Produto("Infantil Minecraft", [26,27,28,29,30,31,32,33,34], ["green", "black", "blue"], 125.00, "midia/Infantil/infantilminecraft.png", ["infantil"]),
    new Produto("Tênis Kappa Line", [26,27,28,29,30,31,32,33,34], ["blue", "black", "white"], 56.00, "midia/Infantil/teniskappaline.png", ["infantil"]),
    new Produto("Tênis Adidas Tensaur Sport 2", [26,27,28,29,30,31,32,33,34], ["green", "black", "white"], 59.90, "midia/Infantil/tenisadidastensaursport2.png", ["infantil"]),
    new Produto("Tênis Kechers Dreamy", [26,27,28,29,30,31,32,33,34], ["purple", "red", "black"], 47.50, "midia/Infantil/tenisskechersdreamydancer.png", ["infantil"]),
    new Produto("Tênis Confete", [26,27,28,29,30,31,32,33,34], ["pink", "red", "purple"], 36.00, "midia/Infantil/tenisconfete.png", ["infantil"]),
    new Produto("Tênis Asics Fantasy 4 PS", [26,27,28,29,30,31,32,33,34], ["black", "white"], 130.00, "midia/Infantil/tenisasicsfantasy4ps.png", ["infantil"]),

    new Produto("Air Force 1 Branco", [39,40,41,42,43,44], ["white"], 759.99, "midia/Página Inicial/airforce1.png", ["ofertas"]),  
    new Produto("Air Jordan 1", [39,40,41,42,43,44], ["black", "red", "white"], 950.99, "midia/Página Inicial/airjordan1.png", ["ofertas"]),  
    new Produto("Adidas NMD", [39,40,41,42,43,44], ["black", "white"], 350.99, "midia/Masculino/tenisamd.png", ["ofertas"]),  
    new Produto("Air Force 1 Preto", [39,40,41,42,43,44], ["black"], 750.00, "midia/Lançamento/lançamentoairforcepreto.jpeg", ["ofertas"]),
    new Produto("Tênis New Balance", [39,40,41,42,43,44], ["black","white","brown"], 375.99, "midia/Ofertas/ofertanewbalance.png", ["ofertas"]),
    new Produto("Tênis Fila Classic Runner", [39,40,41,42,43,44], ["white","black","red"], 280.00, "midia/Ofertas/ofertafilaclassicrunner.png", ["ofertas"]),
    new Produto("Tênis Tommy Hilfiger", [39,40,41,42,43,44], ["white"], 450.00, "midia/Ofertas/ofertatommyhilfiger.png", ["ofertas"]),  
    new Produto("Yezzy From Runner Kanye West", [39,40,41,42,43,44], ["black"], 2375.50, "midia/Ofertas/yezzyfrunnerkanyewest.png", ["ofertas"]),
]   

function addToCart(id) {
    prod = products.find(val => val.id == id);
    if (prod && !cart.includes(prod)) {
        cart.push(prod)
        console.log(cart)
        sessionStorage.setItem("items", JSON.stringify(cart))
    } else if (cart.includes(prod)) {
        alert("Produto já adicionado!")
    }
}

updateList()

getItems()
// verificar items do carrinho
function getItems() {
    let items = JSON.parse(sessionStorage.getItem("items"))
    if (items) {
        cart = items
    }
}


function setCategory(categoria) {
    category = categoria
    console.log(category)
    updateList()
} 

function updateList() {
    mainContent.innerHTML = ""
    if (category == "*") {
        if (products.length) {
            products.forEach(element => {mainContent.innerHTML += element.build()})
        } else {
            mainContent.innerHTML = "Nenhum produto encontrado!"
        }
    } else {
        let productsFilter = products.filter(val => val.categoria.includes(category))
        if (productsFilter.length) {
            productsFilter.forEach(element => {mainContent.innerHTML += element.build() })
        } else {
            console.log("Nenhum encontrado")
            mainContent.innerHTML = "Nenhum produto encontrado!"
        }
    }
}

toup = document.getElementById("toup")

addEventListener('scroll', () => {
    scroll = this.scrollY
    if (scroll > 100) {
        toup.style.display = "block"
    } else {
        toup.style.display = "none"
    }
})

toup.addEventListener('click', () => {
    this.scrollTo({top: 0, behavior: 'smooth'})
})

