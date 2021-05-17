const connection = require('../connection/gadgetoutConnection');
const Format = require('../tools/format');

module.exports.getGadget = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let gadgets = await connection.getGadget(req.query);
            if(!gadgets.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }
            
            gadgets = gadgets.bindings.map((handphone)=>Format(handphone));
            if(req.params.id){
                let handphone = gadgets.filter((handphone)=>{
                    return handphone.id == req.params.id
                });
                res.status(200).json({
                    data:handphone[0],
                    message: handphone.length ? 'Data perangkat berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: gadgets,
                    message: "Show all perangkat"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
    }