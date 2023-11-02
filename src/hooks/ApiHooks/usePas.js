import { useQuery } from "../../OdevFetch/useQuery"
import { returnFetch } from "../../OdevFetch/returnFetch";
import { useState } from 'react'


export const usePas = () =>{

  const save = (id,body) =>{
    const data = returnFetch({endpoint:`authenticate/${id}`, body: {id:id, password:body}})
    return data
  }
  
  return{
    save,
  }
}