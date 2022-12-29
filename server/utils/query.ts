import { firestore } from "./firebase";

export const queryByCollection = async (col: string) => {
  const snapshot = await firestore.collection(col).get();

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return docs;
};
