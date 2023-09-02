/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IBuyer = {
  _id: any;
  id: string;
  name: UserName;
  phoneNumber: string;
  address: string;
  budget: number;
  profileImage?: string;
};

export type BuyerModel = Model<IBuyer>;

export type IBuyerFilters = {
  searchTerm?: string;
  id?: string;
  name?: string;
};
