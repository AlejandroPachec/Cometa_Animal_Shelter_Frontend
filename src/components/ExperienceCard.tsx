import { FC } from 'react'
import { Experience } from '../hooks/useGetAllExperiences'

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
    const { title, text, adopter_first_name: adopterFirstName, adopter_last_name: adopterLastName, pet_name: petName, experience_photos: experiencePhotos } = experience

    return (
        <div>
            <h3>Experiencia</h3>
            <h2>{title}</h2>
            {experiencePhotos.map((photo, index) => (
                <img key={index} src={`${import.meta.env.VITE_BACK_URL}/uploads/${photo}`} alt={`Experience Photo ${index + 1}`} />
            ))}
            <h3>{adopterFirstName}</h3>
            <h3>{adopterLastName}</h3>
            <h3>{petName}</h3>
            <p>{text}</p>

        </div>
    )
}

export default ExperienceCard
