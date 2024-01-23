import { connect } from 'mongoose';

const connectUrl =
  'mongodb://mongo:EgBaEchFDdb6-cACd5agF1C32HDF1b24@monorail.proxy.rlwy.net:25318';

export const connectedDB = async () => {
  return await connect(connectUrl);
};
