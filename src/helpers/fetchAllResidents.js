import residentsApi from "../api/residentsApi"

export const fetchAllResidents = async() => {
    const random = Math.floor(Math.random() * 126) +1
    const res = await residentsApi.get(`/location/${random}`)
    return res.data;
}

export const fetchGetLocation = async (id) => {
    const res = await residentsApi.get(`/location/${id}`);
    return res.data;
}

export const fetchGetResident = async (url) => {
    const residentArr = url.split("/");
    const id = residentArr[5];
    const res = await residentsApi.get(`/character/${id}`);
    // console.log("data",res.data)
    return res.data;
}