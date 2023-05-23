const db = require("./db");
async function listarSalas() {
    return await db.findAll("Salas");
}
let buscarSala = async(idsala)=>{
    //{_id:iduser}
    return db.findOne("Salas",idsala);
}
let atualizarMensagens=async(sala)=>{
    return await db.updateOne("Salas",sala,{_id:sala._id});
}

let buscarMensagens = async (idsala,timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs=[];
        sala.msgs.forEach((msg)=>{
            if(msg.timestamp >= timestamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}
module.exports = {listarSalas,buscarSala,atualizarMensagens,buscarMensagens};

