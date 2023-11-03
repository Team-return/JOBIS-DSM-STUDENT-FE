"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface QueryStringType {
  [key: string]: string;
}

export interface setQueryStringType {
  page?: string;
  job_code?: string;
  tech_code?: string;
  name?: string;
}

export const useQueryString = (initialState: QueryStringType) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const [value, setValue] = useState<QueryStringType>(
    Object.keys(initialState).reduce((acc, key) => {
      acc[key] = params.get(key) || initialState[key];
      return acc;
    }, {} as QueryStringType)
  );

  const setQueryString = (newValue: setQueryStringType) => {
    setValue((prev) => ({ ...prev, ...newValue }));
  };

  const refresh = () => {
    const queryString = Object.entries(value)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    router.push(`${pathname}?${queryString}`);
  };

  const toString = () => {
    return Object.entries(value)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
  };

  const getValue = (key: keyof setQueryStringType) => {
    return value[key];
  };
  const getEntry = (key: keyof setQueryStringType) => {
    return `${Object.keys(value).find((objectKey) => objectKey === key)}=${
      value[key]
    }`;
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
    toString,
    getValue,
    getEntry,
    resetQueryString,
  };
};
