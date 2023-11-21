var cart = []

class Produto {
    constructor(nome, tamanho, cor, preço, imagem) {
        this.nome = nome
        this.tamanho = tamanho
        this.cor = cor
        this.preço = preço
        this.id = Math.floor(Math.random() * 1000)
        this.imagem = imagem
    }

    build() {
        return (`<div class="main-content">
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
            + this.cor.map(val => `<div class="color">${val}</div>`).join("\n") +
            `
          <div class="shop">
          <p class="price">R$ ${Number.parseFloat(this.preço).toFixed(2)}</p>
          <button class="addCart" onclick="addToCart(${this.id})"><span class="material-symbols-outlined">
          <button onclick="addToCart(${this.id})">Adicionar ao Carrinho</button>
        </div>
        `)
    }

    setSize(size) {
        this.size = size
    }

}


const produtos = [
    new Produto("Tênis", [27, 29, 31, 34, 36, 37, 38], ["Branco", "Preto", "Cinza"], 100.00, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-WH90qHR4S_1ALmw0cBzmnu_caauI_TquGxIgNoznpv331PAokIOD73amYpjm74ivL0&usqp=CAU"),
    new Produto("Meia", [27, 29, 31, 34, 36, 37, 38], ["Branco", "Preto", "Cinza"], 10.00, )
]

function addToCart(id) {
    prod = produtos.find(val => val.id == id);
    if (prod) {
        cart.push(prod)
        console.log(cart)
        sessionStorage.setItem("items", JSON.stringify(cart))
        location.href = "Carrinho de compras/home.html"
    }
}

document.body.innerHTML = produtos.map(val => val.build())