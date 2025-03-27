import { useQuery } from '@tanstack/react-query'
import { instance } from '../axios';
import { BannerResponseType } from './type';

const router = '/banners';

export const useGetBanners = () => {
    return useQuery(["GetBanners"], async () => {
        const { data } = await instance.get<BannerResponseType>(`${router}`);
        return data;
    });
};