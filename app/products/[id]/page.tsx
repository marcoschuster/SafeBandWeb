'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ArrowLeft, ShoppingCart, Check, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function ProductPage() {
    const params = useParams()
    const router = useRouter()
    const { addToCart } = useCart()
    const [visible, setVisible] = useState(false)

    const id = params?.id as string | undefined
    const product = id ? products.find(p => p.id === id) : undefined

    useEffect(() => {
        // Tiny delay lets the DOM settle before we animate in
        const t = setTimeout(() => setVisible(true), 30)
        return () => clearTimeout(t)
    }, [id])

    if (!id) {
        return <div className="min-h-screen" />
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <Link href="/" className="text-cyan-600 font-semibold hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Homepage
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Product Visual */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease',
                        }}
                        className={`aspect-square rounded-[3rem] bg-gradient-to-br ${product.color} shadow-2xl flex items-center justify-center text-white relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            {product.image ? (
                                <div className="w-full h-full p-3">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                        style={{
                                            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.55)) drop-shadow(0 2px 8px rgba(0,0,0,0.45)) drop-shadow(0 0px 2px rgba(0,0,0,0.3))'
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="relative">
                                    <Sparkles className="w-48 h-48 opacity-20 absolute -top-10 -left-10 blur-xl text-yellow-200" />
                                    <div className="w-64 h-64 bg-white/10 rounded-full flex flex-col items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
                                        <div className="w-20 h-40 bg-white/20 rounded-t-full rounded-b-lg border border-white/30" />
                                        <div className="mt-4 font-bold tracking-widest text-xl opacity-80 uppercase">{product.name.split(' ')[0]}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(40px)',
                            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
                        }}
                        className="flex flex-col"
                    >
                        <div className="mb-8">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-sm ${product.category === 'band' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                {product.category === 'band' ? 'Smart Wearable' : 'Scent Pod Collection'}
                            </span>
                            <h1 className="text-5xl font-black text-gray-900 mb-4">{product.name}</h1>
                            <div className="text-4xl font-bold text-cyan-600 mb-6">${product.price}</div>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                {product.longDescription}
                            </p>
                        </div>

                        {/* Features/Ingredients */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Key Features</h3>
                                <ul className="space-y-3">
                                    {product.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3 text-gray-700">
                                            <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} className="text-cyan-600" />
                                            </div>
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {product.ingredients && (
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Ingredients</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {product.ingredients.map(ingredient => (
                                            <span key={ingredient} className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 border border-gray-100">
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-auto space-y-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 group"
                            >
                                Add to Cart <ShoppingCart className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-sm text-gray-400">
                                Ships within 24 hours. Free returns within 30 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
