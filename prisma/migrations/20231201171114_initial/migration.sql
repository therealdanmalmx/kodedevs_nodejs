-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(65353) NOT NULL,
    "qualification" VARCHAR(65353) NOT NULL,
    "responsibilities" VARCHAR(65353) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "company_website" VARCHAR(255) NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "company_tagline" VARCHAR(1024) NOT NULL,
    "company_logo" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "cretedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
