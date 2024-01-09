document.addEventListener('DOMContentLoaded', () => {
    efeitoScroll()
    menuRwd()
})

function efeitoScroll() {
    const observerSections = new IntersectionObserver(observadorElementosSecoes, {threshold:0})
    const secoes = document.querySelectorAll('.conteudo-escondido')

    secoes.forEach(secao => {
        observerSections.observe(secao)
    })

    function observadorElementosSecoes(secoes) {
        secoes.forEach(secao => {

            if (secao.isIntersecting) {
                mostrarSecao(secao)
            }
        })
    }

    function mostrarSecao(elemento) {
        elemento.target.classList.add('js-conteudo-mostrar')
    }
}

function menuRwd() {
    const body = document.body
    const categoriasBox = document.querySelector('.header-categorias-box')
    const btn = document.querySelector('.header-menu-rwd-btn')
    const categorias = document.querySelectorAll('.header-categoria-link')

    categorias.forEach(categoria => {
        categoria.addEventListener('click', mostrarSecao)
    })


    btn.addEventListener('click', () => {
        categoriasBox.classList.toggle('header-menu-visivel')

        if (categoriasBox.classList.contains('header-menu-visivel')) {
            btn.src = 'imgs/menu-rwd/menu-rwd-fechar.svg'

            removerScroll()
        }
        else {
            btn.src = 'imgs/menu-rwd/menu-rwd-abrir.svg'

            adicionarScroll()
        }
    })

    function mostrarSecao() {
        btn.src = 'imgs/menu-rwd/menu-rwd-abrir.svg'

        categoriasBox.classList.remove('header-menu-visivel')

        body.classList.add('scroll-visivel')
    }

    function removerScroll() {
        body.classList.remove('scroll-visivel')
        body.classList.add('scroll-escondido')
    }

    function adicionarScroll() {
        body.classList.remove('scroll-escondido')
        body.classList.add('scroll-visivel')
    }
}

function mostrar(habilidade) {
    const parametro = habilidade
    const boxConteudo = document.querySelector('.habilidades-info')

    let divConteudo
    let conteudo

    if (boxConteudo.classList.contains('habilidades-fechar')) {
        boxConteudo.classList.remove('habilidades-fechar')
    }

    validarParametro()
    mostrarConteudo()

    function validarParametro() {
        if (parametro == 'html') {
            conteudo = 'HTML é uma linguagem de marcação usada para criar páginas da web. Na qual é usado tags para estruturar o conteúdo.'
        }
        else if (parametro == 'css') {
            conteudo = 'CSS é uma linguagem usada para estilizar a apresentação de páginas da web, definindo o design, layout e aparência visual dos elementos HTML.'
        }
        else if (parametro == 'js') {
            conteudo = 'JavaScript é uma linguagem de programação, amplamente usada para criar interatividade em páginas da web, permitindo manipulação dinâmica de conteúdo e comportamento dos elementos da página.'
        }
        else if (parametro == 'tailwind') {
            conteudo = 'Tailwind CSS é um framework de CSS utilitário que permite a construção de interfaces web de forma eficiente, usando classes predefinidas para estilização.'
        }
        else if (parametro == 'sass') {
            conteudo = 'Sass é uma linguagem de estilo (CSS preprocessor) que estende a sintaxe do CSS, permitindo o uso de funções e aninhamento para facilitar a escrita e organização do código CSS.'
        }
        else if (parametro == 'photoshop') {
            conteudo = 'O Photoshop é um software de edição de imagens, amplamente usado para manipulação, retoque e criação de gráficos, fotos e designs, com diversas ferramentas de edição.'
        }
        else if (parametro == 'git') {
            conteudo = 'Git é um sistema de controle de versão que registra alterações em arquivos, facilitando o gerenciamento do histórico de um projeto de software.'
        }
    }

    function mostrarConteudo() {
        divConteudo = `
            <img class="habilidades-btn-fechar" src="imgs/habilidades/fechar.svg" alt="Botão de fechar modal de habilidade">
            <p class="habilidades-texto">${conteudo}</p>
        `

        boxConteudo.innerHTML = divConteudo

        fecharHabilidade()
    }


    function fecharHabilidade() {
        const btnFechar = document.querySelector('.habilidades-btn-fechar')

        btnFechar.addEventListener('click', esconder)

        function esconder() {
            boxConteudo.classList.add('habilidades-fechar')
        }
    }
}
