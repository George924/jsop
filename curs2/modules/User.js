 export class User{
    _varsta;//protected
    #email; // private
    constructor(id,nume,email, varsa){
        //setam proprietatile
        this.id = id;
        this.nume=nume;
        this.#email = mail;
        this._varsta = varsta;
    }
    get email(){
        return this.#email;
    }
    set email(newEmail){
        console.log('sunt in setter email');
        if(newEmail =='dan@dan.ro'){
            this.#email = newEmail;
        }
        
    }
    get varsta() {
        return this._varsta;
    }

    //set myAge(varstaNoua){
       // if (this.varstaNoua >0){
           // this.varsta - varstaNoua;
        //}
        //else{
        //    throw 'Error: invalid data!';
            //console.log('error')
        }
   // }
    mananca (claorii){
        console.log(`Mananca ${claorii} calorii pe zi. Adresa lui este ${thsi.#email}`);
    }
    doarme(ore) {
        console.log(`Doarme ${ore}  ore pe zi`);
    }

export {User}