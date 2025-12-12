'use client';

import React from 'react';

interface FooterModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images?: string[];
}

export default function FooterModal({ isOpen, onClose, title, images = [] }: FooterModalProps) {
    if (!isOpen) return null;

    return (
        <div className="certification-modal-overlay" onClick={onClose}>
            <div className="certification-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="certification-modal-header">
                    <h3 className="certification-modal-title">{title}</h3>
                    <button className="certification-modal-close" onClick={onClose}>&times;</button>
                </div>
                <div className="certification-modal-body">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`${title} ${index + 1}`}
                            className="certification-modal-image"
                            loading="lazy"
                        />
                    ))}
                    {images.length === 0 && (
                        <p className="text-center text-gray-500 py-10">이미지가 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
