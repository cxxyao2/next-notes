/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Checkhistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Mynote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Checkhistory" DROP CONSTRAINT "Checkhistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "Mynote" DROP CONSTRAINT "Mynote_userId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Account_id_seq";

-- AlterTable
ALTER TABLE "Checkhistory" DROP CONSTRAINT "Checkhistory_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Checkhistory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Checkhistory_id_seq";

-- AlterTable
ALTER TABLE "Mynote" DROP CONSTRAINT "Mynote_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Mynote_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Mynote_id_seq";

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tag_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mynote" ADD CONSTRAINT "Mynote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checkhistory" ADD CONSTRAINT "Checkhistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
