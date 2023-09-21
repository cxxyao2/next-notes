-- AlterTable
ALTER TABLE "Mynote" ADD COLUMN     "memoized" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "viewCounter" INTEGER NOT NULL DEFAULT 1;
