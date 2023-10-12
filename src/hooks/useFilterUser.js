import { useUser } from './ApiHooks/useUsers' 

export const useFilterUser = (data) =>{
  
  const { payload, loading } = useUser()
  if (loading) return <div>Loading ....</div>

  if( !payload || !payload.data){
    return []
  }

  const { textSearch } = data

  const filteredUsers = payload.data.filter(user => {
    if (textSearch && !(user.imie.toLowerCase().includes(textSearch.toLowerCase()) || user.nazwisko.toLowerCase().includes(textSearch.toLowerCase()) ||user.pesel.toLowerCase().includes(textSearch.toLowerCase()))) return false;
    return true;
  });

  return(
    filteredUsers
  )
}