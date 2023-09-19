-- CreateTable
CREATE TABLE "Checkhistory" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Checkhistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Checkhistory" ADD CONSTRAINT "Checkhistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
