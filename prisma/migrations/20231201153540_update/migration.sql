/*
  Warnings:

  - You are about to alter the column `title` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `description` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(65353)`.
  - You are about to alter the column `qualification` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(65353)`.
  - You are about to alter the column `responsibilities` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(65353)`.
  - You are about to alter the column `location` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `company_website` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `company_name` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `company_tagline` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `company_logo` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(65353),
ALTER COLUMN "qualification" SET DATA TYPE VARCHAR(65353),
ALTER COLUMN "responsibilities" SET DATA TYPE VARCHAR(65353),
ALTER COLUMN "location" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "company_website" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "company_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "company_tagline" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "company_logo" SET DATA TYPE VARCHAR(255);
