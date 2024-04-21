import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()


const initialPosts = [
    {
        title: "some title 1",
        body: "some body 1 some body 1 some body 1 some body 1 some body 1 some body 1 some body 1 some body 1"
    },
    {
        title: "some title 2",
        body: "some body 2 some body 2 some body 2 some body 2 some body 2 some body 2 some body 2 some body 2"
    },
    {
        title: "some title 3",
        body: "some body 3 some body 3 some body 3 some body 3 some body 3 some body 3 some body 3 some body 3"
    },
]

const seeds = async () => {
    await prisma.post.deleteMany()

    for (const post of initialPosts) {
        await prisma.post.create({data:{title:post.title, body:post.body}})
    }
}

seeds()