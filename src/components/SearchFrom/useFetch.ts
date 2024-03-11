import { useState, useEffect } from 'react';

const useFetch = (searchUser: string) => {
  const [data, setData] = useState<any>([]);
  console.info(data);
  useEffect(() => {
    const fetchData = async () => {
      if (searchUser.trim() === "") {
        setData([]);
        return;
      }

      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${searchUser}`
        );

        if (!response.ok) {
            throw new Error("Ошибка сети. Проверьте урл");
        } else {
            const result = await response.json();
            setData(result);
        }
        
      } catch (error) {
        throw new Error("Ошибка");
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 100);

    return () => clearTimeout(timer);
  }, [searchUser]);

  return data;
};

export default useFetch;
