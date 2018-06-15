import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.NODE_PORT || 3001,
  node_env: process.env.NODE_ENV || 'local'
}