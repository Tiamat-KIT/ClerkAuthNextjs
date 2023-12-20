"use server"
import {tw} from "typewind"
import PostForm from '@/components/form'
import { SignIn, SignInButton, SignInWithMetamaskButton, SignOutButton, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import submit from '@/PostSubmit'
import PostData from '@/components/PostDataCard'

export default async function Home() {
  const PostTexts = ["真っ暗な空間の中で上半身だけコウメ太夫のコスプレした 江頭2:50にﾁｸｼｮ~!!って叫ばれながら追いかけられる夢見た。くそ怖かった"]
  
  return (
    <>
      <h1 className={tw.text_["calc((100vw - 375px) * 10 / 905 + 20px)"]}>Root Page</h1>
        <div className={tw.container.mx_auto.p_4}>
          <PostForm /* submit={submit} *//>  
          <div className='pt-5' />
          <PostData PostText={PostTexts}/>
        </div>
    </>
  )
}