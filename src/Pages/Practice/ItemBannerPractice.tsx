import icButtonBannerPractice from '../../assets/icButtonBannerPractice.png'

interface IPropsButton {
  value: string;
  onClick: () => void;
}

interface IPropsDescription {
  value: string;
  title: string;
}

const Button = ({value, onClick}: IPropsButton) => {
  return (
    <div
      className='w-full bg-[#00b2a5] rounded-[15px] text-white pt-[28px] pb-[24px] relative flex items-center justify-center cursor-pointer hover:scale-[1.03] transition-all ease-in-out delay-20'
      onClick={onClick}
    >
      <img src={icButtonBannerPractice as string} alt=""
           className='absolute left-[50%] translate-x-[-50%] top-0 translate-y-[-50%]'/>
      <span className='text-[20px] font-medium'>{value}</span>
    </div>
  )
}

const Description = ({value, title}: IPropsDescription) => {
  return (
    <div className='bg-[#e0f2f0] py-[16px] px-[32px] shadow-custom_01 rounded-[12px]'>
      <div className='mb-[12px] text-[#008b82] uppercase font-medium text-[22px] border-b-2 border-[#00b2a5] pb-[12px] text-center'>{title}</div>
      <span className='flex text-[16px] text-center'>{value}</span>
    </div>
  )
}

export {Button, Description}