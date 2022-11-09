import React from "react";
import CheckIcon from "components/Icons/CheckIcon";

const SubscribedPlanCard = ({
    cost,
    costIntervalInDays,
    maxContracts,
    target,
    maxDropdown,
    dailyLoss,
    value,
    expireDate,
}) => {
    return (
        <div className="bg-gradient-to-r from-light-purple to-light-blue bg-project-gray  font-mukta rounded-20px p-1 md:max-w-[455px] xl:max-w-[542px] 
            z-[1] relative
            before:transition-all before:ease-in before:duration-500 
            before:absolute
            before:content-[''] 
            before:rounded-20px 
            before:top-0 before:bottom-0 before:left-0 before:right-0
            before:z-[-1] before:opacity-0
            before:bg-gradient-to-l
            hover:before:opacity-100
">
            <div className=" py-30px px-5 md:py-10 md:px-10  rounded-20px bg-white">
                <div className="  flex  text-center text-project-black">
                    <div className="flex flex-col w-1/2 justify-center">
                        <div className="flex flex-col h-fit pr-6">
                            <span className="font-normal text-lg xl:text-xl pb-1">
                                {`> ${value} $`}
                            </span>
                            <span className="text-lg font-medium md:text-[22px] xl:text-2xl  text-black">{`Express ${costIntervalInDays} Days ${cost}`}</span>
                        </div>
                    </div>
                    <div className="flex flex-col border-l border-project-green w-1/2 pl-4">
                        <div className="flex items-center pb-[14px] ">
                            <div className="w-[12px] h-[12px] flex justify-center items-center">
                                <CheckIcon />
                            </div>
                            <p className="pl-2 font-mukta font-normal text-sm md:text-base xl:text-xl ">
                                {`TARGET ${target}`}
                            </p>
                        </div>
                        <div className="flex items-center pb-[14px] ">
                            <div className="w-[12px] h-[12px] flex justify-center items-center">
                                <CheckIcon />
                            </div>
                            <p className="pl-2 font-mukta font-normal text-sm md:text-base xl:text-xl  text-start">
                                {maxDropdown === 0
                                    ? `NO Drawdown`
                                    : `MAX ${maxDropdown}$ Drawdown`}
                            </p>
                        </div>
                        <div className="flex items-center pb-[14px] ">
                            <div className="w-[12px] h-[12px] flex justify-center items-center">
                                <CheckIcon />
                            </div>
                            <p className="pl-2 font-mukta font-normal text-sm md:text-base xl:text-xl ">
                                {dailyLoss === 0 || !dailyLoss
                                    ? `No Daily Loss`
                                    : `${dailyLoss} Daily Loss`}
                            </p>
                        </div>
                        <div className="flex items-center ">
                            <div className="w-[12px] h-[12px] flex justify-center items-center">
                                <CheckIcon />
                            </div>
                            <p className="pl-2 font-mukta font-normal text-text-sm md:text-base xl:text-xl ">
                                {`Max ${maxContracts} Contracts`}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-4 font-overpass md:text-lg">
                    Expiration Date: {expireDate}
                </div>
            </div>
        </div>
    );
};

export default SubscribedPlanCard;
