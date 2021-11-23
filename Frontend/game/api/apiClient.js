let url_base = 'http://localhost:3000';

async function getLevel(id) {
    let response = await fetch(url_base + '/levels/' + id);
    let data = await response.json();    
    return data;
}

async function getFood(id) {
    let response = await fetch(url_base + '/foods/' + id);
    let data = await response.json();    
    return data;
}
//futura actualizacion 
// async function putStars(id) {
//     let response = await fetch(url_base + '/stars/' + id);
//     let data = await response.json();    
//     return data;
// }