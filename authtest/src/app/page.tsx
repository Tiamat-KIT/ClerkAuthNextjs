"use server"
import PostForm from '@/components/form'
import { SignIn, SignInButton, SignInWithMetamaskButton, SignOutButton, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import submit from '@/PostSubmit'

export default async function Home() {
  return (
    <>
      <h1 className='text-2xl'>Root Page</h1>
        <div className='container mx-auto p-4'>
          <PostForm submit={submit}/>  
        </div>
    </>
  )
}
