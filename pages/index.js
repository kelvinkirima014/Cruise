import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
     <nav className="flex justify-between mt-5">
       <div className="ml-6">
       <Image
         src="/images/logo.png" // Route of the image file
         height={55} // Desired size with correct aspect ratio
         width={175} // Desired size with correct aspect ratio
         alt="Your Name"
           />
       </div>
       <div>
        <Link href="/">
          <a className='my-2 mr-10 px-2 text-xl border-b-2 border-transparent hover:border-black'>Home</a>
        </Link>
        <Link href="/blog">
          <a className='mr-40 text-xl border-b-2 border-transparent hover:border-black'>Blog</a>
        </Link>
       </div>
     </nav>
     <div h-120>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <path fill="#0E4B74" fill-opacity="1" 
       d="M0,320L80,304C160,288,320,256,480,250.7C640,245,800,
       267,960,282.7C1120,299,1280,309,1360,314.7L1440,320L1440,0L1360,
       0C1280,0,1120,0,960,0C800,0,640,
       0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
     </div>

    </div>
    
    
  )
}
