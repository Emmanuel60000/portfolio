// page getProjects
import prisma from "@/libs/prismadb";

export default async function getProjectsAll() {
    const allProjects = await prisma.projects.findMany();
    return allProjects;
}





