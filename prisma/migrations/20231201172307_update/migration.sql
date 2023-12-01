/*
  Warnings:

  - You are about to alter the column `description` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(65353)` to `VarChar(10200)`.
  - You are about to alter the column `qualification` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(65353)` to `VarChar(10200)`.
  - You are about to alter the column `responsibilities` on the `Jobs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(65353)` to `VarChar(10200)`.

*/
-- AlterTable
ALTER TABLE "Jobs" ALTER COLUMN "description" SET DATA TYPE VARCHAR(10200),
ALTER COLUMN "qualification" SET DATA TYPE VARCHAR(10200),
ALTER COLUMN "responsibilities" SET DATA TYPE VARCHAR(10200);
