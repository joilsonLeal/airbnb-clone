import { format } from "date-fns";

export const formatDate = (date: any) => {
  try {
    return format(new Date(String(date)), "dd MMMM yy");
  } catch (error) {
    return format(new Date(), "dd MMMM yy");
  }
};
