import { NextApiRequest } from '@/lib/types'

const BASIC_AUTH_CREDENTIALS = {
  username: process.env.BASIC_AUTH_CREDENTIALS_USERNAME,
  password: process.env.BASIC_AUTH_CREDENTIALS_PASSWORD
}

export const veryfyBasicAuth = ({ req }: { req: NextApiRequest }) => {
  const base64Credentials = req.headers.authorization.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = credentials.split(':')
  const isAuthenticated = (username === BASIC_AUTH_CREDENTIALS.username && password === BASIC_AUTH_CREDENTIALS.password)

  return { isAuthenticated }
}
