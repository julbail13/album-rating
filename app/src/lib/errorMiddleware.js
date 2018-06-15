import Boom from 'boom'

const errorMiddleware = async (err, req, res, next) => {  // eslint-disable-line no-unused-vars
  if (!Boom.isBoom(err)) Boom.boomify(err)
  console.error(err)  // eslint-disable-line no-console
  res.status(err.output.statusCode || 500)
  err.output.payload.code = err.code
  return res.json(err.output.payload)
}

export default errorMiddleware
