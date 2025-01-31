import { connect } from 'mongoose';
import 'dotenv/config.js';
const connectURI = process.env.DB_URI;

export const connectedDB = async () => {
  return await connect(connectURI);
};
