"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNav= () => {
    setisClick(!isClick)
  }
  return (
   
      <>
       <nav className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8" >
                <div className='flex items-center h-16' >
                    <div className='flex items-center'>
                        <div className='space-x-4'>
                            <a href='/' className='text-blue-600'>
                                AEON
                            </a>
                           
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center justify-between space-x-4'>
                            <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Showcase
                            </a>
                            <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Doc
                            </a>
                            <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Blog
                            </a>
                            <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Analytics
                            </a>
                            <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Commerce
                            </a>
                            <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Templates
                            </a>
                            <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Enterpise
                            </a>
                            <div style={{position: 'fixed', right: '0', paddingRight: '50px'}} >
                            <form noValidate action="" role="search" > 
                                <input 
                                  placeholder="Search documentation"
                                  style={{ height:'40px',width:'280px',borderRadius:"10px"}} 
                                  title='Search bar'
                                /> 
                              </form> 
                            </div>
                           
                        </div>

                    </div>
                    <div className='md:hidden items-center' style={{position: 'fixed', right: '0'}}>
                      <button>
                      <svg
                       xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-gray-800'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                          <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 21l-5.2-5.2'
                          />
                          <circle cx="10" cy="10" r="8" />
                      </svg>
                      </button>
                      <button 
                      className='inline-flex items-center justify-right p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white'
                      onClick={toggleNav}>
                       {
                        isClick ? (
                          <svg
                          className='h-6 w-6 text-gray-800'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M18 6l-12 12M6 6l12 12'
                          />
                        </svg>
                        
                        ) : (
                          <svg
                              className='h-6 w-6 text-gray-800'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M10 18h7'
                              />
                            </svg>
                        )
                       }
                      </button>
                    </div>
                </div>
            </div>
            {
              isClick && (
                <div className='md:hidden'>
                  <div className='px-2 pt-2 pb-3 space-y-1 sm:px3'>
                  <a href='/' className='text-gray-800 hover:bg-white hover:text-black rounded-sm'>
                              Showcase
                            </a>
                            <a href='/' className='text-gray-800 block hover:bg-white hover:text-black rounded-sm'>
                              Doc
                            </a>
                            <a href='/' className='text-gray-800 block hover:bg-white hover:text-black rounded-sm'>
                              Blog
                            </a>
                            <a href='/' className='text-gray-800 block hover:bg-white hover:text-black rounded-sm'>
                              Analytics
                            </a>
                            <a href='/' className='text-gray-800 block hover:bg-white hover:text-black rounded-sm'>
                              Commerce
                            </a>
                            <a href='/' className='text-gray-800 block hover:bg-white hover:text-black rounded-sm'>
                              Templates
                            </a>
                            <a href='/' className='text-gray-800 block hover:bg-white hover:text-black rounded-sm'>
                              Enterpise
                            </a>
                  </div>
                </div>
              )
            }
       </nav>
      </>

  );
};

export default Navbar;