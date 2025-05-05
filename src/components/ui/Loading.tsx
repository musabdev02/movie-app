import icon from '../../assets/loading.svg';


const Loading = () => {
  return (
   <div className="w-full h-full flex items-center justify-center">
    <img src={icon} alt="loadingIcon" className="w-8 h-8 contrast-[0]"/>
   </div>
  )
}

export default Loading