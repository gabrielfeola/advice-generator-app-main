const getJSON = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const jsonObject = {id: data.slip.id, advice: data.slip.advice}

    insertData(jsonObject.id, jsonObject.advice)
}
    getJSON()


function insertData(id, advice) {
    document.querySelector('.id').innerHTML = `A D V I C E #${id}`
    document.querySelector('.advice').innerHTML = `"${advice}"`
}

function getAdvice() {
    getJSON()
}