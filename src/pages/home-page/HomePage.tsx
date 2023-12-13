import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomePageMain from '../../components/HomePageMain'
import AllPetsList from './AllPetsList'
import AllExperiencesList from './AllExperiencesList'


function HomePage () {
    return (
        <>
            <Header />
            <HomePageMain />
            <AllPetsList />
            <AllExperiencesList />
            <Footer />
        </>
    )
}
export default HomePage
