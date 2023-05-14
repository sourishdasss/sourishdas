import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ({}: Props) {
  return (
    <motion.div 
      initial = {{
        opacity: 0,
      }}
      animate = {{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.2, 0.4, 0.6, 0.8, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition = {{
        duration: 3
      }}
      className = "relative flex justify-center items-center">
      <div className = "absolute border border-[#3792c0] rounded-full h-[200px] w-[200px] mt-52 animate-ping"/>
      <div className = "rounded-full border border-[#3792c0] opacity-50 h-[400px] w-[400px] absolute mt-52 animate-ping"/>
      <div className = "rounded-full border border-[#3792c0] opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse"/>
      <div className = "rounded-full border border-[#3792c0] opacity-10 h-[700px] w-[700px] absolute mt-52 animate-ping"/>
      <div className = "rounded-full border border-[#333333] opacity-20 h-[800px] w-[850px] absolute mt-52"/> 
    </motion.div>
  )
}