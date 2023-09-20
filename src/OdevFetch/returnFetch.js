import { fetchSetting } from './fetchConfig'
import {useQuery} from  './useQuery'

export const returnFetch = async ({ endpoint, body }) => {
    const output = await fetch (`http://localhost:8000/${endpoint}`,{
        ...fetchSetting,
        headers: {
            ...fetchSetting.headers,
            authorization: `Bearer ${sessionStorage.getItem('access-token')}`,
        },
        body:body ? JSON.stringify(body) : "",
    })
        .then(response => response.json())
        .then(res => {
            if(res && res.status && res.message && !res.message.includes("ERROR-LOGS: ")) {
                document.showAlert(res.message, res.status);
            }

            return res
        });
    
        const { data, status, message } = await output;
        if (status && status === "error" && message) {
            document.showAlert(message, status);
        }

        return data;
}

