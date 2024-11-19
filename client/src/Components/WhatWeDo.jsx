import { whatWeDo } from "../data/whatWeDo"

function WhatWeDo() {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-[90%]">
            <h1 className="text-[42px] text-main-color font-semibold">What We Do</h1>

            <div className="flex flex-col mt-12">
                {
                    whatWeDo.map((item, idx) => (
                        <div className={`flex items-center justify-between gap-12 mb-24 ${item.reverse ? 'flex-row-reverse' : ''}`}>
                            <img src={item.img} alt={item.title} className="flex-1 rounded-[24px]" />

                            <div className="flex-1">
                                <span className="flex items-center mb-4 gap-3">
                                    <h3 className="text-main-color font-semibold text-[28px]">{item.title}</h3>
                                    <p className="text-[24px]">{item.emoji}</p>
                                </span>

                                <p className="text-text-black text-[18px]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default WhatWeDo