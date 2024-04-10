export function apiPath(route) {
    const host = process.env.API_HOST || 'http://localhost';
    const port = process.env.API_PORT || 4051;
    const basePath = process.env.BASE_PATH || '/api';
  
    return `${host}:${port}${basePath}${route}`; 
}
