import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 5000
export const JWT = process.env.JWT_SCREET || "Want JWT ?"