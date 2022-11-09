import React from "react";
import NinjaTradersLogo from "../../assets/images/ninja-trader-image.png";

const NinjaTraders = () => {
    return (
        <div className="container flex justify-center items-center flex-col">
            <div className="mb-10 md:mb-6 lg:mb-10 xl:mb-4 px-[35px] mt-5 md:mt-10 xl:mt-12">
                <a href="https://ninjatrader.com/LP/VendorDemo/">
                    <img
                        className="h-auto max-w-[306px] md:max-w-[402px] pb-10 md:pb-6 lg:pb-10 xl:pb-4"
                        src={NinjaTradersLogo}
                        alt="description"
                    />
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 pt-[27px] pb-11 md:pt-4 md:-pb-[70px] lg:pt-10 lg:pb-[168px] lg:gap-x-6 xl:gap-x-36 px-[35px] md:px-100px lg:px-20  xl:px-[110px]">
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Risk Disclosure: Futures and forex trading contains
                    substantial risk and is not for every investor. An investor
                    could potentially lose all or more than the initial
                    investment. Risk capital is money that can be lost without
                    jeopardizing ones’ financial security or life style. Only
                    risk capital should be used for trading and only those with
                    sufficient risk capital should consider trading. Past
                    performance is not necessarily indicative of future results.
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Hypothetical Performance Disclosure: Hypothetical
                    performance results have many inherent limitations, some of
                    which are described below. No representation is being made
                    that any account will or is likely to achieve profits or
                    losses similar to those shown; in fact, there are frequently
                    sharp differences between hypothetical performance results
                    and the actual results subsequently achieved by any
                    particular trading program. One of the limitations of
                    hypothetical performance results is that they are generally
                    prepared with the benefit of hindsight. In addition,
                    hypothetical trading does not involve financial risk, and no
                    hypothetical trading record can completely account for the
                    impact of financial risk of actual trading. for example, the
                    ability to withstand losses or to adhere to a particular
                    trading program in spite of trading losses are material
                    points which can also adversely affect actual trading
                    results. There are numerous other factors related to the
                    markets in general or to the implementation of any specific
                    trading program which cannot be fully accounted for in the
                    preparation of hypothetical performance results and all
                    which can adversely affect trading results.
                </p>
                <p className="mb-5 text-project-black font-normal text-sm font-overpass">
                    Live Trade Room Disclosure: This presentation is for
                    educational purposes only and the opinions expressed are
                    those of the presenter only. All trades presented should be
                    considered hypothetical and should not be expected to be
                    replicated in a live trading account.
                </p>
                <p className=" text-project-black font-normal text-sm font-overpass">
                    Testimonial Disclosure: Testimonials appearing on this
                    website may not be representative of other clients or
                    customers and is not a guarantee of future performance or
                    success.
                </p>
            </div>
        </div>
    );
};

export default NinjaTraders;
