import BlogCard from "@src/shared/BlogCard"
import latestPost from "@src/mocks/latestPost.json"
import { useEffect, useState } from "react"

const LatestPost = () => {

  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(latestPost);
  }, [])

  return (
    <section className="bg-section-cyan text-center w-full py-16 bg-gradient-to-b from-white to-accent/30">
      <h2 className="text-primary text-5xl font-bold">Nuestro blog</h2>
      <h4 className="text-black text-2xl pt-4">Nuestros posts más recientes</h4>
      <div className="2xl:w-4/6 lg:w-5/6 w-full px-4 lg:px-0 mx-auto gap-8 pt-8 grid_latest_posts">
        {latestPosts.map((post) => {
          return <BlogCard post={post} />
        })}
      </div>
    </section>
  )
}

export default LatestPost