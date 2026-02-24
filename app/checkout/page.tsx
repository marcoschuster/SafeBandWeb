'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { ArrowLeft, CreditCard, Truck, ShieldCheck, ShoppingBag, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart()
    const router = useRouter()
    const [isProcessing, setIsProcessing] = useState(false)
    const [step, setStep] = useState(1) // 1: Info, 2: Payment, 3: Success

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitInfo = (e: React.FormEvent) => {
        e.preventDefault()
        setStep(2)
    }

    const handleProcessPayment = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 3000))

        setIsProcessing(false)
        setStep(3)
        clearCart()
    }

    if (items.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                    <Link href="/" className="text-cyan-600 font-semibold hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Shopping
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Main Content */}
                    <div>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="info"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h1 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                        <Truck className="text-cyan-600" /> Shipping Information
                                    </h1>
                                    <form onSubmit={handleSubmitInfo} className="space-y-6">
                                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="md:col-span-2">
                                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="you@example.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">First Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="John"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Last Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Address</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="123 Smart St"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">City</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleInputChange}
                                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="Berlin"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Postal Code</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="postalCode"
                                                        value={formData.postalCode}
                                                        onChange={handleInputChange}
                                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="10115"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3"
                                        >
                                            Continue to Payment
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-colors mb-6"
                                    >
                                        <ArrowLeft size={18} /> Back to Shipping
                                    </button>
                                    <h1 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                        <CreditCard className="text-cyan-600" /> Payment Details
                                    </h1>
                                    <form onSubmit={handleProcessPayment} className="space-y-6">
                                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                                            <div className="space-y-6">
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Card Number</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="cardNumber"
                                                        value={formData.cardNumber}
                                                        onChange={handleInputChange}
                                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="XXXX XXXX XXXX XXXX"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Expiry Date</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="expiry"
                                                            value={formData.expiry}
                                                            onChange={handleInputChange}
                                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                            placeholder="MM / YY"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">CVC</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="cvc"
                                                            value={formData.cvc}
                                                            onChange={handleInputChange}
                                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                                                            placeholder="123"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                                    <ShieldCheck className="text-green-500 flex-shrink-0" />
                                                    <p className="text-xs text-gray-500">
                                                        Your payment is secured with industry-standard 256-bit encryption. cards are accepted for testing purposes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            disabled={isProcessing}
                                            type="submit"
                                            className="w-full py-5 bg-cyan-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-cyan-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <Loader2 className="animate-spin" /> Processing...
                                                </>
                                            ) : (
                                                `Pay $${totalPrice}`
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white p-12 rounded-[3.5rem] shadow-2xl text-center border border-white"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <ShieldCheck size={48} className="text-green-600" />
                                    </div>
                                    <h1 className="text-4xl font-black text-gray-900 mb-4 text-balance">Order Completed Successfully!</h1>
                                    <p className="text-xl text-gray-500 mb-10 text-balance">
                                        Thank you, {formData.firstName}! We've received your order and are preparing it for shipment.
                                    </p>

                                    <div className="bg-gray-50 p-8 rounded-3xl mb-10 text-left">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Estimated Delivery</span>
                                            <span className="text-cyan-600 font-bold">7 Business Days</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Order ID</span>
                                            <span className="text-gray-900 font-bold font-mono">#SB-{Math.floor(Math.random() * 999999)}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => router.push('/')}
                                        className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3"
                                    >
                                        Return to Homepage
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sidebar / Order Summary */}
                    {step !== 3 && (
                        <div className="lg:sticky lg:top-32 h-fit">
                            <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <ShoppingBag className="text-cyan-600" /> Order Summary
                            </h2>
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 divide-y divide-gray-50">
                                <div className="pb-6 space-y-4">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-[10px]`}>
                                                    SB
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                                    <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-gray-900">${item.price * item.quantity}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="py-6 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 font-medium">Subtotal</span>
                                        <span className="text-gray-900 font-bold">${totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 font-medium">Shipping</span>
                                        <span className="text-green-600 font-bold uppercase tracking-wider text-[10px] mt-1">Free</span>
                                    </div>
                                </div>
                                <div className="pt-6 flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <span className="text-3xl font-black text-cyan-600">${totalPrice}</span>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
