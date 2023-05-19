/*
  Warnings:

  - Added the required column `company_logo` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "company_logo" TEXT NOT NULL;
