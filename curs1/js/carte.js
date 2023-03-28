class Carte{ 
    static reducere = 10;
    mypret;
    constructor(titlu, autor,  , editura, culoare, material, an,nrPagini){
    this.titlu = titlu;
    this.autor = autor;
    this.editura = editura;
    this.culoare = culoare;
    this.material = material;
    this.an=an;
    this.nrPagini = nrPagini;
    }
    get pret(){
        console.log('sunt in getter')
        return this.pret;
    }
    set pret(pretNou){
        console.log('sunt in setter')
        if(pretNou <= 0){
            throw 'Pretul nu poate fi actualziat'
        }
        else{
           this.mypret = pretNou;
        }
        
    }
    
    info(){
        console.log(`Titlul este ${this.titlu}, autor ${this.autor}`);
    }
    deschidCartea(pagina){
        console.log(`Am deschis cartea la pagina ${pagina}`);
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max-min +1) + min)
    }
    //pretNou(){
      //  this.pret = this.pret -( Carte.reducere * this.pret) / 100
    //}
    //modificaPret(diferenta){
       // this.pret = this.pret - diferenta;
    //}
}