import Image from 'next/image'

import data from '../data.json'
import CustomButton from './CustomButton'


export enum ButtonType {
    LINK = 'link',
    SOCIAL = 'social'
}

export default function Content() {

    return (
        <div className={'w-full flex flex-col gap-12 my-6 max-w-2xl mx-auto'}>
            <header className={'w-full flex flex-col items-center px-12'}>
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
                        <h2 className={'text-xl font-medium text-[#31475E]'}>{data.brand}</h2>
                    </div>
                    <div className={'w-full md:w-2/3 lg:w-1/2'}>
                        <p className={'text-sm text-white font-light text-center'}>{data.description}</p>
                    </div>
                </div>
            </header>

            <main className={'w-full px-6 flex flex-col justify-between gap-4'}>
                {
                    data.links.map((link, index) => (
                        <CustomButton
                            key={index}
                            link={link}
                            type={ButtonType.LINK}
                        />
                    ))
                }

                <div className={'w-2/3 mx-auto border-b-2 border-white my-2'}></div>

                {
                    data.social.map((link, index) => (
                        <CustomButton
                            key={index}
                            link={link}
                            type={ButtonType.SOCIAL}
                        />
                    ))
                }
            </main>

            <footer>
                <div className={'w-full flex flex-col items-center px-6'}>
                    <p className={'text-sm font-light text-[#8A9198]'}>Coded from scratch with <span className={'animate-ping'}>♥️</span></p>
                    <p className={'text-sm font-light text-[#8A9198]'}>Lyane Lamara © 2023</p>
                </div>
            </footer>
        </div>
    )
}