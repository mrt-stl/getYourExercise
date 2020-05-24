
const Wger = {

    search(category) {
        return fetch(`https://wger.de/api/v2/exercise/?category=${category}&format=json&status=2&limit=40`
        ).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.results) {
                return jsonResponse.results.map(exercise => {
                    
                    const srcImg = (id) => {
                        return fetch(`https://wger.de/api/v2/exerciseimage/?exercise=${id}&format=json`
                        ).then(response => {
                            return response.json()
                        }).then(jsonResponse => {
                            if (jsonResponse.results) {
                                console.log(typeof(jsonResponse.results[0].image))
                                return jsonResponse.results[0].image
                            }
                        }
                        ).catch((error) => { return 'https://images.unsplash.com/photo-1566351557863-467d204a9f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' })
                    }

                    const tmp = srcImg(exercise.id);
                    console.log(tmp)

                    return {
                        id: exercise.id,
                        name: exercise.name,
                        description: exercise.description,
                        category: exercise.category,
                        srcImg: tmp
                    }
                })
            }
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