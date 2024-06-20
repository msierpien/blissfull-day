type FetchOptions = {
  cache?: RequestCache;
  headers?: HeadersInit;
};

export async function fetchData<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return res.json();
}