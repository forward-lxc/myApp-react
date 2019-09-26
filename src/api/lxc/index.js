import axios from "axios";
import { Request } from "../request";

let num =1;

//首页数据    
export function homeData(params) {
    return Request.http.post("/admin/homeData", params, num);
} 
