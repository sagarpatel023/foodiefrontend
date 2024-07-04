import landingimage from '../assets/landing.png';
import downloadimage from '../assets/appDownload.png';
import SearchBar, { SearchForm } from '@/components/SearchBar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate(); 
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `search/${searchFormValues.searchQuery}`,


        })
    };
  return (
    <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-1g shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-blue-600">
                Welcome to Foodie.com
            </h1>
            <span className="text-xl">Food is just a click away!</span>
            <SearchBar placeHolder="Search By City or Town" onSubmit={handleSearchSubmit}/>

        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingimage}/>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tigher'>Order Takeaway Even Faster!</span>
                <span>The quickest way to your favourite food</span>
            <img src={downloadimage}/>
            </div>

        </div>
    </div>
  )
}

export default HomePage;