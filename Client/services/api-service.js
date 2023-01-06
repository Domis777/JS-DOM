const serverAddress = 'http://localhost:3000'

const getPhones = async () => {
    const response = await fetch(`${serverAddress}/phones`);
    const phones = await response.json();

    return phones;
}

const ApiService = {
    getPhones,
}

export default ApiService;