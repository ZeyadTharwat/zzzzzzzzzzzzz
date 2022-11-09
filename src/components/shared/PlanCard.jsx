import React from "react";
import CheckIcon from "components/Icons/CheckIcon";
import Button from 'components/shared/Button'

const PlanCard = ({
    cardBackgroundColor,
    cost,
    costIntervalInDays,
    maxContracts,
    target,
    maxDropdown,
    dailyLoss,
    value,
    id,
    single,
    disabled,
}) => {
    return (
        <div className="flex flex-col py-10 px-18px font-mukta text-center text-project-black rounded-20px bg-project-gray w-max">
            <span className="font-normal text-lg xl:text-xl pb-3">
                {`> ${value} $`}
            </span>
            <span className="font-medium text-[22px] xl:text-2xl text-black">{`Express ${costIntervalInDays} Days ${cost}`}</span>
            <hr className="border-project-green my-2 border-t-[1px]" />
            <div className="flex items-center pb-2 pl-3">
                <div className="w-[12px] h-[12px] flex justify-center items-center">
                    <CheckIcon />
                </div>
                <p className="pl-2 font-mukta font-normal text-base xl:text-xl ">
                    {`TARGET ${target}`}
                </p>
            </div>
            <div className="flex items-center pb-2 pl-3">
                <div className="w-[12px] h-[12px] flex justify-center items-center">
                    <CheckIcon />
                </div>
                <p className="pl-2 font-mukta font-normal text-base xl:text-xl text-start">
                    {maxDropdown === 0
                        ? `NO Drawdown`
                        : `MAX ${maxDropdown}$ Drawdown`}
                </p>
            </div>
            <div className="flex items-center pb-2 pl-3">
                <div className="w-[12px] h-[12px] flex justify-center items-center">
                    <CheckIcon />
                </div>
                <p className="pl-2 font-mukta font-normal text-base xl:text-xl ">
                    {dailyLoss === 0 || !dailyLoss
                        ? `No Daily Loss`
                        : `${dailyLoss} Daily Loss`}
                </p>
            </div>
            <div className="flex items-center pb-6 pl-3">
                <div className="w-[12px] h-[12px] flex justify-center items-center">
                    <CheckIcon />
                </div>
                <p className="pl-2 font-mukta font-normal text-base xl:text-xl ">
                    {`Max ${maxContracts} Contracts`}
                </p>
            </div>
            <Button
                className={` py-1.5 px-30px w-max mx-auto `}
            >
                Join Now
            </Button>
        </div>
    );
};

export default PlanCard;
