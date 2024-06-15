import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import {useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'





function Header() {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Products",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Products",
      slug: "/add-post",
      active: authStatus,
  },
  //PRODUCT 
  {
    name:"MyProduct",
    slug:'/my-product',
    active:authStatus,
  },
  //here about
  {
    name:"About",
    slug:"/about",
    active:true,
  },
  //here for profile
  {
    name:"Profile",
    slug:"/profile",
    active:authStatus,
  }
  
  ]
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  // return (
  //   <header className='py-3 shadow-xl bg-[#457b9d]  '>
  //     <Container>
  //       <nav className='flex flex-wrap sticky '>
  //         <div className='mr-4'>
  //           <Link to='/'>
  //             <Logo width='70px'   />

  //             </Link>
              
  //         </div>
            
            

  //         <ul className='flex ml-auto'>
  //                  {navItems.map((item) => 
  //           item.active ? (
  //             <li key={item.name}>
  //               <button
  //               onClick={() => navigate(item.slug)}
  //               className='inline-bock px-6 py-3 duration-200 hover:bg-[#f1faee] rounded-lg mx-5 active:bg-slate-600'
  //               >{item.name}</button>
  //             </li>
  //           ) : null
  //           )}
  //           {authStatus && (
  //             <li>
  //               <LogoutBtn />

  //             </li>
  //           )}
  //         </ul>
  //       </nav>
  //       </Container>
  //   </header>
  // )


  return (
    <header className='py-3 shadow-xl bg-[#457b9d] sticky top-0 z-10'>
      <Container>
        <nav className='flex flex-wrap justify-between items-center lg:items-stretch lg:flex-nowrap'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          {menuOpen ? (
            <ul className="flex flex-col lg:flex-row justify-center lg:justify-end lg:flex-nowrap">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-4 py-2 lg:px-6 lg:py-3 duration-200 hover:bg-[#f1faee] rounded-lg my-1 lg:my-0 mx-2 lg:mx-5 active:bg-slate-600'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          ) : (
            <ul className="hidden lg:flex justify-center lg:justify-end lg:flex-nowrap">
              
              {/* {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-4 py-2 lg:px-6 lg:py-3 duration-200 hover:bg-[#f1faee] rounded-lg my-1 lg:my-0 mx-2 lg:mx-5 active:bg-slate-600'
                    >
                      {item.name}
                    </button>

                  </li>
                ) : null
              )} */}


              {/* this code is with highlight  */}
              {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  className={`inline-block px-4 py-2 lg:px-6 lg:py-3 duration-300 hover:bg-[#f1faee] rounded-lg my-1 lg:my-0 mx-2 lg:mx-5 active:bg-slate-600 ${item.slug === location.pathname ? 'bg-[#f1faee]' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
              ) : null )}
          

              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
              
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );

}



export default Header