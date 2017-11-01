export const addPerson = {
    uri: 'http://localhost:8000/people',
    method: 'POST',
    json: true,
    body: {name: "camion", superPower: true, rich: false, genius: false},
}

export const delPerson = {
    uri: 'http://localhost:8000/people',
    method: 'DELETE',
    resolveWithFullResponse: true
}

export const getPerson = {
    uri: 'http://localhost:8000/people',
    method: 'GET',
    resolveWithFullResponse: true
}