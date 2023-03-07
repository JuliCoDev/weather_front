import { api} from "./BaseUrl";

export const Cities = {
    getCities : async () =>{        
        return await api.get("/cities");
    },
}