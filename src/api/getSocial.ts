import prisma from "@/libs/prismadb";




export default async function getSocialAll() {
    const allSocial = await prisma.social.findMany();
    return allSocial;
}