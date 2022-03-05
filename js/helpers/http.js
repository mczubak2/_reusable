import axios from 'axios';

const apiUrl = 'https://api.';

export const http = axios.create({
  baseURL: apiUrl,
  headers: {
    'content-type': 'application/json',
    // 'X-WP-Nonce': mynamespace.nonce --> If wordpress project
  }
});