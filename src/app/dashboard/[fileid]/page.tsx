import ChatWrapper from '@/components/chat/ChatWrapper'
import PdfRenderer from '@/components/PdfRenderer'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { db } from '@/db'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { notFound, redirect } from 'next/navigation'

interface PageProps {
    params: {
        fileid: string
    }
}

const Page = async ({ params }: PageProps) => {
    const { fileid } = params

    const { getUser } = getKindeServerSession()
    const user = getUser()

    if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

    // Making sure that we can only access our own files
    const file = await db.file.findFirst({
        where: {
            id: fileid,
            userId: user.id,
        },
    })

    if (!file) notFound()

    const plan = await getUserSubscriptionPlan()

    return (
        <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
            <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
                {/* Left sidebar & main wrapper */}
                <div className="flex-col flex-1 xl:flex">
                    <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                        {/* Main area */}
                        <PdfRenderer url={`https://utfs.io/f/${file.key}`} />
                    </div>
                    <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                        <div className='text-center text-2xl font-bold'>
                            Model Answer Key
                        </div>
                        <div className='flex flex-row h-[20vh] w-full m-3 rounded-lg bg-blue-600/25 justify-left items-center p-2'>
                            <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="text" placeholder='Enter the model answer key here !' className=' w-4/5 h-5/6 m-3 rounded-lg bg-zinc-100 text-gray-800/50 p-3'/>
      {/* <Button type="submit">Submit</Button> */}
    </div>
                            
                            <div className='flex flex-col justify-left items-center p-4'>
                                <div className='flex flex-row justify-left items-center p-2 gap-2'>
                                    <Switch />
                                    <div className='text-sm text-left w-full p-1 whitespace-nowrap'>
                                    Strict checking mode
                                    </div>
                                    
                                </div>
                                <div className='flex flex-row justify-center items-center p-2 gap-2'>
                                    <Switch />
                                    <div className='text-sm  text-left w-full p-1 whitespace-nowrap'>
                                        Enable AI Feedbacks
                                    </div>
                                    
                                </div>
                                <div className='flex flex-row justify-center items-center p-2 gap-2'>
                                    <Switch />
                                    <div className='text-sm  text-left w-full p-1 whitespace-nowrap'>
                                    Better Data Analytics
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
                    <ChatWrapper
                        isSubscribed={plan.isSubscribed}
                        fileId={file.id}
                    />
                </div>
            </div>
        </div>
    )
}

export default Page
