
const Api = {
    async getCountAsync(): Promise<number> {
        // @ts-ignore
        const response = await fetch(import.meta.env.VITE_API_URL + 'reviews/count');
        const data = await response.json();
    return data.count;
    }
}

export default Api;