import { request } from "./request";

export const getGistsApi = (page) => request.get(`/gists/public?page=${page}`);