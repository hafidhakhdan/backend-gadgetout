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
                    message: 'Pencarian semua data tidak ditemukan'
                })
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

    module.exports.getFilter = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let gadgets = await connection.getGadget(req.query);
            if(!gadgets.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: 'Pencarian semua data tidak ditemukan'
                })
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
module.exports.getRecommendation = async(req, res)=>{
        try{
           
            // Query data dari repo
            let gadgets = await connection.getRecommendation(req.query);
            if(!gadgets.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: " Rekomendasi Data tidak ditemukan"
                });
            }
            
            gadgets = gadgets.bindings.map((handphone)=>Format(handphone));
                res.status(200).json({
                    data: gadgets,
                    message: "Show all rekomendasi"
              
            })
        }catch(err){
            res.status(400).json(err);
        }
    }

    module.exports.getAdvancedsearch = async(req, res)=>{
        try{
        let inputs = req.query.search.split(" ");
        let outputs = []
            
        // Query data dari connection
        await Promise.all(
            inputs.map(async (input)=>{
                let gadgets = await connection.getAdvancedsearch({search: input});
                gadgets = gadgets.bindings.map((handphone)=>Format(handphone));
                gadgets.map(async (handphone)=>{
                    const find = outputs.find(({id})=> id === handphone.id)
                    if(!find){
                        outputs.push(handphone);
                    }
                })
            })
        )
        if(!outputs.length){
            return res.status(200).json({
                data:[],
                message: "Pencarian data tingkat lanjut tidak ditemukan"
            });
        }else{
            res.status(200).json({
                data: outputs,
                message: "Menampilkan semua perangkat"
            })
        }
        
    }catch(err){
        res.status(400).json(err);
    }
 }