import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col pl-5">
      <div className="self-center flex w-full max-w-[1344px] flex-col mt-8 mb-9 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1248px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-lime-800 text-3xl font-medium leading-8 tracking-tight my-auto">
            World Peas
          </div>
          <div className="self-stretch flex w-[599px] max-w-full items-start justify-between gap-5 max-md:flex-wrap max-md:justify-center">
            <div className="text-black text-center text-base leading-5 self-center my-auto">
              Shop
            </div>
            <div className="text-black text-center text-base leading-5 self-center my-auto">
              Newstand
            </div>
            <div className="text-black text-center text-base leading-5 self-center my-auto">
              Who we are
            </div>
            <div className="text-black text-center text-base leading-5 self-center my-auto">
              My profile
            </div>
            <div className="justify-center items-center bg-lime-800 self-stretch flex w-[126px] max-w-full flex-col px-5 py-4 rounded-lg">
              <div className="text-white text-center text-base font-semibold leading-5 self-center whitespace-nowrap">
                Basket (3)
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[998px] flex-col mt-52 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-center text-6xl italic leading-[76.8px] tracking-tighter max-md:max-w-full max-md:text-4xl">
            <span className="">We’re </span>
            <span className="">farmers</span>
            <span className="">, </span>
            <span className="">purveyors</span>
            <span className="">, and </span>
            <span className="">eaters</span>
            <span className=""> of organically grown food.</span>
          </div>
          <div className="justify-center items-center bg-lime-800 self-center flex w-[227px] max-w-full grow flex-col mt-12 px-5 py-6 rounded-lg max-md:mt-10">
            <div className="text-white text-xl font-semibold leading-7 self-center whitespace-nowrap">
              Browse our shop
            </div>
          </div>
        </div>
        <div className="self-stretch mt-40 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.73] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.63] object-contain object-center w-full overflow-hidden self-start max-md:max-w-full"
                />
                <div className="text-black text-sm font-light leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                  <span className="font-medium">Central California</span>
                  <span className="font-light">
                    {" "}
                    — The person who grew these was located in Central
                    California and, er, hopefully very well-compensated.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1035px] mt-40 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[14%] max-md:w-full max-md:ml-0">
              <div className="text-black text-sm font-semibold leading-6 tracking-wide uppercase max-md:mt-10">
                WHAT WE BELIEVE
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[86%] ml-5 max-md:w-full max-md:ml-0">
              <div className="text-black text-xl leading-8 w-[822px] max-w-full max-md:mt-10">
                We believe in produce. Tasty produce. Produce like:
                <br />
                <br />
                Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers.
                Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese
                eggplants. Asparagus. Artichokes—Jerusalem artichokes, too.
                Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy.
                Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley.
                Dill. <br />
                <br />
                What are we forgetting?
                <br />
                <br />
                Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some,
                “rocket”). Persian cucumbers, in addition to aforementioned
                “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash
                (what some cultures call pumpkins). Sweet potatoes and
                potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom.
                Fruits of our labor (this website). Sorrel. Pineapple. Mango.
                Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets.
                Chives. Corn. Endive. Escarole, which, we swear, we’re vendors
                of organic produce, but if you asked us to describe what
                escaroles are...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;