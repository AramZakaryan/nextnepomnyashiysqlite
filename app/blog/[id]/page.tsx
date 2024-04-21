import {getAllPosts, getPostsById} from "@/services/posts";
import {Metadata} from "next";
import Link from "next/link";
import {removePost} from "@/app/blog/actions";

type Props = {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map(p => ({
        slug: p.id.toString()
    }))
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const post = await getPostsById(id)
    return {title: post?.title ?? ""}
}

export default async function Post({params: {id}}: Props) {

    const post = await getPostsById(id)

    if (!post) {
        return <h1>Post not found</h1>
    }

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <form action={removePost.bind(null, id)}>
                <input type={"submit"} value={"delete post"}/>
            </form>

            <Link href={`blog/${id}/edit`}>Edit</Link>
        </>
    )
}














