import { connect } from 'mongoose';

const connectUrl = process.env.URL;

export const connectedDB = async () => {
  return await connect(connectUrl);
};
