import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardSpotlight } from "./Ui/card-spotlight";
import {
  faArrowDown,
  faArrowDown19,
  faArrowDownUpLock,
  faArrowRightLong,
  faArrowTrendDown,
  faAngleUp,
  faCashRegister,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons/faTemperatureArrowDown";

export default function AnimatedCard() {
  return (
    <div className="flex flex-col justify-center items-center h-full m-10">
      <span className="text-orange-600 text-xl text-center">OUR PLAN</span>
      <span className="text-white text-3xl font-bold mt-2 text-center">
        CHOOSE YOUR PRICING PLAN
      </span>
      <div className="grid cursor-pointer sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-12 gap-10">
        <CardSpotlight className="group w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Monthly
          </p>
          <p className="text-5xl relative z-20 mt-4 text-orange-500">₹1599</p>
          <div className="text-neutral-200 mt-6 relative z-20">
            SINGLE CLASS
            <ul className="list-none  mt-8">
              <Step title="Free Riding" />
              <Step title="Unlimited Equipments" />
              <Step title="Personal Trainer" />
              <Step title="Weight Losing Classes" />
              <Step title="Month To Mouth" />
              <Step title="No Time Restriction" />
            </ul>
            <div class="relative group flex justify-center items-center mt-14 -bottom-12 opacity-0 duration-500 group-hover:-bottom-0 group-hover:opacity-100">
              <button
                name="text"
                class="input flex-row h-full opacity-90 w-full"
              >
                <span> BUY NOW </span>
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
              </button>
            </div>
            <span className="flex justify-center">
          <FontAwesomeIcon className="group-hover:hidden" icon={faAngleUp} />
          </span>
          </div>
        </CardSpotlight>
        <CardSpotlight className="group w-96 ">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Quarterly
          </p>
          <p className="text-5xl relative z-20 mt-4 text-orange-500">₹3999</p>
          <div className="text-neutral-200 mt-6 relative z-20">
            SINGLE CLASS
            <ul className="list-none  mt-8">
              <Step title="Free Riding" />
              <Step title="Unlimited Equipments" />
              <Step title="Personal Trainer" />
              <Step title="Weight Losing Classes" />
              <Step title="Month To Mouth" />
              <Step title="No Time Restriction" />
            </ul>
            <div class="relative group flex justify-center items-center mt-14 -bottom-12 opacity-0 duration-500 group-hover:-bottom-0 group-hover:opacity-100">
              <button
                name="text"
                class="input flex-row h-full opacity-90 w-full"
              >
                <span> BUY NOW </span>
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
              </button>
            </div>
          <span className="flex justify-center">
          <FontAwesomeIcon className="group-hover:hidden" icon={faAngleUp} />
          </span>
          </div>
        </CardSpotlight>
        <CardSpotlight className="group w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Half-Yearly
          </p>
          <p className="text-5xl relative z-20 mt-4 text-orange-500">₹7999</p>
          <div className="text-neutral-200 mt-6 relative z-20">
            SINGLE CLASS
            <ul className="list-none  mt-8">
              <Step title="Free Riding" />
              <Step title="Unlimited Equipments" />
              <Step title="Personal Trainer" />
              <Step title="Weight Losing Classes" />
              <Step title="Month To Mouth" />
              <Step title="No Time Restriction" />
            </ul>
            <div class="relative group flex justify-center items-center mt-14 -bottom-12 opacity-0 duration-500 group-hover:-bottom-0 group-hover:opacity-100">
              <button
                name="text"
                class="input flex-row h-full opacity-90 w-full"
              >
                <span> BUY NOW </span>
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
              </button>
            </div>
            <span className="flex justify-center">
          <FontAwesomeIcon className="group-hover:hidden" icon={faAngleUp} />
          </span>
          </div>
        </CardSpotlight>
        <CardSpotlight className="group w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Yearly
          </p>
          <p className="text-5xl relative z-20 mt-4 text-orange-500">₹12999</p>
          <div className="text-neutral-200 mt-6 relative z-20">
            SINGLE CLASS
            <ul className="list-none  mt-8">
              <Step title="Free Riding" />
              <Step title="Unlimited Equipments" />
              <Step title="Personal Trainer" />
              <Step title="Weight Losing Classes" />
              <Step title="Month To Mouth" />
              <Step title="No Time Restriction" />
            </ul>
            <div class="relative group flex justify-center items-center mt-14 -bottom-12 opacity-0 duration-500 group-hover:-bottom-0 group-hover:opacity-100">
              <button
                name="text"
                class="input flex-row h-full opacity-90 w-full"
              >
                <span> BUY NOW </span>
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
              </button>
            </div>
            <span className="flex justify-center">
          <FontAwesomeIcon className="group-hover:hidden" icon={faAngleUp} />
          </span>
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
}

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
