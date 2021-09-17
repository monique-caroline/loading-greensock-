//Criando a variavel que será animada
const loadingBalls = document.querySelectorAll('.js-loadingBall')

//Criando a animação com o objeto TweenMax, com função stagger que vai receber
//como primeiro parametro as bolas que vão ser animadas
//segundo parametro o tempo de cada animação
//terceiro - de que ponto vai começar a animação
TweenMax.staggerFromTo(
    loadingBalls,
    0.75,
    {
        opacity: 0,
        transform: 'scale(0)'
    },
    //como elas devem ficar, terceiro parametro
    {
        ease: Power3.easeInOut,
        opacity: 1,
        repeat: -1,
        transform: 'scale(1.2)',
        yoyo: true
    },
    //parametro tempo que deve esperar de um para o outro para recarregar
    0.2
)