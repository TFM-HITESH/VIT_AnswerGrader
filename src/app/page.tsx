import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Faqs from '@/components/FAQs'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
        <div className='bg-gray-50 max-h-[100vh] max-w-[100vw]'>

            
<div className='bg-[#c5ead3] absolute top-[-6rem] right-[11rem] h-[31.25rem]  w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] xsm:w-[0rem]'></div>
<div className='bg-[#dbd7fb] absolute top-[-1rem] left-[35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] xsm:w-[0rem]'></div>
            <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
                <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/90">
                    <p className="text-sm font-semibold text-gray-700">
                        QuickGrade is now public !
                    </p>
                </div>
                <h1 className="max-w-4xl text-5xl z-10 font-bold md:text-6xl lg:text-7xl">
                    Tired of
                    <span className="text-blue-600"> grading<hr/> papers</span> by your own hand?
                </h1>
                <p className="mt-5 max-w-prose z-30 text-muted-foreground sm:text-lg">
                Are you a teacher tired of grading thousands of papers by hand? Are you a student struggling to find reliable evaluation for the practice papers you attempt? Presenting, QuickGrade.
                </p>

                <Link
                    className={buttonVariants({
                        size: 'lg',
                        className: 'mt-5  z-10 ',
                    })}
                    href="/dashboard"
                    target="_blank"
                >
                    Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </MaxWidthWrapper>

            {/* value proposition section */}
            <div>
                <div className="relative isolate">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c5ead3] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>

                    <div>
                   
                                
                                {/*<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                    <Image
                                        src="/dashboard-preview.jpg"
                                        alt="product preview"
                                        width={1364}
                                        height={866}
                                        quality={100}
                                        className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                                    />
                        </div>*/}
                    </div>

                    <div className="mx-auto mb-32 mt-32 max-w-7xl sm:mt-56 xsm:px-2 sm:px-0">
                <div className="mb-12 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="mt-2 font-bold text-4xl  z-30  sm:text-5xl">
                        QuickGrade is <span className='text-blue-600'>your one stop solution</span> for everything evaluation. 
                        </h2>
                        <p className=' mt-8 font-semibold text-base z-10 text-black sm:text-base leading-10'>
                        Exam papers, Assignments, Quizzes. You name it. Using cuting edge Artificial Intelligence and industry leading OCR tech, QuickGrade evaluates papers at light speed while providing actionable insights and detailed explanations.
                        </p>
                    </div>
                </div>
                </div>

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </div>

            {/* Feature section */}
            <div className="mx-auto mb-32 mt-32 max-w-6xl sm:mt-56 xsm:px-2">
                <div className="mb-12 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className=" mt-2 font-bold text-4xl z-30  sm:text-5xl">
                          How to use QuickGrade?
                        </h2>
                        <h6 className=' mt-11 font-bold text-base z-10 text-blue-600 sm:text-base leading-10'>
                        Using QuickGrade is simple.  
                        </h6>
                    </div>
                </div>

                {/* steps */}
                <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-r-4 border-ring py-2 pr-4 md:border-r-0 md:border-t-2 md:pb-0 md:pr-0 md:pt-4">
                            <span className="text-sm font-medium text-primary">
                                Step 1
                            </span>
                            <span className="text-xl font-semibold">
                                Sign into your account and choose the appropriate plan
                            </span>
                            <span className="mt-2 text-muted-foreground">
                                Either starting out with a free plan or choose
                                our{' '}
                                <Link
                                    href="/pricing"
                                    className="text-blue-700 underline underline-offset-2"
                                >
                                    pro plan
                                </Link>
                                .
                            </span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-r-4 border-ring py-2 pr-4 md:border-r-0 md:border-t-2 md:pb-0 md:pr-0 md:pt-4">
                            <span className="text-sm font-medium text-primary">
                                Step 2
                            </span>
                            <span className="text-xl font-semibold">
                            Find a paper to grade. 
                            </span>
                            <span className="mt-2 text-muted-foreground">
                            Fill out the questions, the expected answers and upload the answer script
                            </span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-r-4 border-ring py-2 pr-4 md:border-r-0 md:border-t-2 md:pb-0 md:pr-0 md:pt-4">
                            <span className="text-sm font-medium text-primary">
                                Step 3
                            </span>
                            <span className="text-xl font-semibold">
                            Click the start evaluation button
                            </span>
                            <span className="mt-2 text-muted-foreground">
                                {/*It&apos;s that simple. Try out ChatPDF today -
                                it really takes less than a minute.*/}
                            </span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-r-4 border-ring py-2 pr-4 md:border-r-0 md:border-t-2 md:pb-0 md:pr-0 md:pt-4">
                            <span className="text-sm font-medium text-primary">
                                Step 4
                            </span>
                            <span className="text-xl font-semibold">
                            Sit back and relax. 
                            </span>
                            <span className="mt-2 text-muted-foreground">
                            
                            </span>
                        </div>
                    </li>
                    
                </ol>

                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mt-16 flow-root sm:mt-24">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image
                                src="/file-upload-preview.jpg"
                                alt="uploading preview"
                                width={1419}
                                height={732}
                                quality={100}
                                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
                </div>
                <HowItWorks/>
                <div className="mx-auto mb-32 mt-32 max-w-7xl sm:mt-56 xsm:px-2 sm:px-0">
                <div className="mb-12 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="mt-2 font-bold text-4xl z-30 sm:text-5xl">
                       Significance
                        </h2>
                        <div className='flex flex-col'>
                        <p className=' mt-8 font-semibold text-base z-10 text-black sm:text-base leading-10'>
                        Globally, teachers spend more than 50% of their time away from classrooms engaged in non-teaching activities and the biggest contributor to this is the evaluation of exam papers, assignments and quizzes.
                       </p>
                       <p className=' mt-8 font-semibold text-base z-10 text-black sm:text-base leading-10'>
                        We are on a mission to get teachers back to doing what they do best, teach. QuickGrade aims to shoulder the weight of consistently and reliably grading papers using bleeding edge tech.
                       </p>
                       <p className=' mt-8 font-semibold text-base z-10 text-black sm:text-base leading-10'>
                       Students benefit from reliable, transparent and consistently graded papers. QuickGrade allows students to prepare for exams as well by allowing the same platform that grades their exam papers to grade their practice papers.
                       </p>
                        </div>
                       
                    </div>
                </div>
                </div>
                {/*<Faqs/>*/}
                <Footer/>
            
            </div>
        </>
    )
}
