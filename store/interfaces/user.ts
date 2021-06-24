export interface IUser {
  id: number
  email: string
  countryCode: number
  firstName: string
  lastName: string
  profilePicture: string
  refreshToken: string
  refreshTokenExpires: string
  role: number
  sponsorCode: string
}

export interface IToken {
  accessToken: string
  refreshToken: string
}
