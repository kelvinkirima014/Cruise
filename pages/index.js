import Head from 'next/head'

export default function Home() {
  return (
    <div>
     <nav className="flex justify-between">
       <div>
         <span>Cruise</span>
       </div>
       <div>
         <ul className="flex space-x-2">
          
           <li>Services</li>
           <li>Blog</li>

         </ul>
       </div>
     </nav>
    </div>
    
    
  )
}
