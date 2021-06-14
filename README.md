# backend-gadgetout

Projek ini dibangun dengan menggunakan NodeJS sebagai server dari aplikasi

Untuk dataset sudah kita sediakan pada folder dataset dengan nama file `data.ttl`

## Cara Setup Backend

- Jalankan fuseki server dengan command dibawah pada folder fuseki server di cmd/terminal

  Pada sistem operasi Windows :
  ```cmd
  fuseki-server
  ```


- Jena Fuseki dapat diakses di
  
  ```link
  http://localhost:3030
  ```

- Tambahkan `dataset` dengan nama `ggeming`
- Upload data `data.ttl` ada pada folder `dataset` di repository
- Kemudian buka cmd/terminal lain atau tab baru pada terminal, tanpa menutup cmd/terminal fuseki server.
- Kita perlu menginstall dependency package agar server dapat berjalan dengan menjalankan command berikut 
  
  ```cmd
  npm install
  ```
  
- Jalankan REST API Server dengan command berikut
  
  ```cmd
  node app
  ```

## Kelompok

1. Irfan Satrio Nugroho - 140810180003 (FE & UI/UX)
2. Hafidh Akhdan Najib - 140810180061 (BE & Database)

Link github frontend
 https://github.com/Irfansatrio4/GadgetOut-FE
