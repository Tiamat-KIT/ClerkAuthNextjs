"use client"

export default function PostForm({submit}:{submit: (formData: FormData) => Promise<void>}){
    
    return (
    <form action={submit} className="flex flex-col">
        <textarea id="textarea" name="param" className="rounded-lg"/>
        <button type="submit" className="mt-5">Submit</button>
    </form>
    )
} 