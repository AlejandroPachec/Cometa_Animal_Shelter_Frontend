import { FC } from 'react'
import { Experience } from '../hooks/useGetAllExperiences'

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
    const { title, text, adopter_first_name, adopter_last_name, pet_name, experience_photos } = experience

    return (
        <div>
            <h3>Experiencia</h3>
            <h2>{title}</h2>
            {experience_photos.map((photo, index) => (
                <img key={index} src={`${import.meta.env.VITE_BACK_URL}/uploads/${photo}`} alt={`Experience Photo ${index + 1}`} />
            ))}
            <h3>{adopter_first_name}</h3>
            <h3>{adopter_last_name}</h3>
            <h3>{pet_name}</h3>
            <p>{text}</p>

        </div>
    )
}

export default ExperienceCard
