import type Photo from "./Photo";
import { GrClose } from "react-icons/gr";
import React, { useState, useEffect } from 'react';

export interface ModalProps {
    photo: string;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ photo, onClose }) => {
    const [photoUrls, setPhotoUrls] = useState('');

    useEffect(() => {
        async function fetchPhotoUrls() {
            const res = await fetch(`/api/aws?key=${encodeURIComponent(photo)}`)
            const data = await res.json();
            setPhotoUrls(data.url)
        }
        fetchPhotoUrls();
    }, [photo])
    return (<>{photoUrls != "" ?
        <div className="fixed inset-0 bg-[rgba(29,29,29,0.88)] flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative overflow-auto border-10 border-white bg-white" onClick={(e) => e.stopPropagation()}>
                <GrClose onClick={onClose} className="absolute top-1 right-1 text-black hover:cursor-pointer" />
                <img src={photoUrls} className="max-w-full max-h-[85vh] pt-8 pr-8 pl-8 pb-4" />
                {/* <p className="text-white text-center font-serif">{photo.title}</p> */}
            </div>
        </div> : null}</>
    )
}

Modal.displayName = "Modal"