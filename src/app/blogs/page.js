import fs from "fs";
import path from "path";
import ClientBlogPage from "./ClientBlogPage.jsx";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}
 


export default function BlogPage() {
  const blogs = getBlogs();
  return <ClientBlogPage blogs={blogs} />;
}
