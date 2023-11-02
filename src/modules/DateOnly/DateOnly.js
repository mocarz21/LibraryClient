export const DateOnly = (data) =>{
  if(!data || data === null) return ''
  if(data && data !== null) return data.replace(/T.*/, '');
  
  
}