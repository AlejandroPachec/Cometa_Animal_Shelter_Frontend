
import { useState, useEffect } from 'react'
import { getAllPetsService } from '../service'

export interface Pet {
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

interface UseGetAllPetsResult {
  pets: Pet[];
  loading: boolean;
  error: string;
}

const useGetAllPets = () => {
    const [pets, setPets] = useState<Pet[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true)
                const data: Pet[] = await getAllPetsService() as Pet[]
                console.log(data)
                setPets(data)
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Error al obtener las mascotas')
            } finally {
                setLoading(false)
            }
        }

        fetchPets()
    }, [])

    return {
        pets,
        loading,
        error
    }
}

export default useGetAllPets

