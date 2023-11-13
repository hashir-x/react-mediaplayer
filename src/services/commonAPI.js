import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

export const commonAPI = async (method,url,data) => {
    let reqConfig = {
        method,url,data,Headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}