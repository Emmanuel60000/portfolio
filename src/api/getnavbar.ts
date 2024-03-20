import prisma from "@/libs/prismadb";

export default async function getNavbarAll(){
    const allNavbar = await prisma.navbar.findMany()
    return allNavbar;
}