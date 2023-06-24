// import Image from 'next/image'
import { Inter } from 'next/font/google'
import FetchData from './FetchData';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main>
      <FetchData/>
    </main>
  )
}
