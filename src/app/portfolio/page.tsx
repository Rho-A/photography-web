'use client';

import { Gallery } from "@/components/Gallery";
import { SubNavBar } from "@/components/SubNavBar";
import React, { useState, useEffect } from 'react';
import type Photo from "@/components/Photo";
import { Modal } from "@/components/Modal";
import { BodyHeading }
    from "@/components/BodyHeading";

function PortfolioPage() {
    const [category, setCategory] = useState<string>(`all`);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const result = await fetch(`/api/supabase?category=${category}`);
                const { data, error } = await result.json();

                if (error) {
                    setPhotos([]);
                } else {
                    setPhotos(data);
                }

            } catch (err) {
                console.log("Failed to fetch");
            }
        }
        fetchPhotos();
    }, [category])

    return (
        <>
            <BodyHeading heading='Portfolio' subheading='Fujifilm X-S20 | Fujinon XF16-50mm F2.8-4.8 R LM WR' font='serif' subFont='serif' />
            <SubNavBar category={category} setCategory={setCategory} />
            <Gallery photos={photos} onPhotoClick={setSelectedPhoto} />
            {selectedPhoto && (
                <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
            )}
        </>
    )
}

export default PortfolioPage;