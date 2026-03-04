import api from "../utils/axios";

const userServices = {
    getVaultSummary: async () => {
        const response = await api.get('/vault/summary');
        return response.data;
    }
}

export default userServices;