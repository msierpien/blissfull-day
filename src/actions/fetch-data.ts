type QueryParams = Record<string, string | number | boolean>;

type FetchOptionsNew = {
  cache?: RequestCache;
  headers?: HeadersInit;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
};

export const executeRestApi = async <TResult>(
  url: string,
  params: QueryParams = {},
  options: FetchOptionsNew = { method: "GET" }
): Promise<TResult> => {
  const urlWithParams = new URL(url);
  Object.keys(params).forEach((key) =>
    urlWithParams.searchParams.append(key, params[key].toString())
  );

  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  const res = await fetch(urlWithParams.toString(), fetchOptions);
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${urlWithParams.toString()}`);
  }
  return res.json();
};
