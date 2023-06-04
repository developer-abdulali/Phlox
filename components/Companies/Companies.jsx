import React from "react"
import Link from "next/link"
import Image from "next/image"

const Companies = () => {
  return (
    <section className="flex justify-around items-center max-w-screen-2xl mx-auto mt-20">
        <div className="">
            <Link href="/">
                <Image src="/images/avent.png" alt="Avent" width={100} height={100}/>
            </Link>
        </div>
        <div className="">
            <Link href="/">
                <Image src="/images/fastline.png" alt="Avent" width={100} height={100}/>
            </Link>
        </div>
        <div className="">
            <Link href="/">
                <Image src="/images/RJ.png" alt="Avent" width={100} height={100}/>
            </Link>
        </div>
        <div className="">
            <Link href="/">
                <Image src="/images/chippy.png" alt="Avent" width={100} height={100}/>
            </Link>
        </div>
        <div className="">
            <Link href="/">
                <Image src="/images/bullsy.png" alt="Avent" width={100} height={100}/>
            </Link>
        </div>
        <div className="">
            <Link href="/">
                <Image src="/images/mighty.png" alt="Avent" width={100} height={100}/>
            </Link>
        </div>
    </section>
  )
}

export default Companies