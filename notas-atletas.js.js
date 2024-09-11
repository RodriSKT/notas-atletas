//criação da classe calcularMediaAtletas//
class calcularMediaAtletas {
  constructor(ginastasArtisticos) {
  this.ginastasArtisticos = ginastasArtisticos
  }
  
  //nessa função, o programa organiza as notas de cada ginasta de forma crescente e mostra no console//
  ordenaNotas() {
  this.ginastasArtisticos.forEach(function(ginastaArtistico) {
  ginastaArtistico.notas = ginastaArtistico.notas.sort(function (a, b) {
  return a - b
  });
  console.log(`Nome do atleta: ` + ginastaArtistico.nome + ` / notas: `  + ginastaArtistico.notas)
  });
  console.log("__________________________________________________________")
  }

  //Nessa função, o programa organiza as notas de forma crescente e descarta a maior e a menor nota//
  descartaNotas() {
  this.ginastasArtisticos.forEach(function(ginastaArtistico) {
  ginastaArtistico.notas = ginastaArtistico.notas.sort(function (a, b) {
  return a - b
  })
  ginastaArtistico.notas = ginastaArtistico.notas.slice(1, -1)
  console.log(`Nome do atleta: ` + ginastaArtistico.nome + `/ Notas atualizadas: ` + ginastaArtistico.notas)
  })
  console.log("__________________________________________________________")
  }

  //Nessa função o programa seleciona cada ginasta e soma todas as suas notas, por fim, apresenta no console//
  somaNotas() {
    this.ginastasArtisticos.forEach(function (ginastaArtistico) {
    ginastaArtistico.somaNotas = ginastaArtistico.notas.reduce(function (total, nota) {
    return total + nota
    }, 0)
    console.log(`Atleta: ` + ginastaArtistico.nome + `/ notas somadas: ` + ginastaArtistico.somaNotas)
    })
    console.log("__________________________________________________________")
  }

  //Nessa função, o programa pega o somatório das notas de cadas ginasta e calcula a média, mostrando assim no console//
  mediaNotas() {
    this.ginastasArtisticos.forEach(function (ginastaArtistico) {
    ginastaArtistico.media = ginastaArtistico.somaNotas / ginastaArtistico.notas.length
    console.log(`Atleta: ` + ginastaArtistico.nome + `/ média das notas: ` + ginastaArtistico.media)
    })
    console.log("__________________________________________________________")
  }

  //Por fim, o programa calcula quem foi o campeão da competição, usando a lógica de comparação da maior nota com cada uma das médias dos ginastas//
  vencedor() {
    let maiorNota = 0
    let campeao = ""
    this.ginastasArtisticos.forEach(function (ginastaArtistico) {
    if (ginastaArtistico.media > maiorNota) {
    maiorNota = ginastaArtistico.media
  campeao = ginastaArtistico.nome
    }
    })
    console.log(`O vencedor da competição é: ` + campeao + `/com média de: ` + maiorNota)
    console.log("__________________________________________________________")
  }
  
  }
  
  
  // aqui o código recebe as informações de nome e notas dos atletas//
  let atletas = [
      {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88],
      },
      {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33],
      },
      {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8],
      },
      {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5],
      },
    ];
  
    //aqui é chamada a classe calcularMediaAtletas com o parâmetro atletas. Sendo assim, os valores são todos passado para a classe//
    let chamarFuncao = new calcularMediaAtletas(atletas)

    //aqui temos as chamadas de cada função definida acima//
    chamarFuncao.ordenaNotas()
    chamarFuncao.descartaNotas()
    chamarFuncao.somaNotas()
    chamarFuncao.mediaNotas()
    chamarFuncao.vencedor()