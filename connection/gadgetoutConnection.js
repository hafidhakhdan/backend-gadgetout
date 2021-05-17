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
    SELECT ?id ?title ?brand ?harga ?RAM ?ROM ?battery ?screen ?urlFoto
    WHERE{
        ?sub rdf:type data:handphone
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:brand ?brand.}
        OPTIONAL {?sub data:harga ?harga.}
        OPTIONAL {?sub data:RAM ?RAM.}
        OPTIONAL {?sub data:ROM ?ROM.}
        OPTIONAL {?sub data:battery ?battery.}
        OPTIONAL {?sub data:screen ?screen.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        FILTER regex(?id, "${param.id ? param.id : ''}", "i")
        FILTER regex(?title, "${param.title ? param.title : ''}", "i")
        FILTER regex(?brand, "${param.brand ? param.brand : ''}", "i")
        FILTER regex(?harga, "${param.harga ? param.harga : ''}", "i")
        FILTER regex(?RAM, "${param.RAM ? param.RAM : ''}", "i")
        FILTER regex(?ROM, "${param.ROM ? param.ROM : ''}", "i")
        FILTER regex(?battery, "${param.battery ? param.battery : ''}", "i")
        FILTER regex(?screen, "${param.screen ? param.screen : ''}", "i")
        FILTER regex(?urlFoto, "${param.urlFoto ? param.urlFoto : ''}", "i")
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