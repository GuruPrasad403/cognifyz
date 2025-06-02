-- CreateTable
CREATE TABLE "DevSnippet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tags" TEXT[],
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "DevSnippet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DevSnippet" ADD CONSTRAINT "DevSnippet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
