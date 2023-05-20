import { TALKS } from "@config";
import type { Talk } from "types";

export const getSortedTalks = (): Talk[] => {
  return TALKS.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
