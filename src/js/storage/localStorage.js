export const persistData = (type,data) => {
    try {
        localStorage.setItem(type, JSON.stringify(data))
        console.log('Success')
    } catch(e) {

    }
}

export const fetchData = (type) => {
    let data = []
    try {
        data = JSON.parse(localStorage.getItem(type))
        console.log('Done Fetching Data!')
    } catch (e) {

    }
    return data
}