const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const backBtt = document.getElementById("back");
var cartProducts = []
var items
console.log(cartProducts.length);

backBtt.addEventListener('click', () => { location.href = "index.html" })

// Função para adicionar um item ao carrinho

class Item {
    nome
    preco
    quantidade
    total
    id
    imagem
    cor
    tamanho

    constructor(nome, preco, quantidade, tamanho, imagem, id) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.total = this.preco * this.quantidade;
        this.id = id
        this.tamanho = tamanho
        this.imagem = imagem
    }

    build() {
        return `<li>
        <img src="${this.imagem}" alt="${this.nome}">
        <div class="product-info">
            <h3>${this.nome}</h3>
            <p>Preço: R$${this.preco.toFixed(2)}</p>
            <p>Quantidade: ${this.quantidade}</p>
            <p>Total: R$${this.total.toFixed(2)}</p>
        </div>
        <button class="remove-button" onclick="removeItem(${this.id})">Remover</button>
    </li>`;
    }

    toObj() {
        return {
            nome: this.nome,
            preco: this.preco,
            quantidade: this.quantidade,
        }
    }
}

getItems()
// verificar items do carrinho
function getItems() {
    items = JSON.parse(sessionStorage.getItem("items"))
    if (items) {
        cartProducts = items.map(val => new Item(val.nome, val.preço, 1, 38, val.imagem, val.id))
    }
    updateList()
}

// document.forms["product"].addEventListener("submit", (e) => {
//     e.preventDefault();

//     let name = document.forms["product"]["name"].value
//     let price = Number.parseFloat(document.forms["product"]["preco"].value)
//     let quant = Number.parseInt(document.forms["product"]["quantidade"].value)

//     console.log(name, price, quant)

//     addItemToCart(name, price, quant)
// })

function addItemToCart(productName, price, quantity) {
    // const listItem = document.createElement("li");
    // listItem.innerHTML = `
    //     <img src="product.jpg" alt="${productName}">
    //     <div class="product-info">
    //         <h3>${productName}</h3>
    //         <p>Preço: R$${price.toFixed(2)}</p>
    //         <p>Quantidade: 1</p>
    //         <p>Total: R$${price.toFixed(2)}</p>
    //     </div>
    //     <button class="remove-button" onclick="removeItem(this)">Remover</button>
    // `;
    // cartItems.appendChild(listItem);

    // // Atualizar o total do carrinho
    // updateCartTotal(price);

    const item = new Item(productName, price, quantity)



    cartProducts.push(item)
    console.log(cartProducts)
    updateList()
}

function updateList() {
    let content = ""

    if (cartProducts) {
        for (let i = 0; i < cartProducts.length; i++) {
            content += cartProducts[i].build()
        }
    } else {
        content = "<center><p>Não há itens na lista!</p></center>"
    }
    console.log(content)
    cartItems.innerHTML = content

    updateCartTotal()
}

// Função para remover um item do carrinho
function removeItem(id) {
    cartProducts = cartProducts.filter((val) => val.id != id)
    items = items.filter((val) => val.id != id)
    updateList()
    sessionStorage.setItem("items", JSON.stringify(items))
    console.log(items)
}

// Função para atualizar o total do carrinho
function updateCartTotal() {
    let total = 0
    for (i in cartProducts) {
        total += cartProducts[i].total
    }

    cartTotal.innerText = `R$ ${total.toFixed(2)}`
}
