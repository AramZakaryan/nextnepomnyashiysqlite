import {prisma} from "@/lib/prisma";

export function getPostsById(id: string) {
    return prisma.post.findUnique({
        where: {id}
    })

}

export function getAllPosts() {
    return prisma.post.findMany( )
}