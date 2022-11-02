const praysListHeader = document.querySelectorAll("[data-class]")
const quoteFooter = document.querySelector(".quote q")
const buttonTheme = document.querySelector(".theme")
const pageWrapper = document.querySelector(".page-wrapper")

const phrases = {
  0: "Confesso com toda a Igreja que Maria é uma pura criatura saída das mãos do Altíssimo. Comparada, portanto, à Majestade infinita ela é menos que um átomo, é, antes, um nada, pois que só ele é “Aquele que é” (Ex 3, 14) e, por conseguinte, este grande Senhor, sempre independente e bastando-se a si mesmo, não tem nem teve jamais necessidade da Santíssima Virgem para a realização de suas vontades e a manifestação de sua glória. Basta-lhe querer para tudo fazer. Digo, entretanto, que, supostas as coisas como são, já que Deus quis começar e acabar suas maiores obras por meio da Santíssima Virgem, depois que a formou, é de crer que não mudará de conduta nos séculos dos séculos, pois é Deus, imutável em sua conduta e em seus sentimentos",
  1: "Foi pela Santíssima Virgem Maria que Jesus Cristo veio ao mundo, e é também por ela que deve reinar no mundo.",
  2: "Por meio de Maria, Deus Pai quer que aumente sempre o número de seus filhos, até a consumação dos séculos, e diz-lhes estas palavras: In Iacob inhabita – Habita em Jacob (Ecli 24, 13), isto é, faze tua morada e residência em meus filhos e predestinados, figurados por Jacob e não nos filhos do demônio e nos réprobos, que Esaú figura.",
  3: "Assim como na geração natural e corporal há um pai e uma mãe, há, na geração sobrenatural, um pai que é Deus e uma mãe, Maria Santíssima. Todos os verdadeiros filhos de Deus e os predestinados têm Deus por pai, e Maria por mãe; e quem não tem Maria por mãe, não tem Deus por pai.",
  4: "Quando Maria lança suas raízes em uma alma, maravilhas de graça se produzem, que só ela pode produzir, pois é a única Virgem fecunda que não teve jamais, nem terá semelhante em pureza e fecundidade.",
  5: "Jesus Cristo, nosso salvador, verdadeiro Deus e verdadeiro homem, deve ser o fim último de todas as nossas devoções; de outro modo, elas serão falsas e enganosas. Jesus Cristo é o alfa e omega, o princípio e o fim de todas as coisas.",
  6: "Nós só trabalhamos, como diz o apóstolo, para tornar todo homem perfeito em Jesus Cristo, pois é em Jesus Cristo    que habita toda a plenitude da Divindade e todas as outras plenitudes de graças, de virtudes, de perfeições; porque nele somente fomos abençoados de toda a bênção espiritual; porque é nosso único mestre que deve ensinar-nos, nosso único Senhor de quem devemos depender, nosso único chefe ao qual devemos estar unidos, nosso único modelo, com o qual devemos conformar-nos, nosso único médico que nos há de curar, nosso único pastor que nos há de alimentar, nosso único caminho que devemos trilhar, nossa única verdade que devemos crer, nossa única vida que nos há de vivificar, e nosso tudo em todas as coisas, que deve bastar-nos. Abaixo do céu nenhum outro nome foi dado aos homens, pelo qual devamos ser salvos",
  7: "Se estabelecermos, portanto, a sólida devoção à Santíssima Virgem, teremos contribuído para estabelecer com mais perfeição a devoção a Jesus Cristo, teremos proporcionado um meio fácil e seguro de achar Jesus Cristo. Se a devoção à Santíssima Virgem nos afastasse de Jesus Cristo, seria preciso rejeitá-la como uma ilusão do demônio. Mas é tão o contrário, que, como já fiz ver e farei ver, ainda, nas páginas seguintes, esta devoção só nos é necessária para encontrar Jesus Cristo, amá-lo ternamente e fielmente servi-lo.",
  8: "Do que Jesus é para nós, concluímos que não nos pertencemos, como diz o apóstolo (1Cor 6, 19), e sim a ele, inteiramente, como seus membros e seus escravos, comprados que fomos por um preço infinitamente caro, o preço de seu sangue. Antes do batismo o demônio nos possuía como escravos, e o batismo nos transformou em escravos de Jesus Cristo e só devemos viver, trabalhar e morrer para produzir frutos para o homem-Deus (Rom 7, 4), glorificá-lo em nosso corpo e fazê-lo reinar em nossa alma, pois somos sua conquista, seu povo adquirido, sua herança.",
  9: "Só a escravidão, entre os homens, põe uma pessoa na posse e dependência completa de outra. Nada há, do mesmo modo, que mais absolutamente nos faça pertencer a Jesus Cristo e a sua Mãe Santíssima do que a escravidão voluntária, conforme o exemplo do próprio Jesus Cristo, que, por nosso amor, tomou a forma de escravo: “Formam servi accipiens” (Filip 2, 7), e da Santíssima Virgem, que se declarou a escrava do Senhor (Lc 1, 38). O apóstolo honra-se várias vezes em suas epístolas com o título de “servus Christi”. A Sagrada Escritura chama muitas vezes os cristãos de “servi Christi”, e esta palavras “servus”, conforme a observação acertada de um grande homem, significava, outrora, apenas escravo, pois não existiam servos como os de hoje, e os ricos só eram servidos por escravos ou libertos. E para que não haja a menor dúvida de que somos escravos de Jesus Cristo, o Concílio de Trento usa a expressão inequívoca “mancipia Christi” e no-lo aplica: escravos de Jesus Cristo.",
  10: "Para despojar-nos de nós mesmos, é preciso conhecer primeiramente e bem, pela luz do Espírito Santo, nosso fundo de maldade, nossa incapacidade para todo bem, nossa fraqueza em todas as coisas, nossa inconstância em todo tempo, nossa indignidade de toda graça e nossa iniquidade em todo lugar. O pecado de nossos primeiros pais nos estragou completamente, nos azedou, inchou e corrompeu, como o fermento azeda, incha e corrompe a massa em que é posto. Os pecados atuais que cometemos, sejam mortais ou veniais, perdoados que estejam, aumentam em nós a concupiscência, a fraqueza, a inconstância e a corrupção, deixando maus traços em nossa alma.",
  11: '...para despojar-nos de nós mesmos, é preciso que todos os dias morramos para nós, isto é, importa renunciarmos às operações das faculdades da alma e dos sentidos do corpo, precisamos ver como se não víssemos, ouvir como se não ouvíssemos, servir-nos das coisas deste mundo como se não o fizéssemos (cf. 1Cor 7, 29-31), o que São Paulo chama morrer todos os dias: “Quotidie morior” (1Cor 15, 31). “Se o grão de trigo, caindo na terra, não morrer, fica só, e não produz fruto apreciável: Nizi granum frumenti cadens in terram mortuum fuerit, ipsum solum manet” (Jo 12, 24-25). Se não morrermos a nós mesmos, e se as mais santas devoções não nos levarem a esta morte necessária e fecunda, não produziremos fruto que valha, nossas devoções serão inúteis, todas as nossas obras de justiça ficarão manchadas por nosso amor-próprio e nossa própria vontade, e Deus abominará os maiores sacrifícios e as melhores ações que possamos fazer. Na hora da nossa morte, teremos as mãos vazias de virtudes e méritos, e não brilhará em nós a menor centelha do puro amor, que só é comunicado às almas mortas a si mesmas, almas cuja vida está oculta com Jesus Cristo em Deus (Col 3, 3).',
  12: "é preciso escolher entre todas as devoções à Santíssima Virgem, a que nos leva com mais certeza a este aniquilamento do próprio eu. Esta será a devoção melhor e mais santificante, pois é mister reconhecer que nem tudo que luz é ouro, nem tudo que é doce é mel, e nem tudo que é fácil de fazer e praticar é o mais santificante. Do mesmo modo que a natureza tem segredos para fazer em pouco tempo, sem muitos gastos e com facilidade, certas operações naturais, há segredos, na ordem da graça, pelos quais se fazem, em pouco tempo, com doçura e facilidade, operações sobrenaturais, como despojar-nos de nós mesmos, encher-nos de Deus, e tornar-nos perfeitos.",
  13: "É muito mais perfeito, porque é mais humilde, tomar um medianeiro para nos aproximarmos de Deus. Se nos apoiarmos sobre nossos próprios trabalhos, habilidade e preparações, para chegar a Deus e agradar-lhe, é certo que todas as nossas obras de justiça ficarão manchadas e peso insignificante terão junto de Deus, para movê-lo a unir-se a nós e nos atender, pois, como acabo de demonstrar, nosso íntimo é extremamente corrupto. E não foi sem razão que ele nos deu medianeiros junto de sua majestade. Viu nossa iniquidade e incapacidade, apiedou-se de nós, e, para dar-nos acesso às suas misericórdias, proporcionou-nos intercessores poderosos junto de sua grandeza; de sorte que negligenciar esses medianeiros e aproximar-se diretamente de sua santidade sem outra recomendação é faltar ao respeito a um Deus tão alto e tão santo; é menosprezar este Rei dos reis, como não se faria a um rei ou príncipe da terra, do qual ninguém se aproximaria sem a recomendação de um amigo.",
  14: "Antes de tudo, a verdadeira devoção à Santíssima Virgem é interior, isto é, parte do espírito e do coração. Vem da estima em que se tem a Santíssima Virgem. Da alta ideia que se formou de suas grandezas, e do amor que se lhe consagra."
}

quoteFooter.textContent = phrases[getRandomInt(Object.keys(phrases).length)]

praysListHeader.forEach(pray => {
  pray.addEventListener("click", function () {
    const classPray = this.getAttribute("data-class")
    activeClassHandle(classPray)
  })
})

buttonTheme.addEventListener("click", () => {
  pageWrapper.classList.toggle("dark")
})


function activeClassHandle(htmlClass) {
  document.querySelector(".pray.active").classList.remove("active")
  document.querySelector(".link.active").classList.remove("active")

  document.querySelector(`.${htmlClass}`).classList.add("active")
  document.querySelector(`.${htmlClass}-link`).classList.add("active")
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
