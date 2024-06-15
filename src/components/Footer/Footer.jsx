import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

//original
// function Footer() {
//   return (
    
    
//     <footer className="bg-[#a8dadc] border-y">
//             <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
//                 <div className="md:flex md:justify-between">
//                     <div className="mb-6 md:mb-0">
//                         <Link to="/" className="flex items-center">
                            
//                             <Logo />
//                         </Link>
//                     </div>
//                     <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <Link to="/" className="hover:underline">
//                                         Home
//                                     </Link>
//                                 </li>
                                
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <a
//                                         href="https://github.com"
//                                         className="hover:underline"
//                                         target="_blank"
//                                         rel="noreferrer"
//                                     >
//                                         Github
//                                     </a>
//                                 </li>
                               
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <Link to="#" className="hover:underline">
//                                         Privacy Policy
//                                     </Link>
//                                 </li>
                               
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
//                 <div className="sm:flex sm:items-center sm:justify-between ">
//                     <span className="text-sm text-gray-500 sm:text-center">
//                         © 2024
//                         <a href="_blank" className="hover:underline">
//                             webApp2
//                         </a>
//                         . All Rights Reserved.
//                     </span>
                   
//                 </div>
//             </div>
//         </footer>

//   )
// }

//new responsive design 
function Footer() {
    return (
      <footer className="bg-[#a8dadc] border-y py-8">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <Logo />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
              <div className="mb-6 sm:mb-0">
                <h2 className="text-sm font-semibold text-gray-900 uppercase mb-2">Resources</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6 sm:mb-0">
                <h2 className="text-sm font-semibold text-gray-900 uppercase mb-2">Follow us</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://github.com"
                      className="hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900 uppercase mb-2">Legal</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="/about" className="hover:underline">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="text-sm text-gray-500 text-center">
            © 2024{' '}
            <a href="_blank" className="hover:underline">
              SmileGear
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </footer>
    )
  }


export default Footer