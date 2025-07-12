import type Photo from "./Photo";
import { GrClose } from "react-icons/gr";

type ModalProps = {
    photo: Photo;
    onClose: () => void;
}

function Modal({ photo, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 bg-[rgba(29,29,29,0.88)] flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative overflow-auto" onClick={(e) => e.stopPropagation()}>
                <GrClose onClick={onClose} className="absolute top-2 right-2 text-white hover:cursor-pointer" />
                <img src={photo.fullsize_url} alt={photo.title} className="max-w-full max-h-[85vh] pt-8 pr-8 pl-8 pb-4" />
                <p className="text-white text-center font-serif">{photo.title}</p>
            </div>
        </div>
    )
}

export default Modal;