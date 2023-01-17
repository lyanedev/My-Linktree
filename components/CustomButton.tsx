import {motion} from 'framer-motion'

import {ButtonType} from './Content'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineDribbble, AiOutlineTwitter} from 'react-icons/ai'
import toast, {Toaster} from 'react-hot-toast'


export default function CustomButton({link, type}: Props) {

    const NOTIFY = () => toast.error('On progress. Coming soon!', {
        position: 'top-right',
        duration: 1500
    })

    return (
        <>
            <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                href={link.available ? link.url : undefined}
                target={link.available ? '_blank' : undefined}
                rel={link.available ? 'noreferrer' : undefined}
            >
                <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    type={'button'}
                    onClick={link.available ? undefined : NOTIFY}
                    className={'w-full flex gap-2 items-center bg-[#1C2835] text-white rounded-xl border-white border-2 px-6 py-2'}
                >
                    {
                        type === ButtonType.LINK && link.image
                    }
                    {
                        type === ButtonType.SOCIAL && (
                            link.title === 'GitHub' ? <AiFillGithub/> : link.title === 'Twitter' ?
                                <AiOutlineTwitter/> : link.title === 'Instagram' ?
                                    <AiFillInstagram/> : link.title === 'Dribbble' ? <AiOutlineDribbble/> :
                                        <AiFillLinkedin/>
                        )
                    }
                    {link.title}
                </motion.button>
            </motion.a>
            <Toaster/></>
    )
}

interface Props {
    link: {
        title: string,
        url: string,
        image?: string
        available?: boolean
    }
    type: ButtonType
}