import { UseQueryOptions } from "react-query";

export type FetchWrapperProps<T> = {
  queryKey: string;
  fetchFn: () => Promise<T>;
  render: React.FC<{ data: T; isFetching: boolean }>;
  emptyEl?: React.ReactElement | null;
  queryOptions?: Omit<
    UseQueryOptions<T, unknown, T, string>,
    "queryKey" | "queryFn"
  >;
};
