import {prisma} from "@/lib/prisma";
import {Prisma, PrismaPromise} from "@prisma/client";
import Prisma__PostClient = Prisma.Prisma__PostClient;
import {DefaultArgs} from "@prisma/client/runtime/binary";

export function getPostById(id: string): Prisma__PostClient<{
    id: string;
    title: string;
    body: string;
} | null, null, DefaultArgs> {
    return prisma.post.findUnique({
        where: {id}
    })

}

export function getAllPosts(): PrismaPromise<{ id: string, title: string, body: string }[]> {
    return prisma.post.findMany()
}