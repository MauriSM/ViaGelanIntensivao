
export const catalogo = [
    { id: "1", marca: 'Zara', nome: 'Camisa Larga com Bolsos', preco: 70, imagem: 'product-1.jpg', feminino: false, },
    { id: "2", marca: 'Zara', nome: 'Casaco Reto com Lã', preco: 85, imagem: 'product-2.jpg', feminino: true, },
    { id: "3", marca: 'Zara', nome: 'Jaqueta com Efeito Camurça', preco: 60, imagem: 'product-3.jpg', feminino: false, },
    { id: "4", marca: 'Zara', nome: 'Sobretudo em Mescla de Lã', preco: 160, imagem: 'product-4.jpg', feminino: false, },
    { id: "5", marca: 'Zara', nome: 'Camisa Larga Acolchoada de Veludo Cotelê', preco: 110, imagem: 'product-5.jpg', feminino: false, },
    { id: "6", marca: 'Zara', nome: 'Casaco de Lã com Botões', preco: 170, imagem: 'product-6.jpg', feminino: true, },
    { id: "7", marca: 'Zara', nome: 'Casaco com Botões', preco: 75, imagem: 'product-7.jpg', feminino: true, },
    { id: "8", marca: 'Zara', nome: 'Colete Comprido com Cinto', preco: 88, imagem: 'product-8.jpg', feminino: true, }
];

export function saveLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function recoverLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));

}

export function deleteFromLocalStorage(chave){
    localStorage.removeItem(chave);
}


export function drawCartProdSimple(idProd, idContainerHTML, qtdProd) {

    const product = catalogo.find(p => p.id === idProd);
    const containerProdCart = document.getElementById(idContainerHTML);

    const elementArticle = document.createElement("article");
    const articleClassList = ["flex", "bg-slate-100", "rounded-lg", "p-1", "relative", "mb-2", "w-92"];

    for (const articleClass of articleClassList) {
        elementArticle.classList.add(articleClass);
    }

    const prodCard = `<img src="./assets/img/${product.imagem}" alt="Carrinho: ${product.nome}" class="h-24 rounded-lg">   
    <div class="p=2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${product.nome}</p>
        <p class="text-slate-500 text-xs">Tamanho: M</p>
        <p class="text-green-600 text-lg">$${product.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-2 right-5 text-lg">
       <p id="quant-${product.id}" class="ml-2" >${qtdProd}</p>
    </div>`;
    elementArticle.innerHTML = prodCard;
    containerProdCart.appendChild(elementArticle);

}