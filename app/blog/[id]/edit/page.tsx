import {getPostById} from "@/services/posts";
import {createPost, updatePost} from "@/app/blog/actions";


type Props = {
    params: {
        id: string
    }
}
export default async function Profile({params: {id}}: Props) {

    const post = await getPostById(id)

    if (!post) {
        return <div>Post not found</div>
    }

    return (<div>

        <h1>Profile of {post.title}</h1>

        <form className={"form"} action={updatePost}>
            <input type={"text"}
                   required
                   placeholder={"title"}
                   name={"title"}
                   defaultValue={post.title}
            />
            <textarea className={"editText"}
                      required
                      placeholder={"content"}
                      name={"body"}
                      defaultValue={post.body}
            />
            <input hidden
                   name={"id"}
                   value={post.id}
            />
            <div>
                <input type={"submit"} value={"Update post"}/>
            </div>
        </form>

    </div>)
}









