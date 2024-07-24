import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3DPin'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'


const RecentProjects = () => {
    return (
        <div id='projects' className='py-20'>
            <h1 className='heading'>
                A small selection of {" "}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]' key={id}>
                        <PinContainer
                            title={link}
                            href={link}
                        >
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] lg:mb-10 mb-5'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    {/* <img src="bg.png" alt="bg-img" /> */}
                                    <Image
                                        src="/bg.png"
                                        alt='bg.png'
                                        fill
                                    />
                                </div>
                                {/* <img src={img} alt={title} className='z-10 absolute bottom-0' /> */}
                                <Image
                                    className='z-10 absolute bottom-0'
                                    src={img}
                                    alt={title}
                                    fill
                                />
                            </div>
                            <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1'>{title}</h1>

                            <p className='lg:text-sm lf:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>

                            <div className="flex items-center justify-between lg:mt-7 mt-5 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}
                                        >
                                            {/* <img className='p-2' src={icon} alt={icon} /> */}
                                            <Image
                                                src={icon}
                                                alt={icon}
                                                fill
                                                className='p-2'
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className='flex lg:text-base md:text-sm text-xs text-purple'>Check Live Site</p>
                                    <FaLocationArrow
                                        className='ms-3'
                                        color='#CBACF9'
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects