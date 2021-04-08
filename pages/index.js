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
     
   
    </div>
    
    
  )
}
