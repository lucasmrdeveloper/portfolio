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
            conteudo = 'Utilizo HTML de forma semântica e estruturada, garantindo acessibilidade, organização do conteúdo e melhor entendimento tanto para o usuário quanto para mecanismos de busca.'
        }
        else if (parametro == 'css') {
            conteudo = 'Trabalho com CSS focado em layouts responsivos, utilizando Flexbox e Grid para criar interfaces adaptáveis a diferentes dispositivos. Busco sempre equilíbrio entre estética, legibilidade e usabilidade.'
        }
        else if (parametro == 'js') {
            conteudo = 'JavaScript é uma linguagem de programação, amplamente usada para criar interatividade em páginas da web, permitindo manipulação dinâmica de conteúdo e comportamento dos elementos da página.'
        }
        else if (parametro == 'react') {
            conteudo = 'Utilizo React para criar interfaces componentizadas e dinâmicas, trabalhando com JSX, estado (useState) e renderização condicional. Tenho experiência na construção de SPAs, focando em organização de componentes, reaproveitamento de código e boa experiência do usuário.'
        }
        else if (parametro == 'tailwind') {
            conteudo = 'Utilizo Tailwind para criar interfaces rápidas, consistentes e responsivas, utilizando classes utilitárias diretamente no HTML. Essa abordagem acelera o desenvolvimento e garante padronização visual sem perder flexibilidade.'
        }
        else if (parametro == 'sass') {
            conteudo = 'Utilizo Sass para organizar e escalar estilos CSS, trabalhando com variáveis, aninhamento e modularização. Isso facilita a manutenção do código, reaproveitamento de estilos e evolução visual dos projetos.'
        }
        else if (parametro == 'git') {
            conteudo = 'Utilizo Git para versionamento de código, organização de projetos e controle de alterações, mantendo histórico limpo e facilitando manutenção e evolução dos projetos.'
        }
        else if (parametro == 'wordpress') {
            conteudo = 'Utilizo WordPress para desenvolver sites institucionais profissionais, focando em performance, facilidade de gerenciamento e autonomia do cliente para editar conteúdos no dia a dia.'
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
