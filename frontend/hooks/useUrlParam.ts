import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useUrlParams = (query?: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedQuery = searchParams.get(query ?? "");

  const setUrlParams = useCallback(
    (query: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(query, value);

      router.push(pathname + "?" + params.toString());
    },
    [searchParams, pathname, router],
  );

  return [selectedQuery, setUrlParams] as const;
};

export default useUrlParams;
