module.exports = fn = data => {
    return {
        "id": data.id ? data.id.value : '',
        "title": data.title ? data.title.value : '',
        "brand": data.brand ? data.brand.value : '',
        "harga": data.harga ? data.harga.value : '',
        "RAM": data.RAM ? data.RAM.value : '',
        "ROM": data.ROM ? data.ROM.value : '',
        "battery": data.battery ? data.battery.value : '',
        "screen": data.screen ? data.screen.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : '',
    }
}