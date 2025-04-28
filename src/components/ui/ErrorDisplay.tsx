import { AlertTriangleIcon } from "lucide-react"


interface ErrorProps {
    message: string,
    onClick?: () => void,
};

const ErrorDisplay = ({ message, onClick }: ErrorProps) => {

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2 text-gray-300">
        <AlertTriangleIcon color="#d1a54e" size={88}/>
        <h3 className=" font-medium text-sm md:text-xl">Something Went Wrong</h3>
        <p className="text-gray-400 text-xs md:text-sm w-[90%] md:w-96 text-center" > Error: {message}</p>
        <button onClick={onClick} className="text-gray-400 hover:bg-zinc-800 border border-gray-500 p-2 px-2 md:px-4 text-xs md:text-md  rounded-lg mt-2 cursor-pointer">Try Again</button>
    </div>
  )
}

export default ErrorDisplay