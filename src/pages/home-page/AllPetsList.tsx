import React from 'react'
import useGetAllPets, { Pet } from '../../hooks/useGetAllPets'
import PetCard from '../../components/PetCard'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'


const AllPetsList: React.FC = () => {
    const { pets, loading, error } = useGetAllPets()

    if (loading) return <Loading />
    if (error) return toast.error(error)

    return (
        pets.length
            ? (<ul>
                {pets
                    .filter((pet: Pet) => pet.status === 'Buscando')
                    .map((pet: Pet) => (
                        <li key={pet.pet_id}>
                            <PetCard pet={pet} />
                        </li>
                    ))}
            </ul>
            )
            : <p>No hay ninguna mascota disponible</p>
    )
}

export default AllPetsList
