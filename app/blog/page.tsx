import {Metadata} from "next";
import {getAllPosts} from "@/services/posts";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Blog | Next App"
}

export const revalidate = 10

export default async function Blog() {
    const posts = await getAllPosts()

    return (
        <>
            <h1>Blog Page</h1>
            <ul className={"posts"}>
                {posts.map(p =>
                    <li key={p.id} className={"post-item"}>
                        <Link href={`/blog/${p.id}`}>{p.title}</Link>
                    </li>
                )}

            </ul>
        </>
    )
}