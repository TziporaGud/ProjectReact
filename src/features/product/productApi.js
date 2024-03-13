import axios from "axios";

let baseUrl="http://localhost:4000/product";

export const getAllProductsFromServer=()=>{
    return axios.get(baseUrl);
}
export const getProductById= (id) => {
    return axios.get(`${baseUrl}/${id}`);
}
export const deleteP= (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}
