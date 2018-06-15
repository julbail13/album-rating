import mongoose from 'mongoose'
import config from '../../config/main'
import mongooseConfig from './config'
import async from './async'

if (config.node_env !== 'development') {
  mongoose.connect(mongooseConfig.testHost)
} else {
  mongoose.connect(mongooseConfig.host)
}

global.__mongooseAdapter = global.__mongooseAdapter || async

export default global.__mongooseAdapter
