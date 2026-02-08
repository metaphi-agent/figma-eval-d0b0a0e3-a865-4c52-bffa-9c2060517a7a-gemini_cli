import React from 'react';
import { cn } from '../../utils/cn';

interface ProductCardProps {
    name: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    discount?: number;
    isNew?: boolean;
    image: string;
}

export const ProductCard = ({ name, price, oldPrice, rating, reviews, discount, isNew, image }: ProductCardProps) => {
    return (
        <div className="group flex flex-col gap-4 cursor-pointer min-w-[270px]">
            <div className="relative bg-secondary rounded-[4px] w-[270px] h-[250px] overflow-hidden flex items-center justify-center p-4">
                <img src={image} alt={name} loading="lazy" className="object-contain w-3/4 h-3/4 group-hover:scale-105 transition-transform duration-300" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {discount && (
                        <span className="bg-primary text-white text-xs px-3 py-1 rounded-[4px]">
                           -{discount}%
                        </span>
                    )}
                    {isNew && (
                        <span className="bg-button1 text-white text-xs px-3 py-1 rounded-[4px] uppercase">
                           New
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                        <img src="./assets/icons/heart.svg" alt="wishlist" className="w-5 h-5" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                        {/* Eye Icon SVG Placeholder */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>

                {/* Add to Cart (Hover) */}
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-base font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Add To Cart
                </button>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-medium text-base truncate">{name}</h3>
                <div className="flex gap-3 text-base font-medium">
                    <span className="text-primary">${price}</span>
                    {oldPrice && <span className="text-gray-400 line-through decoration-gray-400">${oldPrice}</span>}
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        {/* Stars SVG Generator */}
                        {[...Array(5)].map((_, i) => (
                             <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? "#FFAD33" : "#D1D5DB"} stroke="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                             </svg>
                        ))}
                    </div>
                    <span className="text-gray-400 text-sm font-semibold opacity-50">({reviews})</span>
                </div>
            </div>
        </div>
    )
}
