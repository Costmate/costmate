import cmLogo from '@/src/assets/cm-logo.png'
import costMateLogo from '@/src/assets/costmate-logo.png'

export default function Logo({ isConcise }) {

  return (
    <div className={`${isConcise ? 'w-[70px]' :'w-[160px]'} h-[50px] flex justify-center`}>
      <img src={isConcise ? cmLogo : costMateLogo} alt="Cost Mate Logo" className='h-full' />
    </div>
  )
}
