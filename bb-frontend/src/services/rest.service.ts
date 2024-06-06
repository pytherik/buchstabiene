export class RestService {
  async getForRessource(path: string, method: string): Promise<string> {
    const response = await fetch(`http://localhost:3000/${path}`, {
      headers: {
        method: method
      }
    });
    return await response.text();
  }
}
