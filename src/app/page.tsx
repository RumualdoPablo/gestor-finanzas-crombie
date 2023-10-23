import "@/app/global.css"
import Image from "next/image"

const Page = () => {
    return (
            <main className="w-full h-[calc(100vh-10rem)] absolute flex justify-between items-center">
                <section className="w-1/2 mx-10">
                    <h2 className="text-[58px] font-bold font-principal">
                        A special budget manager made for Developers.</h2>
                    <p className="font-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vehicula massa in enim luctus. Rutrum arcu.</p>
                    <div className="border-2 rounded-lg w-1/2 py-2 flex justify-between mt-10">
                        <input type="email" placeholder="Enter e-mail adress" className="text-center"/>
                        <button className="rounded-lg bg-slate-950 text-white font-semibold py-3 px-5 mr-1">Get Free Card</button>
                    </div>
                    <div className="flex mt-10 items-center">
                        <p className="border-r-4 mr-2 pr-2 border-slate-900">
                            <span className="font-semibold text-[42px]">2943</span>
                            Cards Delivered
                        </p>
                        <p>
                            <span className="font-semibold text-[42px]">1M+</span>
                            Happy Users
                        </p>
                    </div>
                </section>
                <section className="w-1/2 h-1/2 relative">
                    <Image src={"/card2.svg"} alt="" fill />
                    <Image src={"/card1.svg"} alt="" fill/>
                </section>
            </main>
    )
}

export default Page