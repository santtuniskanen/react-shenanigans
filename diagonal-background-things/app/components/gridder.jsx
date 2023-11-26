import Image from "next/image";

const Gridder = () => {
  return (
    <div className="w-full lg:h-screen p-2 bg-gradient-to-r from-red-400 via-gray-300 to-blue-500
    background-animate -skew-y-6">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full skew-y-6">
        <p className="text-2xl tracking-widest uppercase py-4 p-5">Content</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 py-4 p-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae sagittis odio. Ut euismod finibus sapien. Pellentesque sit
            amet sem purus. Cras et neque tincidunt, aliquet erat eu, vulputate
            nulla. Morbi blandit arcu maximus orci porta congue. Aenean
            convallis ipsum in mi rhoncus efficitur. Praesent magna nunc, ornare
            non molestie a, accumsan eu tellus. Proin id enim non mi feugiat
            consequat vitae nec eros. Donec sed purus odio.
          </p>
          <Image className="" src={"/assets/speech.png"} width={50} height={50}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae sagittis odio. Ut euismod finibus sapien. Pellentesque sit
            amet sem purus. Cras et neque tincidunt, aliquet erat eu, vulputate
            nulla. Morbi blandit arcu maximus orci porta congue. Aenean
            convallis ipsum in mi rhoncus efficitur. Praesent magna nunc, ornare
            non molestie a, accumsan eu tellus. Proin id enim non mi feugiat
            consequat vitae nec eros. Donec sed purus odio.
          </p>
          <Image className="" src={"/assets/idea.png"} width={50} height={50}/>
          <Image className="" src={"/assets/mailbox.png"} width={50} height={50}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae sagittis odio. Ut euismod finibus sapien. Pellentesque sit
            amet sem purus. Cras et neque tincidunt, aliquet erat eu, vulputate
            nulla. Morbi blandit arcu maximus orci porta congue. Aenean
            convallis ipsum in mi rhoncus efficitur. Praesent magna nunc, ornare
            non molestie a, accumsan eu tellus. Proin id enim non mi feugiat
            consequat vitae nec eros. Donec sed purus odio.
          </p>
          <Image className="" src={"/assets/search.png"} width={50} height={50}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae sagittis odio. Ut euismod finibus sapien. Pellentesque sit
            amet sem purus. Cras et neque tincidunt, aliquet erat eu, vulputate
            nulla. Morbi blandit arcu maximus orci porta congue. Aenean
            convallis ipsum in mi rhoncus efficitur. Praesent magna nunc, ornare
            non molestie a, accumsan eu tellus. Proin id enim non mi feugiat
            consequat vitae nec eros. Donec sed purus odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gridder;
