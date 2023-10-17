import { useQuery } from '../../OdevFetch/useQuery';
import { returnFetch } from '../../OdevFetch/returnFetch';

export const useRentals = (id) =>{
  const endpoint = id ? `secure/rental/${id}` : 'rental'

  const { loading, payload, refetch } =useQuery({endpoint})

  const save = (body) =>{

    const data = returnFetch({endpoint:'secure/rental', body: body})
    return data
  }

  const remove = async ( id ) => {
    const data = await returnFetch({ endpoint: `secure/rental/${id}/remove` });
    return data;
  };

  return{
    loading,
    payload,
    refetch,
    save,
    remove
  }

  

}