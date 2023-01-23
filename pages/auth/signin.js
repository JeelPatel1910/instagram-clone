import React from 'react';
import logo from '../../public/assets/logo.png';
import Image from 'next/legacy/image';
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';

//Browser
function signIn({providers}) {
  return (
    < >
    <Header />
    <div className='flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center'>
    
     <Image src={logo} width="300" height="80" he className="w-80 h-50" alt=""/>   
     <p>This is not a REAL app, it is built for educational purposes only</p>   
    <div className='mt-80'>
    {Object.values(providers).map((provider) => (
      <div key={provider.name} className=''>
        <button 
         className='p-3 bg-blue-500 rounded-lg text-white'
         onClick={() => SignIntoProvider(provider.id , { callbackUrl : '/' })}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </div>
    </div>
 
  </>
  )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }

export default signIn;