const cekharikerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dataday = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataday.find((item) =>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    }) 
}

//menggunakan then catch
cekharikerja('senin')
    .then(cekkerja => console.log(cekkerja)) // jika resolve maka akan menampilkan hari kerja
    .catch(error => console.error(error)); // jika reject maka akan menampilkan error

    // menggunakan try catch 
async function cekhari(day) {
    try{
        const harikerja = await cekharikerja(day);
        console.log(harikerja)
    }catch (error){
        console.error(error)
    }
}

// memanggil try catch 
cekhari('minggu')

