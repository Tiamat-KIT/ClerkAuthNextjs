"use server"
import { PostFormFields } from "./components/form"
export default async function submit(formData: PostFormFields){
    "use server"
    const submitData = {
        Param: formData.param,
        PostedDate: Date.now(),
        LikedCount: 0
    }
    console.log(submitData)
}