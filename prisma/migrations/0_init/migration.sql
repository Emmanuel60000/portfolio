-- CreateTable
CREATE TABLE "Contacts" (
    "id" BIGSERIAL NOT NULL,
    "Coordonnees" VARCHAR,
    "img" VARCHAR,
    "title" VARCHAR,
    "url" VARCHAR,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" BIGSERIAL NOT NULL,
    "Title" VARCHAR,
    "Description" VARCHAR,
    "Dates" DATE,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" BIGSERIAL NOT NULL,
    "Img" VARCHAR,
    "Title" VARCHAR,
    "Description" VARCHAR,
    "Slug" VARCHAR,
    "GitURL" VARCHAR,
    "WebURL" VARCHAR,
    "Skills" VARCHAR,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects-Skills" (
    "id" BIGSERIAL NOT NULL,
    "id_projects" BIGINT,
    "id-skills" BIGINT,

    CONSTRAINT "Projects-Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" BIGSERIAL NOT NULL,
    "Img" VARCHAR,
    "Title" VARCHAR,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Social" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR,
    "url" VARCHAR,
    "img" VARCHAR,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education-Skills" (
    "id" BIGSERIAL NOT NULL,
    "skills_id" BIGINT NOT NULL,
    "education_id" BIGINT,

    CONSTRAINT "Education-Skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projects-Skills" ADD CONSTRAINT "public_Projects-Skills_id-skills_fkey" FOREIGN KEY ("id-skills") REFERENCES "Skills"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Projects-Skills" ADD CONSTRAINT "public_Projects-Skills_id_projects_fkey" FOREIGN KEY ("id_projects") REFERENCES "Projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Education-Skills" ADD CONSTRAINT "public_Education-Skills_education_id_fkey" FOREIGN KEY ("education_id") REFERENCES "Education"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Education-Skills" ADD CONSTRAINT "public_Education-Skills_skills_id_fkey" FOREIGN KEY ("skills_id") REFERENCES "Skills"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

