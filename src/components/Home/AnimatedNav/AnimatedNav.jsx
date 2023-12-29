/** @format */
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
const AnimatedNav = () => {
	const mainVarian = {
		open: {
			x: 0,
			transition: {
				
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
		close: {
			x: "1",
			transition: {
				
				duration: 0.3,
			},
		},
	};

    const itemVariable = {
		open: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
		close: {
			opacity: 0,
			y: 20,
			transition: { duration: 0.2 },
		},
	};
    
     const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='py-10 bg-red-200 px-10'>
			{/* <motion.div
				variants={mainVarian}
				initial='close'
				animate='open'
				className='w-[200px] h-[200px] bg-white flex flex-col items-center justify-center gap-3'
			>
				{[1, 2, 3].map(item => (
					<motion.div key={item}
						variants={itemVariable}
						className='w-[30px] h-[30px] bg-gray-950'
					></motion.div>
				))}
				
			</motion.div> */}

			<motion.div
				onClick={() => setIsOpen(!isOpen)}
				whileTap={{ scale: 0.95 }}
				className='flex w-[20%] bg-white px-4 py-2 rounded-sm justify-between items-center mx-auto cursor-pointer'
            >
                
				<p>Menu</p>
				<motion.span
					initial={false}
					animate={{
						rotate: isOpen ? "180deg" : "0deg",
					}}
				>
					<IoMdArrowDropdown />
				</motion.span>
			</motion.div>

			<motion.div
				className='w-[20%] mx-auto mt-3 rounded-sm overflow-hidden'
				variants={mainVarian}
				animate={isOpen ? "open" : "close"}
			>
				<motion.div
					variants={itemVariable}
					
					whileHover={{ backgroundColor: "#1d1d1d" }}
					className='px-5 py-2 bg-white'
					
				>
					item -1
				</motion.div>
				<motion.div
					variants={itemVariable}
					whileHover={{ backgroundColor: "#1d1d1d" }}
					className='px-5 py-2 bg-white'
					
				>
					item -1
				</motion.div>
				<motion.div
					variants={itemVariable}
					whileHover={{ backgroundColor: "#1d1d1d" }}
					className='px-5 py-2 bg-white'
					
				>
					item -1
				</motion.div>
			</motion.div>
		</div>
	);
};

export default AnimatedNav;
