"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z, { string } from "zod"
import submit from "../PostSubmit"
import { useEffect } from "react"

const schema = z.object({
    // name: z.string().min(1,{message: "入力はしてください"}),
    param: z.string().min(1,{message: "投稿内容がないです"})
})

export type PostFormFields = z.infer<typeof schema>

export default function PostForm(){
    useEffect(() => {
        const textareaElement = document.getElementById("textarea") as HTMLTextAreaElement// as HTMLTextAreaElement
        const clientHeight = textareaElement.clientHeight

        textareaElement.addEventListener("input",() => {
            textareaElement.style.height = clientHeight + "px"
            const scollHeight = textareaElement.scrollHeight
            textareaElement.style.height = scollHeight + "px"
        })
    })

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
    <form /* action={submit} */ onSubmit={handleSubmit((data) => onSubmit(data))} className="flex flex-col container p-5 glass-body bg-cyan-300/20">
        <textarea id="textarea" /* name="param" */ className="rounded-lg resize-none w-3/5 m-auto" rows={1} {...register("param")}/>
        <button type="submit" className="mt-5 w-3/5 m-auto">Submit</button>
    </form>
    )
} 
// 参考：https://brockherion.dev/blog/posts/using-react-hook-form-with-nextjs-13-server-actions/