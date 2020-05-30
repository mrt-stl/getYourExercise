
const Wger = {

    Equipment() {
        return fetch('https://wger.de/api/v2/equipment/?format=json'
        ).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.results) {
                return jsonResponse.results
            }
        })
    },

    Categories() {
        return fetch('https://wger.de/api/v2/exercisecategory/?format=json'
        ).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.results) {
                return jsonResponse.results
            }
        })
    },

    search(category, equipment) {
        let url;
        if (category && equipment) url = `https://wger.de/api/v2/exercise/?category=${category}&equipment=${equipment}&format=json&status=2&limit=40`;
        else if(category && equipment === '') url = `https://wger.de/api/v2/exercise/?category=${category}&format=json&status=2&limit=40`;
        else url = `https://wger.de/api/v2/exercise/?equipment=${equipment}&format=json&status=2&limit=40`;

        return new Promise((resolve, reject) => {
            fetch(url
            ).then(response => {
                return response.json()
            }).then(jsonResponse => {
                if (jsonResponse.results) {
                    let promises = jsonResponse.results.map(exercise => {
                        let formatted = {
                            id: exercise.id,
                            name: exercise.name,
                            description: exercise.description,
                            category: exercise.category,
                            srcImg: 'https://image.flaticon.com/icons/svg/2933/2933440.svg'
                        };
                        return fetch(`https://wger.de/api/v2/exerciseimage/?exercise=${exercise.id}&format=json`
                        ).then(response => {
                            return response.json()
                        }).then(jsonResponse => {
                            if (jsonResponse.results) {
                                    formatted.srcImg = jsonResponse.results[0].image;
                            } return formatted
                        }
                        ).catch((error) => {
                            return formatted;
                        })
                    })
                    Promise.all(promises).then((values) => {
                        resolve(values)
                    })
                }
            })
        })
    },

    // getImage(id) {
    //     return fetch(`https://wger.de/api/v2/exerciseimage/?exercise=${id}&format=json`
    //     ).then(response => {
    //         return response.json()
    //     }).then(jsonResponse => {
    //         if (jsonResponse.results) {
    //             console.log(jsonResponse.results[0].image)
    //             return jsonResponse.results[0].image
    //         }
    //     }
    //         // {return 'https://images.unsplash.com/photo-1566351557863-467d204a9f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'}
    //     ).catch((error) => { console.log('Fehler!') })
    // }
}

export default Wger;