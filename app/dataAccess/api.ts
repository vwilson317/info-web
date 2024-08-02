import { IReviewStats } from "~/models/IReviewStats";

const Api = {
    async getCountAsync(): Promise<IReviewStats> {
        // @ts-ignore
        const response = await fetch(import.meta.env.VITE_API_URL + 'reviews/stats');
        console.log(response);
        const data: IReviewStats = await response.json();
    return data;
    }
}

export default Api;