"use server"
export default async function submit(formData: FormData){
    "use server"
    const submitData = {
        Param: formData.get("param"),
        PostedDate: Date.now(),
        LikedCount: 0
    }
    console.log(submitData)
}