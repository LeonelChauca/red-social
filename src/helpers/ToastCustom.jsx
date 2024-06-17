import { toast } from 'sonner';

export const toastError=(description,title)=>{
    toast(title,{
        className: ' bg-red-600 border-none text-white',
        description:description,
        duration:5000,
    })
}
export const toastOk2=(description,title)=>{
    toast.custom((t)=>(
        <div className='bg-red-600 p-2 rounded-lg'>
            <h1>{title}</h1>
            <p>lorem</p>
        </div>
    ))
}