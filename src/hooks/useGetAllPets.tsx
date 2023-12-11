
import { useState, useEffect, FC } from "react";
import { getAllPetsService} from '../service';


const useGetAllPets:FC = () => {
  
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {

    const fetchPets = async () => {
      try {
      setLoading(true);

        const data: Pet = await getAllPetsService();
        console.log(data);
        
        setPets(data);
      } catch (error) {
        setError(error);
      } finally {
      setLoading(false);
    }
    }

    fetchPets();
    
    
  }, [])

  return {
    pets,
    loading,
    error
  }

}

export default useGetAllPets

interface Pet {
  pet_id: number;
  name: string;
  species: string;
  sex: string;
  weight: string;
  birthdate: string;
  breed: string;
  status: string;
  description: string;
  date_added: string;
  adoption_date: string | null;
  created_at: string;
  pet_photos: string[];
  age: string;
}
