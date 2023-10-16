import axios from 'axios';
import { IPostLinkBody, IPostLink, ILinkList } from './types';

export const LinkService = {
  instanceAPI: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  }),

  async postLinkForShort(body: IPostLinkBody): Promise<IPostLink> {
    try {
      const { data } = await this.instanceAPI.post('/links', body);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Something error');
    }
  },

  async deleteLink(id: number): Promise<void> {
    try {
      await this.instanceAPI.delete(`/links/${id}`);
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Something error');
    }
  },

  async getLink(id: number): Promise<IPostLink> {
    try {
      const { data } = await this.instanceAPI.get(`/links/${id}`);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Something error');
    }
  },

  async getLinks(page?: number, perPage?: number): Promise<ILinkList> {
    try {
      const { data } = await this.instanceAPI.get('/links', {
        params: {
          page,
          perPage,
        },
      });

      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Something error');
    }
  },
};
