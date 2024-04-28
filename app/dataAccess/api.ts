
const Api = {
    async getCountAsync(): Promise<number> {
        const response = await fetch(process.env.API_URL);
        const data = await response.json();
    return data.count;
    }
}

export default Api;