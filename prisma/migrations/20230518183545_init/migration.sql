-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "company_website" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_tagline" TEXT NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
