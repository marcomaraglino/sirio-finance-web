import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ScrollTypingEffect from './typingeffect.jsx'
import Typewriter from './typingeffect.jsx';

const web3Text = "Web3 represents the next evolution of the internet, emphasizing decentralization, blockchain technology, and user empowerment. It aims to create a more open, transparent, and user-centric digital ecosystem where individuals have greater control over their data and digital assets. Web3 technologies, such as cryptocurrencies and decentralized applications (dApps), are reshaping industries like finance, art, and governance, promising a future where intermediaries are minimized and peer-to-peer interactions are the norm.";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className= 'flex items-center flex-col justify-center w-full h-max'>
    <p className='font-sans max-h-fit text-left text-gray-900 text-lg leading-relaxed p-4 px-12 md:px-44'>{web3Text}</p>
    </div>
    <div className=" 
    flex items-center justify-center flex-wrap gap-52 mt-10">
      <div className="relative w-52 h-52 group">
        <img 
          src='./MainImg.png' 
          className='p-5 w-full h-full object-contain transition-all duration-500 group-hover:blur-xl'
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-sans text-white text-left text-3xl font-bold">Effortless loans.
Superior UX.
AI Driven safety.</p>
        </div>
      </div>

      <div className="relative w-52 h-52 group">
        <img 
          src='./Second.png' 
          className='p-5 w-full h-full object-contain transition-all duration-500 group-hover:blur-xl'
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-sans bg-none text-white text-left text-3xl font-bold">Lend your assets on fastest chain.</p>
        </div>
      </div>
      <div className="relative w-52 h-52 group">
        <img 
          src='./Third.png' 
          className='p-5 w-full h-full object-contain transition-all duration-500 group-hover:blur-xl'
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-sans bg-none text-white text-left text-3xl font-bold">Minimize liquidations with usage of AI.</p>
        </div>
      </div>
    </div>
    
  </StrictMode>,
)
