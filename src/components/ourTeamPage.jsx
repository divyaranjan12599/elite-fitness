import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
import TeamSection from "./teamSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  
  function TeamCard({ img, name, title }) {
    return (
      <Card className="rounded-lg bg-[#333]" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={img}
            alt={name}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography variant="h5" color="orange" className="!font-medium text-lg">
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-white"
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  
  
  const members = [
    {
      img: `https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww`,
      name: "Ryan Samuel",
      title: "Cross-Fit Trainer",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar2.jpg`,
      name: "Ryan Samuel",
      title: "GYM Trainer",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar5.jpg`,
      name: "Nora Hazel",
      title: "Aerobics Trainer",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar4.jpg`,
      name: "Otto Gonzalez",
      title: "GYM Trainer",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar6.jpg`,
      name: "Emma Roberts",
      title: "Zumba Trainer",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar3.jpg`,
      name: "William Pearce",
      title: "GYM Trainer",
    },
    {
      img: "https://www.material-tailwind.com/image/avatar7.svg",
      name: "Bruce Mars",
      title: "Calisthenics Trainer",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Annie Sprrat",
      title: "Cardio Trainer",
    },
  ];
  
  export function OurTeamPage() {
    return (
      <>
      <TeamSection />
      <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center flex flex-col lg:mb-28">
        <span className="text-orange-600 text-2xl">Meet the Team</span>
      <span className="text-white text-3xl font-bold mt-2 text-center">
      Behind the Success: Our Dedicated Team
      </span>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-300 max-w-4xl"
            >
            From visionary leadership to creative talent, and technical wizards, 
            each team member plays a pivotal role in delivering the exceptional 
            service and innovative solutions.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
        </div>
      </div>
    </section>
            </>  
    );
  }
  
  export default OurTeamPage;