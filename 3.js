const chekNameStudent = (name) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const nameStudent = ['Toni', 'Tegar', 'ardi', 'faisal', 'opik']
            let cek = nameStudent.find((item) =>{
                return item === name
            })
            if(cek){
                resolve(cek)
            }else {
                reject(new Error('Nama murid tidak di temukan???'))
            }
        }, 3000)
    }) 
}

chekNameStudent('Tegar')
    .then(chekName => console.log(chekName))
    .catch(error => console.error(error));

async function Student(name) {
    try{
        const Student = await chekNameStudent(name);
        console,localStorage(Student)
    }catch (error){
        console.error(error)
    }
}

Student('Patar')

