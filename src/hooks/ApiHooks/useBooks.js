import { useQuery } from '../../OdevFetch/useQuery';
import { returnFetch } from '../../OdevFetch/returnFetch';

export const useBooks = (bookId) => {
  const endpoint = bookId ? `books/${bookId}` : `books`;

  const { loading, payload, refetch } = useQuery({ endpoint });

  const save = async ({ body }) => {
    const data = await returnFetch({ endpoint: 'books', body });
    return data;
  };

  const remove = async ({ id }) => {
    const data = await returnFetch({ endpoint: `books${id}/remove` });
    return data;
  };

  return {
    save,
    remove,
    loading,
    payload,
    refetch,
  };
};