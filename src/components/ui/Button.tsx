

interface ButtonProps {
    text: string,
    onClick?: () => void,
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-purplish text-sm rounded-xl py-4 font-medium px-6 cursor-pointer">
        {text}
    </button>
  )
}

export default Button