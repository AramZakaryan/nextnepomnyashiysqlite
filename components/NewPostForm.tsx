import {createPost} from "@/app/blog/actions";

export default function NewPostForm() {
    return (
        <form className={"form"} action={createPost}>
            <input type={"text"}
                   required
                   placeholder={"title"}
                   name={"title"}/>
            <textarea className={"editText"}
                      required
                      placeholder={"content"}
                      name={"body"}/>
            <div>
                <input type={"submit"} value={"Add post"}/>
            </div>
        </form>
    )
}