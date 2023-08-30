// import type { RequestHandler } from 'express'
export interface ServerError {
  err: '400'
}

export interface ErrorObject {
  log: string
  message: { err: string }
}
