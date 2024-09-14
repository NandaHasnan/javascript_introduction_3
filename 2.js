const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['januari', 'februari', 'maret', 'april', 
                    'mei', 'juni', 'juli', 'agustus', 'september',
                    'oktober', 'novenber', 'desember']
        callback(month)            
        if (!error) {
            callback(null, month)
        }else {
            callback(new Error('sorry data Not Found'), [])
        }            
    }, 4000)
}

const ShowMonth = (error, month) => {
    if(error) {
        console.error(error.message)
    } else {
        month.map(month => console.log(month))
    }
}

getMonth(ShowMonth);

