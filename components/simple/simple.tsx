import { Check } from "lucide-react";

const Simple = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white">
      <div className="py-14 px-5 md:py-20  md:px-40">
        <div className="flex flex-col justify-between items-center text-center">
          <h1 className=" font-bold text-h1_title_mobi sm:text-h1_title">
            Simple, Transparent Pricing
          </h1>
          <h2 className="font-inter font-normal text-h2_container_mobi sm:text-h2_container pt-4">
            Choose the perfect plan for your needs. No hidden fees.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-6 pt-7 sm:gap-8 sm:pt-16 w-full max-w-7xl mx-auto">
          <div className="max-w-cover_box_simple shadow-sl rounded-box ">
            <h2 className=" font-bold text-h2_container text-center pt-8">
              Starter
            </h2>
            <div className="text-center">
              <span className=" font-bold text-h2_simple_box">$49</span>
              <span className=" font-normal text-span text-span_simple">
                /month
              </span>
            </div>
            <div className="flex flex-col justify-center items-center px-8 pb-8 pt-10">
              <ul className="grid grid-rows-4  gap-3 pb-7  font-normal text-center text-span">
                <li className="flex text-center ">
                  <Check className="text-check_simple mr-4" /> 1,000
                  conversations/month
                </li>
                <li className="flex text-center ">
                  <Check className="text-check_simple mr-4" /> Basic AI training
                </li>
                <li className="flex text-center ">
                  <Check className="text-check_simple mr-4" /> Email support
                </li>
                <li className="flex text-center ">
                  <Check className="text-check_simple mr-4" /> Website
                  integration
                </li>
              </ul>
              <button className="cursor-pointer  font-bold border-solid border-2 border-border_simple text-span w-full max-w-btn_simple h-12 rounded-box text-purple bg-btn flex justify-center items-center">
                Get started
              </button>
            </div>
          </div>
          <div className="max-w-cover_box_simple border-2 border-border_simple rounded-box flex flex-col items-center pt-3 relative">
            <span className="absolute -top-3 -right-3 px-3 py-1 bg-purple border border-border_simple text-white text-span_mobi font-medium rounded-md">
              Most Popular
            </span>
            <h2 className=" font-bold text-h2_container text-center pt-5">
              Business
            </h2>
            <div className="text-center">
              <span className=" font-bold text-h2_simple_box">$149</span>
              <span className=" font-normal text-span text-span_simple">
                /month
              </span>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-8 pb-8 pt-10 ">
              <ul className="grid  gap-3  pb-7  font-normal  text-span ">
                <li className="flex text-center break-words ">
                  <Check className="text-check_simple shrmr-4 mr-4" />
                  <p>1,000 conversations/month</p>
                </li>
                <li className="flex text-center ">
                  <Check className="text-check_simple mr-4" /> Custom AI
                  training
                </li>
                <li className="flex text-center ">
                  <Check className="text-check_simple mr-4" /> Priority support
                </li>
                <li className="flex text-center  ">
                  <Check className="text-check_simple mr-4" /> Multi-channel
                  integration
                </li>
              </ul>
              <button className="cursor-pointer  font-bold  text-span w-full max-w-btn_simple h-12 rounded-box text-white bg-purple flex justify-center items-center">
                Get started
              </button>
            </div>
          </div>
          <div className="max-w-cover_box_simple shadow-sl rounded-box ">
            <h2 className=" font-bold text-h2_container text-center pt-8">
              Enterprise
            </h2>
            <div className="text-center">
              <span className=" font-bold text-h2_simple_box">$499</span>
              <span className=" font-normal text-span text-span_simple">
                /month
              </span>
            </div>
            <div className="flex flex-col justify-center items-center px-8 pb-8 pt-10">
              <ul className="grid  gap-3 w-full max-w-box_simple pb-7  font-normal  text-span">
                <li className="flex  text-center ">
                  <Check className="text-check_simple mr-4" /> Unlimited
                  conversations
                </li>
                <li className="flex  text-center ">
                  <Check className="text-check_simple mr-4" /> Advanced AI
                  training
                </li>
                <li className="flex  text-center ">
                  <Check className="text-check_simple mr-4" /> Dedicated support
                </li>
                <li className="flex  text-center ">
                  <Check className="text-check_simple mr-4" /> Full API
                  integration
                </li>
              </ul>
              <button className="cursor-pointer  font-bold border-solid border-2 border-border_simple text-span w-full max-w-btn_simple h-12 rounded-box text-purple bg-btn flex justify-center items-center">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Simple;
