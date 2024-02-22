import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'UX Design',
        description: "I, as a UX designer, prioritize user needs, shaping seamless digital journeys through research, empathy, and intuitive design for optimal experiences."
    },

    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'UI Development',
        description: "As a UI designer, I infuse visual allure into interfaces, harmonizing aesthetics with user-friendly interactions to enhance digital experiences and user engagement."
    },

    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: "I, an app developer, craft functional and innovative mobile solutions, coding and designing to deliver seamless experiences for diverse user needs."
    },
]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className='container mx-auto'>
            <h2 className='mx-auto mb-12 text-center section-title xl:mb-24'>My Services</h2>

            <div className='grid justify-center xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index) => {
                    return (
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                 <CardTitle className='mb-4'>{item.title}</CardTitle>
                                 <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>

    </section>
  )
}

export default Services