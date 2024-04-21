"use server"

import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import type {Post} from "@prisma/client"
import {prisma} from "@/lib/prisma";

export async function createPost(data: FormData) {
    const {title, body} = Object.fromEntries(data) as Omit<Post, "id">

    const post = await prisma.post.create({
            data: {
                title,
                body
            }
        }
    )

    redirect(`/blog/${post.id}`)
}

export async function updatePost(data: FormData) {
    const {id, title, body} = Object.fromEntries(data) as Post

    const post = await prisma.post.update({
        where: {id},
        data: {title, body}
    })

    revalidatePath(`/blog/${post.id}`)
    redirect(`/blog/${post.id}`)
}

export async function removePost(id: string) {
    await prisma.post.delete({
        where: {id}
    })
    revalidatePath("/blog")
    redirect("/blog")
}
