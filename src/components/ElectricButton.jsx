import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap } from 'lucide-react'

export default function ElectricButton() {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
      navigate('/AboutPage')
    }, 300)
  }

  return (
    <button
      className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
      onClick={handleClick}
    >
      <Zap
        className={`mr-2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
          isClicked ? 'text-yellow-300' : 'text-white'
        }`}
      />
      About Us
    </button>
  )
}