import React, { useEffect } from "react";

import { useQuery, UseQueryOptions } from "react-query";
import { toast } from "react-toastify";
import { FetchWrapperProps } from "./FetchWrapper.types";

export const FetchWrapper = <T,>({
  queryKey,
  fetchFn,
  render: Render,
  emptyEl = null,
  queryOptions,
}: FetchWrapperProps<T>) => {
  const { isFetching, error, data } = useQuery(queryKey, fetchFn, queryOptions);

  useEffect(() => {
    if (!isFetching && error) toast.error(`${error}`);
  }, [isFetching]);

  return data ? <Render data={data} isFetching={isFetching} /> : emptyEl;
};
