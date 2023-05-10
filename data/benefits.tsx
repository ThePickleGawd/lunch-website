import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "@/public/img/benefit/tacos.jpg";
import benefitTwoImg from "@/public/img/benefit/healthy2.jpg";

const benefitOne = {
  title: "For Students: Faster Lunch Lines",
  desc: "We all hate long linse. Use LunchTrak to quickly get out of the cafeteria and make the most of your precious lunch time.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Save valuable lunch time everyday",
      desc: "Who doesn't want more time to hang out with their friends?",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Get to your clubs and school games on time",
      desc: "Whether it's a homecoming game or an officer election meeting, LunchTrak helps you get there on time.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "No need to pull out an ID card",
      desc: "LunchTrak tags can stay in your backpack so you can walk straight out the door with confidence.",
      icon: <CreditCardIcon />,
    },
  ],
};

const benefitTwo = {
  title: "For Administrators: Healthier and More Productive Students",
  desc: "The CDE says that giving students more lunch time is a proven stragety to help improve their academic potential and health. Stop holding back your students' potential with long lunch lines.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Less stress for cashiers",
      desc: "Cashiers can put more focus on CDE meal requirements instead of constantly juggling barcode scanners and keypads",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Easy integration",
      desc: "No configuration or PoS migration required. Just plug in the LunchTrak Scanner and you're good to go.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Better wellbeing for students",
      desc: "Lunch is an important time to socialize and explore passions. Let your students make the most of it.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
