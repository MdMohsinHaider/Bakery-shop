import React from 'react'

function Footer() {
    return (
        <footer className=' bg-black text-gray-400 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-7 lg:px-8 mb-12'>

                <div className="w-full sm:w-auto mb-4 sm:mb-0">
    <h3 className="text-lg font-bold mb-2">About Us</h3>
    <p className="text-gray-600">
        Welcome to Bakery Shop privet.litmed company, where our passion is baking fresh, delicious treats for the whole community to enjoy. Every product is made with care, using quality ingredients and time-honored recipes to ensure the best taste in every bite.
    </p>
    <p className="text-gray-600">
        Our bakery is committed to sharing moments of joy, whether you're celebrating a special occasion or just craving something sweet. Step inside and discover your new favorite baked delight – we bake happiness, every day.
    </p>
</div>


                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p className="text-gray-600">Email: mdmohsinhaider6@gmail.com</p>
                    <p className="text-gray-600">Phone: +123456789</p>
                </div>

                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold mb-2">Address</h3>
                    <p className="text-gray-600">ABC-01-industry Area</p>
                    <p className="text-gray-600">Muzaffarpur, Bihar, 843108</p>
                </div>

                <div className="w-full sm:w-auto">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <ul>
                        <li><a href="#" className="text-gray-600 hover:text-gray-950 hover:bg-slate-400 rounded">Facebook</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-950 hover:bg-slate-400 rounded">Twitter</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-950 hover:bg-slate-400 rounded">Instagram</a></li>
                    </ul>
                </div>

            </div>
            <p className=' items-center justify-center text-center text-xs'>©️ 2025 Bakery Shop. All rights reserved.</p>
        </footer>
    )
}

export default Footer