let listaCarros = [
    {
        "img": "https://cdn.autopapo.com.br/box/uploads/2021/08/11162502/fiat-uno-furgao-branco-de-frente-1920x1268.jpg",
        "modelo": "Uno",
        "marca": "Fiat",
        "cor": "Branco",
        "motor": "1.0",
        "tipo": "carro",
        "valor": "R$20.000,00"
    },
    {
        "img": "https://http2.mlstatic.com/D_NQ_NP_698938-MLB51059995946_082022-O.webp",
        "modelo": "Crosser",
        "marca": "Yamaha",
        "cor": "Preta",
        "motor": "150",
        "tipo": "moto",
        "valor": "R$15.000,00"
    },
    {
        "img": "https://d2r9epyceweg5n.cloudfront.net/stores/001/218/750/products/8522370385-257444-053995da2b3e2c81c815938752795913-640-0.jpg",
        "modelo": "Tubarão",
        "marca": "Mercedes",
        "cor": "Prata",
        "motor": "OM 924",
        "tipo": "caminhao",
        "valor": "R$150.000,00"
    },
    {
        "img": "https://www.tragial.com.br/wp-content/uploads/2020/02/opala.png",
        "modelo": "Opala",
        "marca": "Chevrolet",
        "cor": "Branco",
        "motor": "v8",
        "tipo": "classs",
        "valor": "R$50.000,00"
    },
    {
        "img": "https://motosnovas.com.br/wp-content/uploads/2015/06/cb1000r-2016.jpg",
        "modelo": "CB1000",
        "marca": "honda",
        "cor": "tricolo",
        "motor": "1000",
        "tipo": "sport",
        "valor": "R$50.000,00"
    },
]

function home() {
    // selecionando a ID mãe onde vou criar as demais divs
    let cardCarros = document.getElementById("cards");
    // Limpar o conteúdo da div cards antes de adicionar novos elementos
    cardCarros.innerHTML = '';

    // Mapeando Carros e criando divs dinâmicas
    listaCarros.map((carro, posicao) => {
        // Criação de HTML dinâmico pelo JavaScript
        cardCarros.innerHTML += `
        <div class="cards-veic">
            <div class="card-vec">
                <div class="card-body">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <h5 class="card-title">Modelo - ${carro.modelo}</h5>
                <h6 class="card-title">Fabricante - ${carro.marca}</h6>
                <h6 class="card-title">Cor - ${carro.cor}</h6>
                <h6 class="card-title">Motor - ${carro.motor}</h6>
                <h6 class="card-title">Preço -  ${carro.valor}</h7>
                </div>
                <button>Comprar</button>
                <button>Teste Drive</button>
            </div>
        </div>
        `;
    });
}

function carro() {
    // selecionando a ID mãe onde vou criar as demais divs
    let cardCarros = document.getElementById("cards");
    // Limpar o conteúdo da div cards antes de adicionar novos elementos
    cardCarros.innerHTML = '';

    // Mapeando Carros e criando divs dinamicas
    listaCarros.map((carro) => {
        if (carro.tipo == "carro") {
            // selecionando a ID mãe onde vou criar as demais divs
            let cardCarros = document.getElementById("cards");
            // Criação de html dianamico pelo JSs
            cardCarros.innerHTML += `
            <div class="cards-veic">
                <div class="card-vec">
                    <div class="card-body">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <h5 class="card-title">Modelo - ${carro.modelo}</h5>
                    <h6 class="card-title">Fabricante - ${carro.marca}</h6>
                    <h6 class="card-title">Cor - ${carro.cor}</h6>
                    <h6 class="card-title">Motor - ${carro.motor}</h6>
                    <h6 class="card-title">Preço -  ${carro.valor}</h7>
                    </div>
                    <button>Comprar</button>
                    <button>Teste Drive</button>
                </div>
            </div>
        `
        }
    });
}

function moto() {
    // selecionando a ID mãe onde vou criar as demais divs
    let cardCarros = document.getElementById("cards");
    // Limpar o conteúdo da div cards antes de adicionar novos elementos
    cardCarros.innerHTML = '';
    
    // Mapeando Carros e criando divs dinamicas
    listaCarros.map((carro) => {
        if (carro.tipo == "moto") {
            // selecionando a ID mãe onde vou criar as demais divs
            let cardCarros = document.getElementById("cards");
            // Criação de html dianamico pelo JSs
            cardCarros.innerHTML += `
            <div class="cards-veic">
                <div class="card-vec">
                    <div class="card-body">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <h5 class="card-title">Modelo - ${carro.modelo}</h5>
                    <h6 class="card-title">Fabricante - ${carro.marca}</h6>
                    <h6 class="card-title">Cor - ${carro.cor}</h6>
                    <h6 class="card-title">Motor - ${carro.motor}</h6>
                    <h6 class="card-title">Preço -  ${carro.valor}</h7>
                    </div>
                    <button>Comprar</button>
                    <button>Teste Drive</button>
                </div>
            </div>
        `
        }
    });
}

function caminhao() {
    // selecionando a ID mãe onde vou criar as demais divs
    let cardCarros = document.getElementById("cards");
    // Limpar o conteúdo da div cards antes de adicionar novos elementos
    cardCarros.innerHTML = '';
    
    // Mapeando Carros e criando divs dinamicas
    listaCarros.map((carro) => {
        if (carro.tipo == "caminhao") {
            // selecionando a ID mãe onde vou criar as demais divs
            let cardCarros = document.getElementById("cards");
            // Criação de html dianamico pelo JSs
            cardCarros.innerHTML += `
            <div class="cards-veic">
                <div class="card-vec">
                    <div class="card-body">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <h5 class="card-title">Modelo - ${carro.modelo}</h5>
                    <h6 class="card-title">Fabricante - ${carro.marca}</h6>
                    <h6 class="card-title">Cor - ${carro.cor}</h6>
                    <h6 class="card-title">Motor - ${carro.motor}</h6>
                    <h6 class="card-title">Preço -  ${carro.valor}</h7>
                    </div>
                    <button>Comprar</button>
                    <button>Teste Drive</button>
                </div>
            </div>
        `
        }
    });
}

function classs() {
    // selecionando a ID mãe onde vou criar as demais divs
    let cardCarros = document.getElementById("cards");
    // Limpar o conteúdo da div cards antes de adicionar novos elementos
    cardCarros.innerHTML = '';
    
    // Mapeando Carros e criando divs dinamicas
    listaCarros.map((carro) => {
        if (carro.tipo == "classs") {
            // selecionando a ID mãe onde vou criar as demais divs
            let cardCarros = document.getElementById("cards");
            // Criação de html dianamico pelo JSs
            cardCarros.innerHTML += `
            <div class="cards-veic">
                <div class="card-vec">
                    <div class="card-body">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <h5 class="card-title">Modelo - ${carro.modelo}</h5>
                    <h6 class="card-title">Fabricante - ${carro.marca}</h6>
                    <h6 class="card-title">Cor - ${carro.cor}</h6>
                    <h6 class="card-title">Motor - ${carro.motor}</h6>
                    <h6 class="card-title">Preço -  ${carro.valor}</h7>
                    </div>
                    <button>Comprar</button>
                    <button>Teste Drive</button>
                </div>
            </div>
        `
        }
    });
}

function sport() {
    // selecionando a ID mãe onde vou criar as demais divs
    let cardCarros = document.getElementById("cards");
    // Limpar o conteúdo da div cards antes de adicionar novos elementos
    cardCarros.innerHTML = '';
    
    // Mapeando Carros e criando divs dinamicas
    listaCarros.map((carro) => {
        if (carro.tipo == "sport") {
            // selecionando a ID mãe onde vou criar as demais divs
            let cardCarros = document.getElementById("cards");
            // Criação de html dianamico pelo JSs
            cardCarros.innerHTML += `
            <div class="cards-veic">
                <div class="card-vec">
                    <div class="card-body">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <h5 class="card-title">Modelo - ${carro.modelo}</h5>
                    <h6 class="card-title">Fabricante - ${carro.marca}</h6>
                    <h6 class="card-title">Cor - ${carro.cor}</h6>
                    <h6 class="card-title">Motor - ${carro.motor}</h6>
                    <h6 class="card-title">Preço -  ${carro.valor}</h7>
                    </div>
                    <button>Comprar</button>
                    <button>Teste Drive</button>
                </div>
            </div>
        `
        }
    });
}