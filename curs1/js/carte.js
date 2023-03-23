class Carte{ constructor(titlu, autor,  pret, editura, culoare, material, an,){
    this.titlu = titlu;
    this.autor = autor;
    this.pret = pret;
    this.editura = editura;
    this.culoare = culoare;
    this.material = material;
    this.an=an;
    }
    deschidCartea(pagina){
        console.log(`Am deschis cartea la pagina ${pagina}`);
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max-min +1) + min)
    }
    modificaPret(pretNou){
        if(pretNou <100 && pretNou > this.pret){
            this.pret = pretNou;
        }
    }

    redcuere(procent){
        this.pret = this.pret - (procent/100* this.pret)
        this.pret -= (procent * this.pret)/100
        console.log(`pretul cu reducere este ${this.pret}`);
    }
}

const carte = new Carte('Poezii', 'M. Eminescu','All',2010, 50);
carte.modificaPret (75);

console.log(carte);
