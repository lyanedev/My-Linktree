import Image from "next/image"
import data from '../data.json'

import toast, {Toaster} from 'react-hot-toast'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

export default function Content() {

    const NOTIFY = () => toast('Coming soon!', {
        position: 'top-right',
        icon: '🚀'
    });

    return (
        <>
            <header className={'w-full flex flex-col items-center mt-16 px-12'}>
                <div className={'flex flex-col gap-4 items-center'}>
                    <Image
                        src={data.image}
                        alt={`Photo of ${data.name}`}
                        className={'rounded-full border border-white border-4'}
                        width={150}
                        height={150}
                    />
                    <div className={'flex gap-2 items-center'}>
                        <h1 className={'text-xl font-semibold text-white'}>{data.name}</h1>
                        <h2 className={'text-xl font-medium text-[#182635d9]'}>{data.brand}</h2>
                    </div>
                    <p className={'text-sm text-white font-light text-center'}>{data.description}</p>
                </div>
            </header>

            <main>
                <div className={'w-full px-6 flex flex-col justify-between gap-4 mt-6'}>
                    {
                        data.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                <button
                                    type={'button'}
                                    className={'w-full flex gap-3 bg-[#182635d9] text-white rounded-xl border-white border-2 px-6 py-2 hover:scale-105 active:scale-95 transition-all'}
                                >
                                    {link.image} {link.title}
                                </button>
                            </a>
                        ))
                    }
                    <div className={'w-2/3 mx-auto border-b-2 border-white my-2'}></div>
                    {
                        data.social.map((link, index) => (
                            <a
                                key={index}
                                href={link.available ? link.url : undefined}
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                <button
                                    type={'button'}
                                    className={'w-full flex items-center gap-3 bg-[#182635d9] text-white rounded-xl border-white border-2 px-6 py-2 hover:scale-105 active:scale-95 transition-all'}
                                    onClick={link.available ? undefined : NOTIFY}
                                >
                                    {link.title === 'GitHub' ? <AiFillGithub/> : link.title === 'Twitter' ? <AiOutlineTwitter/> : link.title === "Instagram" ? <AiFillInstagram/> : <AiFillLinkedin/>}
                                    {link.title}
                                </button>
                            </a>
                        ))
                    }
                    <Toaster/>
                </div>
            </main>

            <footer>
                <div className={'w-full flex flex-col items-center px-6 mt-12 mb-3'}>
                    <p className={'text-sm font-light text-[#8A9198]'}>Coded from scratch with ♥️</p>
                    <p className={'text-sm font-light text-[#8A9198]'}>Lyane Lamara © 2023</p>
                </div>
            </footer>
        </>
    )
}