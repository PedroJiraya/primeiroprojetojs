/* let log = new Log (document.querySelector('.log'));



let char = new Knight('Pedro');
let monster = new LitleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start(); */

const char = createKnight('Pedro');
const monster = creatLittleMonster();





stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);