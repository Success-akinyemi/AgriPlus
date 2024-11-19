import SmartFarmingImg from '../../assets/Smart-farming-bg-1.jpg'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Hero() {

    const [text] = useTypewriter({
        words: ['Preventing Climate disaster', 'Preventing Diseases and Pest', 'Access to Relevant Information', 'Modern Farming Practices', 'indigenous Language'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 80,
    });

  return (
    <div className="w-full h-[80vh] relative overflow-hidden">
        <img src={SmartFarmingImg} alt="smart farmin image" className="heroImg w-full h-full object-center object-cover" />
        <div className="absolute left-0 top-0 h-full w-full bg-transparent-bg flex flex-col items-center justify-center">
            <h2 className='text-main-color text-[64px] font-bold'>AgriPlus</h2>
            <div className='text-white text-[32px]'>Redifining Farming in Nigeria</div>
            
            <div className='mt-8 mb-8 text-[28px]'>
                <span className='text-white'>{text}</span>
                <Cursor cursorStyle='🌱' />
            </div>
            
            <p className='text-main-color font-bold text-[21px]'>Providing Solution to agro and social problems making living better</p>
        </div>
    </div>
  )
}

export default Hero