class MelJoa {
  constructor(cor, lingua, beleza) {
    this.beleza = beleza
    this.cor = cor
    this.lingua = lingua
  }
  andar() {
    console.log("Estou andando")
  }
  falar() {
    console.log(`Estou falando ${this.lingua}`)
  }
}

class Linux extends MelJoa {
  chorar() {
    console.log('Inga inga ahaajah')
  } 
}

const casal = new MelJoa("preto", "pt", true)

const bb = new Linux()
bb.andar()
bb.falar()
bb.chorar()

