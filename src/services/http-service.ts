import axios, { AxiosRequestConfig, CanceledError } from "axios";
import { Entity } from "../entities/entity";

export { CanceledError };

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export class HttpService {
  constructor(private endpoint: string) {}

  getAll<T>() {
    const controller = new AbortController();
    const request = client.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  get<T>(configs?: AxiosRequestConfig) {
    const controller = new AbortController();
    const request = client.get<T>(this.endpoint, {
      signal: controller.signal,
      ...configs,
    });
    return { request, cancel: () => controller.abort() };
  }

  create<T>(entity: T) {
    return client.post<T>(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return client.patch<T>(this.endpoint + "/" + entity.id, entity);
  }

  delete(id: number) {
    return client.delete(this.endpoint + "/" + id);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
