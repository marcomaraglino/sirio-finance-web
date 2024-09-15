import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './components/Card.jsx';

const web3Text = "Web3 represents the next evolution of the internet, emphasizing decentralization, blockchain technology, and user empowerment. It aims to create a more open, transparent, and user-centric digital ecosystem where individuals have greater control over their data and digital assets. Web3 technologies, such as cryptocurrencies and decentralized applications (dApps), are reshaping industries like finance, art, and governance, promising a future where intermediaries are minimized and peer-to-peer interactions are the norm.";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className= 'flex items-center flex-col justify-center w-full h-max'>
    <p className='font-sans max-h-fit text-left text-gray-50 text-lg leading-relaxed p-4 px-12 md:px-44'>{web3Text}</p>
    </div>
    <div className=" 
    flex items-center justify-center flex-wrap gap-52 mt-10">
      <Card 
        imageSrc='./MainImg.png' 
        title="Effortless loans. Superior UX. AI Driven safety."
      />
      <Card
        imageSrc='./Second.png' 
        title="Lend your assets on fastest chain."
      />
      <Card 
        imageSrc='./Third.png' 
        title="Minimize liquidations with usage of AI."
      />
    </div>
    
  </StrictMode>,
)
