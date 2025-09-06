import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

// Generate metadata for each blog page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const blogs = getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title}`,
    description:
      blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
    keywords: blog.tags,

    openGraph: {
      title: blog.title,
      description:
        blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
      type: "article",
      url: `https://drvishnuagrawal.in/blog/${blog.slug}`,
      images: [
        {
          url: blog.image || "/images/urology-placeholder.jpg",
          width: 1200,
          height: 630,
          alt: blog.alt || blog.title,
        },
      ],
    },
    alternates: {
      canonical: blog.conincalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description:
        blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
      images: [blog.image || "/images/urology-placeholder.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    other: {
      "application-name": "Dr. Vishnu Agrawal - Urology Clinic",
      author: "Dr. Vishnu Agrawal",
      Publisher: "Dr. Vishnu Agrawal",
      "publisher-url": "https://drvishnuagrawal.in",
      generator: "Next.js",
      "theme-color": "#ffffff",
    },
  };
}

// Custom blog content renderer component
function BlogContent({ content }) {
  const customStyles = `
    .blog-content h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #FCB644;
      line-height: 1.2;
    }
    
    .blog-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #FCB644;
      line-height: 1.3;
    }
    
    .blog-content p {
      margin-bottom: 1rem;
      line-height: 1.7;
      color: #1f2937;
    }

    .blog-content {
      color: #1f2937;
    }
    
    .blog-content a {
      color: #0ea5e9;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: all 0.2s ease;
    }
    
    .blog-content a:hover {
      color:rgb(12, 40, 56);
    }
    
    .blog-content ul, .blog-content ol {
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .blog-content ul li, .blog-content ol li {
      margin-bottom: 0.5rem;
    }
    
    .blog-content blockquote {
      border-left: 4px solid #0ea5e9;
      padding-left: 1rem;
      font-style: italic;
      margin: 1.5rem 0;
      background-color: #f0f9ff;
      padding: 1rem;
      border-radius: 0.375rem;
    }
  `;

  return (
    <div className="blog-content">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const blogs = getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen  bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 border border-blue-100">
            <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 bg-clip-text text-transparent mb-4">
              Blog Not Found
            </h1>
            <p className="text-gray-700 mb-4">
              Could not find blog with slug: {slug}
            </p>
            <Link
              href="/blog"
              className="inline-block bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen bg-[#FDF7F3]">
      
      <div className="relative w-full mb-5 h-80 md:h-120 max-w-7xl mx-auto">
        <Image
          src={blog.image   }
          alt={blog.alt || blog.title}
          fill
          priority
          className="object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f0b86e] to-transparent opacity-50 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-2">
          <h1 className="text-3xl   text-center md:text-5xl font-bold text-white mb-2 drop-shadow-md" style={{ fontFamily: 'Butler, Georgia, serif' }}>
            {blog.title}
          </h1>

        </div>
      </div>
     
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-white rounded-lg shadow-lg border border-blue-100">
        <div className="flex justify-center border-blue-800">
          <div className="bg-amber-100 rounded-xl px-6 py-6 w-full max-w-7xl flex flex-col sm:flex-row items-center sm:items-start sm:justify-around gap-6 sm:gap-8">

            {/* Author */}
            <div className="text-center w-full sm:w-auto">
              <div className="inline-flex items-center gap-2 bg-amber-400 rounded-md px-3 py-1 text-amber-900 font-medium text-sm select-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c3.866 0 7.353 1.665 9.879 4.304M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Author</span>
              </div>
              <h2 className="mt-2 text-xl font-serif text-amber-900">{blog.author}</h2>
            </div>



            {/* Date */}
            <div className="text-center w-full sm:w-auto">
              <div className="inline-flex items-center gap-2 bg-amber-400 rounded-md px-3 py-1 text-amber-900 font-medium text-sm select-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <text x="12" y="17" textAnchor="middle" dominantBaseline="middle" fontSize="6" fill="currentColor" fontFamily="serif" fontWeight="bold">17</text>
                </svg>
                <span>Date</span>
              </div>
              <h2 className="mt-2 text-xl font-serif text-amber-900">{blog.date}</h2>
            </div>

          </div>
        </div>
      <BlogContent content={blog.content} />
        
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 py-12">
        
           <div> 
          
              
            
            
          <div className="mt-10 pt-6 border-t border-blue-100">
            <Link
              href="/blogs"
              className="inline-block bg-[#FE9D00] text-white px-6 py-3 rounded-lg hover:opacity-90 transition duration-300 shadow-md"
            >
              ← Back to All  Blogs
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
