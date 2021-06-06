module.exports = fn = data => {
    return {
        "id": data.id ? data.id.value : '',
        "title": data.title ? data.title.value : '',
        "Brand": data.namaBrand ? data.namaBrand.value : '',
        "harga": data.harga ? data.harga.value : '',
        "RAM": data.ukuranRAM ? data.ukuranRAM.value : '',
        "ROM": data.ukuranROM ? data.ukuranROM.value : '',
        "battery": data.battery ? data.battery.value : '',
        "screen": data.screen ? data.screen.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : '',
    }
}