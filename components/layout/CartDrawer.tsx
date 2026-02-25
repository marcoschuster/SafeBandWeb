'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, ArrowRight, Watch } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'

export default function CartDrawer() {
    const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, totalPrice } = useCart()

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="text-cyan-600" />
                                <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close cart"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <ShoppingBag size={40} className="text-gray-300" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                                    <p className="text-gray-500 mt-2">Looks like you haven&apos;t added anything yet.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-6 text-cyan-600 font-semibold hover:underline"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} flex-shrink-0 flex items-center justify-center text-white overflow-hidden p-2`}>
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-md" />
                                            ) : (
                                                item.category === 'band' ? <Watch size={32} /> : <div className="w-8 h-8 rounded-full bg-white/30" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-gray-900 truncate">{item.name}</h4>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 p-1"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                            <p className="text-gray-500 text-sm mb-3 line-clamp-1">{item.description}</p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center border border-gray-200 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-gray-50 text-gray-600"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-gray-50 text-gray-600"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <span className="font-bold text-cyan-600">${item.price * item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-600 font-medium">Subtotal</span>
                                    <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
                                </div>
                                <Link
                                    href="/checkout"
                                    onClick={() => setIsCartOpen(false)}
                                    className="w-full py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-2xl font-bold text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                                >
                                    Checkout <ArrowRight size={20} />
                                </Link>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    Free shipping included on all orders.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
