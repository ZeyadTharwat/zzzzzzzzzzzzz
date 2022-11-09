// @ts-nocheck
import axios from "axios";

const BASE_URL = `https://api.serenitytraders.com`;

let token = localStorage.getItem("token");

export const getToken = () =>
    localStorage.getItem("token") ? `Bearer ${token}` : "";

export const getAuthorizationHeader = () => ` ${getToken()}`;

const instance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Authorization: getAuthorizationHeader(),
    },
});

export const signIn = async (data) => {
    const response = await instance.post(
        `/serenity-traders/api/auth/login`,
        data
    );
    return response.data;
};

export const signUp = async (data) => {
    const response = await instance.post(
        `/serenity-traders/api/auth/register`,
        data
    );
    return response.data;
};

export const getAllPlans = async (token) => {
    const response = await instance.get(`/serenity-traders/api/plans/all`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getPlansForHomeScreen = async () => {
    const response = await instance.get(`/serenity-traders/home/all-plans`);
    return response.data;
};

export const getTeamMembers = async () => {
    const response = await instance.get(`/serenity-traders/home/all-members`);

    return response.data;
};

export const getNotify = async (data) => {
    const response = await instance.post(
        `/serenity-traders/home/get-notify`,
        data
    );
    return response.data;
};

export const contactUs = async (data) => {
    const response = await instance.post(
        `/serenity-traders/home/contact-us`,
        data
    );

    return response.data;
};

export const getUserDetails = async ({ id, token }) => {
    const response = await instance.get(`/serenity-traders/api/user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const modifyUserInfo = async (data) => {
    const response = await instance.put(`/serenity-traders/api/user`, data);

    return response.data;
};

export const makePayment = async (data) => {
    const response = await instance.post(
        `/serenity-traders/api/payment/charge`,
        data
    );

    return response.data;
};

export const getPlanById = async (id) => {
    const response = await instance.get(`/serenity-traders/api/plans/${id}`);
    return response.data;
};

export const addPlanToUser = async ({ userId, planId, token }) => {
    console.log("token", token);
    const response = await instance.post(
        `/serenity-traders/api/user/${userId}/${planId}`,
        {
            headers: {
                Authorization: token
                    ? `Bearer ${token}`
                    : getAuthorizationHeader(),
            },
        }
    );
    return response.data;
};

export const verifyUserEmail = async ({ token }) => {
    const response = await instance.post(
        `/serenity-traders/api/auth/verify/${token}`
    );
    return response.data;
};

export const forgotPassword = async (data) => {
    const response = await instance.post(
        `/serenity-traders/api/auth/forget-password`,
        data
    );

    return response.data;
};

export const resetPassword = async (data) => {
    const response = await instance.post(
        `/serenity-traders/api/auth/reset-password`,
        data
    );

    return response.data;
};

export const getAllCountries = async () => {
    const response = await instance.get(`/serenity-traders/home/country`);
    return response.data;
};

export const getCityByName = async (name) => {
    const response = await instance.get(
        `/serenity-traders/home/country/city/${name}`
    );
    return response.data;
};

export const getStateByName = async (name) => {
    const response = await instance.get(
        `/serenity-traders/home/country/state/${name}`
    );
    return response.data;
};

export const getCityByStateName = async (name) => {
    const response = await instance.get(
        `/serenity-traders/home/country/state/city/${name}`
    );
    return response.data;
};
export const getSections = async () => {
    const response = await instance.get("/serenity-traders/api/section/all");
    return response.data;
};
