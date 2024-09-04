export type AxiosDefaultErrorBody = {
  message: string;
  error: string;
  statusCode: number;
};

export const Categories = [
  "Social",
  "Cultural",
  "Sports",
  "Educational",
  "Community",
] as const;
