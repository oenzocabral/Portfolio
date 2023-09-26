import Hero from './Home/Hero';
import CertificateCarousel, {certificatesData} from './Home/CertificateCarousel'
import Projects from './Home/Projects';

function Home() {
    return (
        <div className='Home'>
            <Hero />
            <CertificateCarousel certificates={certificatesData} />
            <Projects />
        </div>
    );
}

export default Home;