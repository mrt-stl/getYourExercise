
const Wger = {

    search(muscle) {
        return fetch(`https://wger.de/api/v2/exercise/?category=8&format=json&status=2`,
            ).then(response => {
                return response.json()
            }).then(jsonResponse => {
                if (jsonResponse.results){
                    return jsonResponse.results.map(exercise => {
                        return {
                            id: exercise.id,
                            name: exercise.name,
                            description: exercise.description,
                        }
                    })
                }
            })
    }
};

export default Wger;