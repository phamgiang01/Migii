import { useNavigate } from 'react-router-dom'
import {Button, Description} from "./ItemBannerPractice.tsx";
import mistake from '../../assets/mistake.png'

const BannerPractice = () => {
  const navigate = useNavigate()
  return (
    <div className='my-6'>
      <div className='grid grid-cols-4 gap-x-6 mb-14'>
        <Button onClick={() => {navigate('/practice')}} value='Luyện tập'/>
        <Button onClick={() => {navigate('/exam')}} value='Thi'/>
        <Button onClick={() => {navigate('/roadmap')}} value='Lộ trình'/>
        <Button onClick={() => {}} value='Nâng cấp'/>
      </div>
      
      <h4 className='text-[26px] font-medium text-center mb-10'>BẠN CÓ MẮC NHỮNG TƯ DUY SAI LẦM NÀY?</h4>
      <div className='flex items-center gap-6'>
        <img src={mistake as string} alt=""/>
        <div className='flex-1 grid grid-cols-2 gap-8 mb-[24px]'>
          <Description title='CHỈ HỌC KHÔNG "HÀNH"' value='Chỉ học lý thuyết suông, không thực hành, luyện tập'/>
          <Description title='LƠ LÀ "KỶ LUẬT"' value='Không biết tập trung vào đâu, không rõ mục tiêu phấn đấu'/>
          <Description title='CHỌN SAI "CÁCH HỌC"' value='Học tập theo kiểu "nước đến chân mới nhảy", học theo cảm tính'/>
          <Description title='COI NHẸ "TÂM LÝ"' value='Căng thẳng, lo lắng quá mức, ảnh hưởng đến khả năng tập trung và ghi nhớ kiến thức'/>
        </div>
      </div>
    </div>
  )
}

export default BannerPractice