-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "company_website" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_tagline" TEXT NOT NULL,
    "company_logo" TEXT NOT NULL,
    "cretedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
