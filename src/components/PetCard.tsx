import { FC } from 'react'
import { Pet } from '../hooks/useGetAllPets'

interface PetCardProps {
  pet: Pet;
}

const PetCard: FC<PetCardProps> = ({ pet }) => {
    const { name, pet_photos: petPhotos, age, breed, sex, description, weight } = pet

    return (
        <div>
            <h2 className='text-2xl'>{name}</h2>
            {petPhotos.map((photo, index) => (
                <img key={index} src={`${import.meta.env.VITE_BACK_URL}/uploads/${photo}`} alt={`Pet Photo ${index + 1}`} />
            ))}
            <h3>{age}</h3>
            <h3>{breed}</h3>
            <h3>{sex}</h3>
            <h3>{weight}</h3>
            <p>{description}</p>

        </div>
    )
}

export default PetCard
