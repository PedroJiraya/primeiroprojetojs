// knight ou Sorcerer
//LittleMonster ou BigMonster
//projeto usando class js

/* class Character{


    _life = 1;
    maxLife = 100;
    atack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }


    get life(){
        return this._life;
    }

    set life(newlife){
        this._life = newlife < 0? 0 :newlife;
    }

}

 class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.atack = 10;
        this.defense = 8;
        this.maxLife = this.maxLife;
    }
 }


 class Sorcerer extends Character{
      constructor(name){
        super(name);
        this.life = 80;
        this.atack = 14;
        this.defense = 3;
        this.maxLife = this.life;
      }  
 }  

 class LitleMonster extends Character{
        constructor(){
            super('LitleMonster')
            this.life = 40;
            this.maxLife = this.life;
            this.atack = 4;
            this.defense = 4;
        }
 }

 class BigMonster extends Character{
        constructor(){
            super('BigMonster')
            this.life = 120;
            this.atack = 16;
            this.defense = 6;
            this.maxLife = this.life;
        }
 }

 class Stage{
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    };

    start(){
        this.update();

        this.fighter1El.querySelector('.atackButton').addEventListener('click', ()=> this.doAtack(this.fighter1, this.fighter2) );
        this.fighter2El.querySelector('.atackButton').addEventListener('click', ()=> this.doAtack(this.fighter2, this.fighter1) );

    }

    update(){
        //fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`;
         let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1pct}%`
        //fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
         let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2pct}%`

        
    }

    doAtack(attacking, attacked){

        
        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage("Atacando o defunto");
            return;
        }
        
        let attackFactor = (Math.random()*2).toFixed(2);
        let defenseFactor = (Math.random()*2).toFixed(2);


        let actualAttack = attacking.atack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;
        
        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)           
            
            
        }else{
            this.log.addMessage(`${attacked.name} conseguiu defender...`)
        }
              
        this.update()


    }
 }


class Log{
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    };


    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = '';
        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
} */




const defaultCharacter =  {
    name: '',
    life: 1,
    maxlife: 1,
    attack: 1,
    defense:0

}

const createKnight = (name) => {
    return{
        ...defaultCharacter,
        name,
        life:100,
        maxlife:100,
        attack:10,
        defense:8
    }   
}

const creatSorcerer = (name) =>{
    return{
        ...defaultCharacter,
        name,
        life:50,
        maxlife:50,
        attack:14,
        defense:3
    }
}

const creatLittleMonster = () =>{
    
    return {
        ...defaultCharacter,
        name:'Litle Monster',
        life:40,
        maxlife:40,
        attack:4,
        defense:4
    }
    
}

const creatBigMonster = ()=>{
    return{
        ...defaultCharacter,
        name:'Big Monster',
        life: 120,
        maxlife:120,
        attack:16,
        defense:6

    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El:null,

    start(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;


        this.fighter1El.querySelector('.atackButton').addEventListener('click', () => this.doAtack(this.fighter1, this.fighter2) );
        this.fighter2El.querySelector('.atackButton').addEventListener('click', () => this.doAtack(this.fighter2, this.fighter1) );

        this.update();

    },
    update(){
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    },
    doAtack(attacking, attacked){


        if(attacking.life <= 0 || attacked.life <= 0 ){
            log.addMesage('alguem estar morto')
                return;
            
        }
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMesage(`${attacked.name} causou ${actualAttack.toFixed(2)} de dano`)
        }else{
            log.addMesage(`${attacked.name} conseguiu defender`)
        }

        this.update()

    }

} 

const log = {
    list:[],
    addMesage(msg){
        this.list.push(msg);
        this.render();
    },
    render(){
        const logEl = document.querySelector('.log')
        logEl.innerHTML = '';
        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}
