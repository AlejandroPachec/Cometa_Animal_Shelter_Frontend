import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomePageMain from '../../components/HomePageMain'
import AllPetsList from './AllPetsList'
import AllExperiencesList from './AllExperiencesList'
import AboutUs from '../aboutUs/AboutUs'


function HomePage () {
    return (
        <>
            <Header />
            <HomePageMain />
            <AllPetsList />
            <AllExperiencesList />
            <AboutUs />
            <Footer />
        </>
    )
}
export default HomePage
