import Head from 'next/head'
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';
import { useSession , signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col min-h-screen pb-2 bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <Header/>
      {session && (
       <>
       <Feed />
       
       </>
      )}
    </div>
  )
}
