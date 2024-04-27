
const Api = {
    async getCountAsync(): Promise<number> {
        const response = await fetch('http://localhost:3001/api/v1/reviews/count');
        const data = await response.json();
    return data.count;
    }
}

export default Api;