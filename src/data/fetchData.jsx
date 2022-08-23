function fetchData(url) 
    {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => {return res.json()})
            .then(data_from_fetched => {
                let data = data_from_fetched;
                resolve(data)
            })
            .catch(error => console.log('ERROR'))
        })
    }

export default fetchData;