import React from "react";
import quoteMark from "public/icons/quoteMark.svg";
import samplePhoto from "public/images/sampleprofile.png";
import ratingStars from "public/icons/star.svg";
import Image from "next/image";

type Props = {};

const ReviewCard = (props: Props) => {
  return (
    <div className="relative bg-haze rounded-2xl px-4 md:px-8 pt-10 md:pt-[52px] pb-6 md:pb-8 mr-4">
      <Image
        className="absolute top-6 left-4 md:top-8 md:left-8 w-[clamp(2.938rem,2.697rem+1.028vw,3.75rem)]"
        alt="quote mark"
        src={quoteMark}
        width={51}
        height={40}
      />
      <div className="font-proxima-nova-400 text-[clamp(1rem,0.852rem+0.632vw,1.5rem)] lg:leading-[36px] indent-[clamp(4rem,3.704rem+1.265vw,5rem)] font-normal text-primary-blue mb-6 md:mb-10 lg:mb-10 pb-6 md:pb-10 lg:pb-10 border-b-2 border-primary-blue border-opacity-20">
        Et dui vitae integer platea a magna nunc ut tellus. Arcu consequat
        pretium nisl pellentesque condimentum purus pellentesque. At in viverra
        urna dictum volutpat ut sed. A felis imperdiet sapien amet volutpat at
        metus dictum aliquet. Platea posuere senectus vel ultrices et. Tortor id
        velit elit dolor. Mauris sit id feugiat vulputate.
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row lg:flex-row">
        <div className="flex gap-3 items-center mb-4 md:mb-0">
          <div>
            <Image
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
              alt="sample photo"
              src={samplePhoto}
            />
          </div>
          <div className="text-[clamp(1rem,0.926rem+0.316vw,1.25rem)]">
            <div className="font-medium text-primary-purple">
              Nedin Zahirovic
            </div>
            <div className="text-primary-grey">Co-Founder</div>
          </div>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <Image
              className="scale-90 md:scale-100"
              key={index}
              alt="rating star"
              src={ratingStars}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
