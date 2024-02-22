'use client';

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'jenifer',
        job: 'Chief',
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maiores eaque obcaecati animi est vel quis dolorum illo voluptatibus hic?"
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Lopez Chris',
        job: 'CEO',
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, quidem dolor dolorem magnam laudantium eos veritatis inventore aspernatur."
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Hamilton',
        job: 'COO',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae accusantium aut architecto, repellendus nulla autem libero fugit vitae.."
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Lucifer',
        job: 'App Developer',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam error repellat accusamus id, doloremque ad vitae illo cupiditate libero fugit vitae.."
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Mark Steve',
        job: 'Chief',
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto enim ea aliquid a ipsum voluptate ipsam culpa recusandae, magni nemo autem libero fugit vitae.!"
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Stork Gem',
        job: 'Chief',
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quae consequuntur placeat repellat cumque velit distinctio autem libero fugit vitae."
    },
]

const Reviews = () => {
  return (
   <section className="mb-12 xl:mb-32">
    <div className="container mx-auto">
        <h2 className="mx-auto mb-12 text-center section-title">Reviews</h2>

        <Swiper
        slidesPerView={1}
        breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
            clickable: true,
        }}
        className="h-[350px]"
        >
            {reviewsData.map((person, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0'>
                                <div className="flex items-center gap-x-4">
                                    <Image
                                    src={person.avatar}
                                    width={70}
                                    height={70}
                                    alt=""
                                    priority
                                    />

                                    <div className="flex flex-col">
                                         <CardTitle>{person.name}</CardTitle>
                                         <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                        </Card>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
   </section>
  )
}

export default Reviews