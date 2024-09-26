import imageBanner from '../assets/migii.png'


interface IProps {
  title: string
}
const Banner = ({title}: IProps) => {
  return (
    <div className='flex items-center justify-between px-[20px] pb-[20px]'>
      <h3 className='text-[68px] text-[#00b2a5] font-medium' dangerouslySetInnerHTML={{ __html: title }}></h3>
      <img src={imageBanner as string} alt="migii"/>
    </div>
  )
}

export default Banner