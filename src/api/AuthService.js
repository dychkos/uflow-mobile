import { API_BASE_URL } from '@env';

export class AuthService {
  static baseUrl;
  async static login(dto) {
    const url = `${API_BASE_URL}/auth/sign-up`;
    try {

    }
    await fetch(url, {
      body: dto
    })
    console.log(API_BASE_URL);
  }

  static register(dto) {}
}
