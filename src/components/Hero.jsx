import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col
        justify-center items-center mt-5'>
          <div className='h-5 w-5 rounded-full
          bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40
          violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}
          text-white`}>Welcome to Our Website <span 
          className='text-[#915eff]'>
          </span></h1>
          <p className={`${styles.heroSubText} mt-2
          text-white-100`}>
            Learn more about our <em className='text-[#915eff]'>Company and services&nbsp;</em>
          </p>
          <button 
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
          border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5" 
          onClick={() => alert("Thank you for your interest in our company!")}>
            Click me
          </button>
        </div>
        
      </div>
    </section>
    
  );
}

export default Hero;