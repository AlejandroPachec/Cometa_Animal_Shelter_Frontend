import React from 'react'
import useGetAllExperiences, { Experience } from '../../hooks/useGetAllExperiences'
import ExperienceCard from '../../components/ExperienceCard'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'


const AllExperiencesList: React.FC = () => {
    const { experiences, loading, error } = useGetAllExperiences()


    if (loading) return <Loading />
    if (error) return toast.error(error)

    return (
        experiences.length
            ? (<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;'>
                {experiences.map((experience: Experience) => (
                    <li key={experience.experience_id}>
                        <ExperienceCard experience={experience} />
                    </li>
                ))}
            </ul>
            )
            : <p>No hay ninguna experiencia disponible</p>
    )
}

export default AllExperiencesList
