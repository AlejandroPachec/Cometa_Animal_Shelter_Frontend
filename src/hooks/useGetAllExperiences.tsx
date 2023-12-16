import { useState, useEffect, FC } from 'react'
import { getAllExperiencesService } from '../service'

export interface Experience {
  experience_id: number;
  title: string;
  text: string;
  adopter_first_name: string;
  adopter_last_name: string;
  pet_name: string;
  created_at: string;
  modified_at: string | null;
  experience_photos: string[];
}

interface UseGetAllexperiencesResult {
  experiences: Experience[];
  loading: boolean;
  error: string;
}

const useGetAllexperiences : FC = () => {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                setLoading(true)
                const data: Experience[] = await getAllExperiencesService()

                setExperiences(data)
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Error al obtener las experiencias')
            } finally {
                setLoading(false)
            }
        }

        fetchExperiences()
    }, [])

    return {
        experiences,
        loading,
        error
    }
}

export default useGetAllexperiences
