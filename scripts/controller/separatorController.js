class SeparatorController{
    constructor(){     
        this._listaTimeUm = "";
        this._listaTimeDois = "";  
        this._banco = "";
        this._arrayTimeUm = [];
        this._arrayTimeDois = [];
        this._arrayBanco = [];        
        this._lista = [];
        this._BtnSaparar = document.querySelector("#separar");
        this._listaJogadores = document.querySelector("#lista");
        this._timeUm = document.querySelector("#timeUm");
        this._timeDois = document.querySelector("#timeDois");
        this._bancoJogadores = document.querySelector("#banco");
        this.iniciar();
    }

    iniciar(){
   
        this._BtnSaparar.addEventListener('click', event => {            
            
            this.clearAll();

            this.jogadores.split(',').forEach(jogador => {
                this._lista.push(jogador);                
            });
           
            
            this.separarTimes(this._lista);
        });

    }

    separarTimes(lista){
        
        let count = lista.length;

        for (let i = 0; i < count; i++) {

           let jogador = Math.floor(Math.random() * lista.length);

           while(!(lista[jogador])){

               jogador = Math.floor(Math.random() * lista.length); 

           }

           if(this._arrayTimeUm.length < 5){

                this._arrayTimeUm.push(lista[jogador]);
                this._listaTimeUm = this._listaTimeUm + lista[jogador]; 

                if(this._arrayTimeUm.length <= 4){

                    this._listaTimeUm = this._listaTimeUm + ",";
                    
                }

                lista.splice(jogador, 1);

           }else if(this._arrayTimeDois.length < 5){
            
                this._arrayTimeDois.push(lista[jogador]);
                this._listaTimeDois = this._listaTimeDois + lista[jogador];

                if(this._arrayTimeDois.length <= 4){

                    this._listaTimeDois = this._listaTimeDois + ","   

                }

                lista.splice(jogador, 1);

           }else{

                this._arrayBanco.push(lista[jogador]);
                this._banco = this._banco + lista[jogador];
                lista.splice(jogador, 1);

                if(this._arrayBanco.length <= 4){

                    this._banco = this._banco + ",";

                }

           }
        
        }

        this.setTimeUm(this._listaTimeUm);

        this.setTimeDois(this._listaTimeDois);

        this.setBanco(this._banco);
        
    }

    get jogadores(){
        return this._listaJogadores.value;
    }

    setTimeUm(value){
        this._timeUm.innerHTML = value;
    }

    setTimeDois(value){
        this._timeDois.innerHTML = value;
    }

    setBanco(value){
        this._bancoJogadores.innerHTML = value;
    }

    clearAll(){
        this._timeUm.innerHTML = "";
        this._timeDois.innerHTML = "";
        this._bancoJogadores.innerHTML = "";
        this._listaTimeUm = "";
        this._listaTimeDois = "";
        this._banco = "";
        this._lista = [];
        this._arrayTimeUm = [];
        this._arrayTimeDois = [];
        this._arrayBanco = [];
    }
}