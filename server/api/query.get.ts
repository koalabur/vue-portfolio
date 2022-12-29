import { queryByCollection } from "../utils/query";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const docs = await queryByCollection(query.col as string);
    return docs;
  } catch (error) {
    return {
      Result: "There was a problem fetching the COLLECTION from firebase!",
      // @ts-ignore
      error: error.message,
    };
  }
});
