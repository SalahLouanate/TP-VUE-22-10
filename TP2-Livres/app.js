const { createApp } = Vue

createApp({
  data() {
    return {
      books: [],
      newBook: {
        title: '',
        author: '',
        year: new Date().getFullYear(),
        genre: 'Roman',
        isFav: false,
        keywords: [],
      },
      nouveauMotCle: '',
      prochainId: 1,
      chargement: true,
      erreurChargement: '',
    }
  },
  computed: {
    formulaireValide() {
      return this.newBook.title.trim() !== '' && this.newBook.author.trim() !== ''
    },
  },
  methods: {
    async chargerLivres() {
      try {
        const reponse = await fetch('./books.json')
        if (!reponse.ok) {
          throw new Error(`Erreur HTTP ${reponse.status}`)
        }

        const livres = await reponse.json()
        if (!Array.isArray(livres)) {
          throw new Error('Le fichier books.json doit contenir une liste de livres.')
        }

        this.books = livres
        this.prochainId =
          livres.reduce((plusGrand, livre) => Math.max(plusGrand, Number(livre.id) || 0), 0) + 1
      } catch (erreur) {
        this.erreurChargement = `Impossible de charger books.json : ${erreur.message}`
      } finally {
        this.chargement = false
      }
    },
    ajouterLivre() {
      if (!this.formulaireValide) return

      this.books.push({
        ...this.newBook,
        id: this.prochainId,
        keywords: [...this.newBook.keywords],
      })
      this.prochainId++
      this.reinitialiserFormulaire()
    },
    reinitialiserFormulaire() {
      this.newBook = {
        title: '',
        author: '',
        year: new Date().getFullYear(),
        genre: 'Roman',
        isFav: false,
        keywords: [],
      }
      this.nouveauMotCle = ''
    },
    supprimerLivre(book) {
      this.books = this.books.filter((livre) => livre.id !== book.id)
    },
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    ajouterMotCle() {
      const motCle = this.nouveauMotCle.trim()
      if (!motCle) return

      const existeDeja = this.newBook.keywords.some(
        (mot) => mot.toLowerCase() === motCle.toLowerCase(),
      )
      if (!existeDeja) {
        this.newBook.keywords.push(motCle)
      }
      this.nouveauMotCle = ''
    },
    retirerMotCle(motCle) {
      this.newBook.keywords = this.newBook.keywords.filter((mot) => mot !== motCle)
    },
  },
  created() {
    this.chargerLivres()
  },
}).mount('#app')
