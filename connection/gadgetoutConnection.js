const axios = require('axios');
const qs = require('qs');

const DATA_URL = "http://localhost:3030";

const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

exports.getGadget = async(param)=>{
   // Query
   const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?id ?title ?namabrand ?harga ?ukuranRAM ?ukuranROM ?battery ?screen ?urlFoto
    WHERE{
        ?sub rdf:type data:handphone
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:harga ?harga.}
        OPTIONAL {?sub data:battery ?battery.}
        OPTIONAL {?sub data:screen ?screen.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        OPTIONAL {?sub data:productBy ?brandid.}
        OPTIONAL {?sub data:haveRAM ?ramid.}
        OPTIONAL {?sub data:haveROM ?romid.}
        OPTIONAL {?brandid data:namabrand ?namabrand.}
        OPTIONAL {?ramid data:ukuranRAM ?ukuranRAM.}
        OPTIONAL {?romid data:ukuranROM ?ukuranROM.}
        FILTER regex(?title, "${param.title ? param.title : ''}", "i")
        FILTER regex(?harga, "${param.harga ? param.harga : ''}", "i")
        FILTER regex(?namabrand, "${param.brand ? param.brand : ''}", "i")
        FILTER regex(?ukuranRAM, "${param.RAM ? param.RAM : ''}", "i")
        FILTER regex(?ukuranROM, "${param.ROM ? param.ROM : ''}", "i")
        FILTER regex(?battery, "${param.battery ? param.battery : ''}", "i")
        FILTER regex(?screen, "${param.screen ? param.screen : ''}", "i")
    }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/GadgetOut/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)

        });
        console.log(data.results)
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

exports.getRecommendation = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?id ?title ?namabrand ?harga ?ukuranRAM ?ukuranROM ?battery ?screen ?urlFoto
    WHERE{
        ?sub rdf:type data:handphone
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:harga ?harga.}
        OPTIONAL {?sub data:battery ?battery.}
        OPTIONAL {?sub data:screen ?screen.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        OPTIONAL {?sub data:productBy ?brandid.}
        OPTIONAL {?sub data:haveRAM ?ramid.}
        OPTIONAL {?sub data:haveROM ?romid.}
        OPTIONAL {?brandid data:namabrand ?namabrand.}
        OPTIONAL {?ramid data:ukuranRAM ?ukuranRAM.}
        OPTIONAL {?romid data:ukuranROM ?ukuranROM.}
        FILTER regex(?namabrand, "${param.brand ? param.brand : ''}", "i")
        FILTER regex(?ukuranRAM, "${param.RAM ? param.RAM : ''}", "i")
        FILTER regex(?ukuranROM, "${param.ROM ? param.ROM : ''}", "i")
       } ORDER BY RAND() LIMIT 3`
    };
    try{
        const {data} = await axios(`${DATA_URL}/GadgetOut/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)

        });
        console.log(data.results)
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

exports.getAdvancedsearch = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?id ?title ?namabrand ?harga ?ukuranRAM ?ukuranROM ?battery ?screen ?urlFoto
    WHERE{
        ?sub rdf:type data:handphone
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:harga ?harga.}
        OPTIONAL {?sub data:battery ?battery.}
        OPTIONAL {?sub data:screen ?screen.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        OPTIONAL {?sub data:productBy ?brandid.}
        OPTIONAL {?sub data:haveRAM ?ramid.}
        OPTIONAL {?sub data:haveROM ?romid.}
        OPTIONAL {?brandid data:namabrand ?namabrand.}
        OPTIONAL {?ramid data:ukuranRAM ?ukuranRAM.}
        OPTIONAL {?romid data:ukuranROM ?ukuranROM.}
        FILTER regex(?title, "${param.search ? param.search : ''}", "i")
       } UNION {
        ?sub rdf:type data:handphone
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:harga ?harga.}
        OPTIONAL {?sub data:battery ?battery.}
        OPTIONAL {?sub data:screen ?screen.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        OPTIONAL {?sub data:productBy ?brandid.}
        OPTIONAL {?sub data:haveRAM ?ramid.}
        OPTIONAL {?sub data:haveROM ?romid.}
        OPTIONAL {?brandid data:namabrand ?namabrand.}
        OPTIONAL {?ramid data:ukuranRAM ?ukuranRAM.}
        OPTIONAL {?romid data:ukuranROM ?ukuranROM.}
        FILTER regex(?namabrand, "${param.search ? param.search : ''}", "i")
       } UNION {
        ?sub rdf:type data:handphone
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:harga ?harga.}
        OPTIONAL {?sub data:battery ?battery.}
        OPTIONAL {?sub data:screen ?screen.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        OPTIONAL {?sub data:productBy ?brandid.}
        OPTIONAL {?sub data:haveRAM ?ramid.}
        OPTIONAL {?sub data:haveROM ?romid.}
        OPTIONAL {?brandid data:namabrand ?namabrand.}
        OPTIONAL {?ramid data:ukuranRAM ?ukuranRAM.}
        OPTIONAL {?romid data:ukuranROM ?ukuranROM.}
        FILTER regex(?ukuranRAM, "${param.search ? param.search : ''}", "i")
       } UNION {
        ?sub rdf:type data:handphone
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:harga ?harga.}
        OPTIONAL {?sub data:battery ?battery.}
        OPTIONAL {?sub data:screen ?screen.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        OPTIONAL {?sub data:productBy ?brandid.}
        OPTIONAL {?sub data:haveRAM ?ramid.}
        OPTIONAL {?sub data:haveROM ?romid.}
        OPTIONAL {?brandid data:namabrand ?namabrand.}
        OPTIONAL {?ramid data:ukuranRAM ?ukuranRAM.}
        OPTIONAL {?romid data:ukuranROM ?ukuranROM.}
        FILTER regex(?ukuranROM, "${param.search ? param.search : ''}", "i")
       }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/GadgetOut/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)

        });
        console.log(data.results)
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};
module.exports = exports;