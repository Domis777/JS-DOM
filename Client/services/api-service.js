const serverAddress = 'http://localhost:3000'

const getPhones = async () => {
    const response = await fetch(`${serverAddress}/phones`);
    const phones = await response.json();

    return phones;
}

const deletePhone = async (id) => {
    const response = await fetch(`${serverAddress}/phones/${id}`, {
        method: 'DELETE'
    })
    const phones = await response.json();

    return phones;
}

const createPhone = async (phoneProps) => {
    const response = await fetch(`${serverAddress}/phones`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(phoneProps)
    });
    const phones = await response.json();

    return phones;
}

const updatePhone = async (id, phoneProps) => {
    const response = await fetch(`${serverAddress}/phones/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(phoneProps)
    })
    const phones = await response.json();

    return phones;
}

const ApiService = {
    getPhones,
    deletePhone,
    createPhone,
    updatePhone,
}

export default ApiService;