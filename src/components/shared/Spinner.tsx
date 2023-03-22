import Image from 'next/image'
import SpinnerPNG from '../../../public/icons/spinner_white.png'
export default function Spinner() {
   return (
      <Image
         src={SpinnerPNG}
         alt={"Spinner"}
         width={32}
         height={32}
         className="animate-spin"
      />
   )
}
