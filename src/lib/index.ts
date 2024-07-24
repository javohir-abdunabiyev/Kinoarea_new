import axios from 'axios';

const base: string = "https://api.themoviedb.org/3";

export async function getData(path: any): Promise<any> {
    try {
        const res = await axios.get(base + path, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmZlYzRlZjNjNWNlMDZlNzlmNDIyMmNlOWU3M2NhNyIsIm5iZiI6MTcyMTEyNzU4NS4yMTc3MTQsInN1YiI6IjY2OTY0ZWI1Y2UwNzYyNjg3YTgwNzlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWFgh_pXS2HtH8o-elspBnOICNb80dKkj20ikxk_iSM`
            }
        });
        return res.data
    } catch (error) {
        return { status: 500, error: error};
    }
}