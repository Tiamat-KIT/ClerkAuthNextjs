"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z, { string } from "zod"
import submit from "../PostSubmit"

const schema = z.object({
    // name: z.string().min(1,{message: "入力はしてください"}),
    param: z.string().min(1,{message: "投稿内容がないです"})
})

export type PostFormFields = z.infer<typeof schema>

export default function PostForm(){
    const {register,handleSubmit,formState: {errors}} = useForm<PostFormFields>(
        {
            resolver: zodResolver(schema),
            defaultValues: {
                param: ""
            }
        }
    )

    const onSubmit = async(data: PostFormFields) => {
        await submit(data)
    }
    
    return (
    <form /* action={submit} */ onSubmit={handleSubmit((data) => onSubmit(data))} className="flex flex-col">
        
        <textarea id="textarea" /* name="param" */ className="rounded-lg" {...register("param")}/>
        <button type="submit" className="mt-5">Submit</button>
    </form>
    )
} 
// 参考：https://brockherion.dev/blog/posts/using-react-hook-form-with-nextjs-13-server-actions/