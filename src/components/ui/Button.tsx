// icons
import { Heart } from "lucide-react"

interface ButtonProps {
  text: string,
  varient: 'primary' | 'secondary',
  size?: 'regular',
  onClick?: () => void,
}

const Button = ({ text, varient, size, onClick }: ButtonProps) => {


  return (
    <>
      {
        varient === 'primary' ? (
          <button onClick={onClick} className="bg-purplish text-xs md:text-sm rounded-xl px-3 py-4 font-medium md:px-6 cursor-pointer">
            {text}
          </button>
        ) :
          (
            <button
             className={`${size === 'regular' ? 'p-1 md:p-2': 'p-3'} rounded-xl bg-gradient-to-br from-white to-gray-400 shadow-md border border-gray-200 backdrop-blur-lg cursor-pointer text-[#6100C2]`}>
              <Heart size={20}/>
            </button>
          )

      }


    </>
  )
}

export default Button