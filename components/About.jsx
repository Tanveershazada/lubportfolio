import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Shamila Khan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "(+92) 3554330721",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shamilak936@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 23 jul, 1990",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Gilgit Baltistan",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Kiu University",
        Qualification: "Master Of Science",
        years: "2019 - 2023",
      },
      {
        university: "Excellence College",
        Qualification: "Fsc",
        years: "2017 - 2019",
      },
      {
        university: "Aps School",
        Qualification: "Matric Science",
        years: "2006 - 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "NortSpex",
        role: "Master Of Science",
        years: "2019 - 2023",
      },
      {
        company: "UConnect",
        role: "Fsc",
        years: "2017 - 2019",
      },
      {
        company: "Calibreon International",
        role: "Matric Science",
        years: "2006 - 2019",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML CSS",
      },
      {
        name: "Frontend Developer",
      },
      {
        name: "UX/UI Designer",
      },
      {
        name: "Wordpress Developer",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="relative flex-1 hidden xl:flex">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* {Tabs} */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="Qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="mt-12 text-lg xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4 h3">
                      Speclist in Frontend developer for over 3 years
                    </h3>
                    <p className="max-w-xl subtitle max-auto xl:mx-0">
                      {" "}
                      Adept at translating creative concepts into responsive and
                      interactive web applications using HTML, CSS, and
                      JavaScript. Proven ability to collaborate effectively with
                      diverse teams to deliver polished and user-centric digital
                      solutions.
                    </p>

                    <div className="grid gap-4 mb-12 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center mx-auto gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div>Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Urdu, Hindi</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="Qualifications">
                  <div>
                    <h3 className="mb-8 text-center h3 xl:text-left">
                      My Journey
                    </h3>

                 
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* {Experience} */}
                      <div className='flex flex-col gap-y-6'>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* {education} */}
                      <div className='flex flex-col gap-y-6'>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, Qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {university}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {Qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>

                      
                  </div>
                </TabsContent>

                <TabsContent value="Skills">
                    <div className='text-center xl:text-left'>
                      <h3 className='mb-8 h3'>Experience Tools</h3>
                      <div className="mb-16">
                        <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                        <div className='mb-4 border-b border-border'></div>

                        <div>
                          {getData(skillData, 'skills').data.map((item, index) => {
                            const { name } = item;
                            return (
                              <div className="w-2/4 mx-auto text-center xl:text-left xl:mx-0" key={index}>
                                <div className="font-medium">{name}</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-2 text-xl font-semibold xl:text-left">
                          Tools
                        </h4>
                        <div className="mb-4 border-b border-border"></div>

                        <div className="flex justify-center gap-x-8 xl:justify-start">
                          {getData(skillData, 'tools').data.map((item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image 
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                                />
                              </div>
                            )
                          })}
                        </div>
                      </div>

                    </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
