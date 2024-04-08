
const Api = {
    async getCountAsync(): Promise<number> {
        const response = await fetch('http://localhost:3001/api/count');
        const data = await response.json();
    return data.count;
    }
}

export default Api;