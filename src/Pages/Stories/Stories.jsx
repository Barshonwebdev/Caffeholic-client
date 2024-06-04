import React from "react";
import img1 from '../../assets/iced-latte.jpg'
import img2 from '../../assets/hazelnut.jpg'
import img3 from '../../assets/hot-espresso.jpg'
import img4 from '../../assets/espresso.jpg'
const Stories = () => {
  return (
    <div>
      <h1 className="text-5xl title-font text-center text-amber-900 mt-4">
        Tales about our love...
      </h1>
      <div className="mt-5">
        <div className="hero text-amber-900 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={img1}
              className=" rounded-lg shadow-2xl md:w-1/4 w-1/2"
            />
            <div>
              <h1 className="text-5xl title-font text-center lg:text-start font-bold">Mark&apos;s icy morning</h1>
              
              <p className="py-3 lg:w-1/2 mx-5 lg:mx-0 title-font text-2xl font-bold">
                <p className="mb-3 italic">Mark Hailey</p>
                This morning, I sipped my frozen latte, feeling the icy sweetness invigorate me. The sun&apos;s rays sparkled on the glass, casting a golden glow around me. Each refreshing sip lifted my spirits, and I found myself smiling, feeling alive and ready to embrace the promising day ahead.
              </p>
            </div>
          </div>
        </div>
        <div className="hero text-amber-900 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={img2}
              className=" rounded-lg shadow-2xl md:w-1/4 w-1/2"
            />
            <div>
              <h1 className="text-5xl title-font text-center lg:text-start font-bold">Agatha&apos;s Hazelnut appreciation</h1>
              
              <p className="py-3 lg:w-1/2 mx-5 lg:mx-0 title-font text-2xl font-bold">
                <p className="mb-3 italic">Agatha Robertson</p>
                As I sipped my hazelnut latte, the nutty aroma enveloped me. The creamy blend felt like a warm hug, providing comfort. The morning was calm, and with each sip, I felt a serene happiness. This perfect start made me feel centered and ready for the day&apos;s adventures.
              </p>
            </div>
          </div>
        </div>
        <div className="hero text-amber-900 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={img3}
              className=" rounded-lg shadow-2xl md:w-1/4 w-1/2"
            />
            <div>
              <h1 className="text-5xl title-font text-center lg:text-start font-bold">Peter&apos;s morning fuel</h1>
              
              <p className="py-3 lg:w-1/2 mx-5 lg:mx-0 title-font text-2xl font-bold">
                <p className="mb-3 italic">Peter Thomas</p>
                I downed my espresso in one go, the bold flavor jolting me awake. Its rich, intense taste surged through me, igniting my senses. Standing amidst the bustling city, I felt a rush of energy and determination. With this fiery boost, I was ready to conquer the day.
              </p>
            </div>
          </div>
        </div>
        <div className="hero text-amber-900 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={img4}
              className=" rounded-lg shadow-2xl md:w-1/4 w-1/2"
            />
            <div>
              <h1 className="text-5xl title-font text-center lg:text-start font-bold">Obito&apos;s relaxation drink</h1>
              
              <p className="py-3 lg:w-1/2 mx-5 lg:mx-0 title-font text-2xl font-bold">
                <p className="mb-3 italic">Obito Shigaraki</p>
                Cradling my Americano, I enjoyed its smooth simplicity. The gentle morning breeze brushed my face as I took each sip, appreciating the robust, clean flavor. This peaceful moment was my sanctuary, grounding me before I plunged into another busy workday, feeling prepared and at ease.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Stories;
