import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sourish </title>
      </Head>

      <h1 className="p-10 text-red-200"> Hello</h1>
    </div>
  )
}
