import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import { ResponseEntity } from "../entities/response-entity";
import { HttpService } from "../services/http-service";

const useData = <T>(
  service: HttpService,
  configs?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const { request, cancel } = service.get<ResponseEntity<T>>(configs);

      setLoading(true);

      request
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => cancel();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
