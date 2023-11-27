"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { QueryStringType } from "./type";

export const useQueryString = <T extends QueryStringType>(initialState: T) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const [value, setValue] = useState<QueryStringType>(
    Object.keys(initialState).reduce((acc, key) => {
      acc[key] = params.get(key) || initialState[key];
      return acc;
    }, {} as QueryStringType)
  );

  const setQueryString = (newValue: Partial<T>) => {
    setValue((prev) => ({ ...prev, ...newValue }));
  };

  const refresh = () => {
    const queryString = Object.entries(value)
      .map(([key, val]) => val && `${key}=${val}`)
      .filter((item) => item)
      .join("&");
    router.push(`${pathname}?${queryString}`);
  };

  const queryStringtoString = () => {
    return Object.entries(value)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
  };

  const getQueryString = (key: string) => {
    return value[key];
  };
  const getQueryStringEntry = (key: string) => {
    return (
      value[key] &&
      `${Object.keys(value).find((objectKey) => objectKey === key)}=${
        value[key]
      }`
    );
  };

  const resetQueryString = () => {
    setValue({ ...initialState });
  };

  useEffect(() => {
    const newValue = Object.keys(initialState).reduce((acc, key) => {
      acc[key] = params.get(key) || initialState[key];
      return acc;
    }, {} as QueryStringType);
    setValue(newValue);
  }, [params.toString()]);

  useEffect(refresh, [value]);

  return {
    setQueryString,
    refresh,
    queryStringtoString,
    getQueryString,
    getQueryStringEntry,
    resetQueryString,
  };
};
