import { useState } from 'react';
import { fetchPayload } from '../../OdevFetch/fetchPayload';

const useSubmitForm = (endpoint) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e,data) => {
    const userData ={
      id: data.id,  // jeśli istnieje
      imie: data.name,
      nazwisko: data.lastName,
      email: data.email,
      pesel: data.pesel,
      miasto: data.city,
      ulica: data.streetName,
      nr_domu: data.homeNr,
      data_urodzenia: data.birthday,
      nr_karty_bibliotecznej: data.cardNumber,
    }
    e.preventDefault();
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchPayload({ 
        endpoint:"secure/employee/addUser",
        body: userData,
        callback: res => {
          if (res.status !== 'success') {
            throw new Error(res.message);
          }
        }
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    handleChange,
    handleSubmit
  };
};

export default useSubmitForm;