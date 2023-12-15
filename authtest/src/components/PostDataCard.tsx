export default function PostData({PostText}:{PostText: any}){
    //function PostCard(){
        return (
            <>
                <article className="bg-white/30 rounded-lg pt-5 h-20">
                    <div className="flex flex-row">
                        <div className="avatar pl-3 basis-1/12 ">
                            <div className="w-12 h-12 rounded-full">
                                <img src="https://pbs.twimg.com/profile_images/1716981252400766976/CQNHPomm_400x400.jpg" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <div className="pl-5 basis-10/12">
                                <div className="bg-white/10 rounded-lg">
                                    <p className="h-[3.25rem] text-md text-black dark:text-white newcss-autophrase">
                                        {PostText}
                                    </p>
                                </div>
                            </div>
                    </div>
                </article>
                
            </>
        )
    // }
}