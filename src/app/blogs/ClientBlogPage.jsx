"use client";
import Link from "next/link";
import Image from "next/image";
 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useMemo } from "react";

const ClientBlogPage = ({ blogs }) => {
  // Set up intersection observers for different sections
  const [badgeRef, badgeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [tagsRef, tagsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [credentialsRef, credentialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [doctorInfoRef, doctorInfoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [specialtiesRef, specialtiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [membershipsRef, membershipsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sort blogs by date (latest first) using useMemo for performance
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [blogs]);

  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentBlogs = sortedBlogs.slice(start, start + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // optional scroll to top
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF7F3]  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Butler, Georgia, serif' }}
          >
            Welcome to Luxury Hotel
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
            style={{ fontFamily: 'Butler, Georgia, serif' }}
          >
            Luxury hotel booking refers to the process of reserving accommodations in high-end hotels that offer exceptional quality, comfort, and services. These establishments provide premium facilities for an unforgettable stay.
          </motion.p>
          
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8   border-gray-200 rounded-lg p-6 ">
          {currentBlogs.map((blog, blogIndex) => (
            <article
              key={`${blog.id}-${blogIndex}`}
              className="  rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col"
            >
              <Link href={`/blogs/${blog.slug}`} className="inline-block">
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={blog.image || "/images/dermatology-blog-placeholder.jpg"}
                  alt={blog.alt || blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={blog.id <= 3}
                />
                {blog.tags?.[0] && (
                  <span className="absolute top-4 left-4 bg-[#d1af52] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md select-none">
                    {blog.tags[0]}
                  </span>
                )}
              </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4 text-sm text-gray-500 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-gray-300">•</span>
                  <span className="font-medium text-gray-700">{blog.author}</span>
                </div>
                <h2
                  style={{ fontFamily: "Butler, Georgia, serif" }}
                  className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#F29900] transition-colors duration-300 leading-snug"
                >
                  <Link href={`/blogs/${blog.slug}`} className="inline-block">
                    {blog.title}
                  </Link>
                </h2>
                {/* Optional excerpt or read more button can go here */}
              </div>
            </article>
          ))}
        </div>

       
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-indigo-100 text-indigo-600 hover:bg-[#C8A882]
              disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-indigo-100 text-indigo-600 hover:bg-indigo-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}                                                                                          
 
       
      </div>
    </div>
  );
};

export default ClientBlogPage;