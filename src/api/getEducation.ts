import prisma from "@/libs/prismadb";



export default async function getEducationAll(){
    const allEducation = await prisma.education.findMany();
    return allEducation;
}
