import { useState } from 'react';

export const useDeleteComment = (url: string) => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [deletedData, setDeletedData] = useState<any>(null);

  const deleteData = async (id: string) => {
    setIsPending(true);
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      });
      const data = await response.json();
      setDeletedData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { deleteData, deletedData, error, isPending };
};
