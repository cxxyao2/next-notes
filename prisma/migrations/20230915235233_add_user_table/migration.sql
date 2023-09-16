-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User', 'Guest');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Guest';
