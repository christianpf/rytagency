import Image from "next/image";
import Link from "next/link";


import {BsArrowRight} from "react-icons/bs"

const BlogCard = ({ post }) => {


  return (
    <Link href="#" className="flex flex-col rounded-xl bg-white tracking-tighter transition duration-200 hover:scale-105 shadow-card">
      {console.log(post)}
      <Image
        className="w-full aspect-square rounded-t-xl"
        src={post.img}
        alt={post.title}
        width={400}
        height={400}
      />
      <div className="p-4 text-start flex flex-col gap-4">
        <h4 className="text-lg font-semibold text-black">{post.title}</h4>
        <h6 className="text-md text-text font-bold">{post.date}</h6>
        <p className="text-md text-text font-medium">{post.description}</p>
        
      </div>
      <Link href="#" className="text-start p-4 flex items-center gap-4 text-primary font-semibold">Leer Más </Link>
    </Link>
  );
};

export default BlogCard;
