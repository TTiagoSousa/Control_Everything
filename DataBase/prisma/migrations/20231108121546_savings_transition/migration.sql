-- CreateTable
CREATE TABLE "SavingTransitions" (
    "id" TEXT NOT NULL,
    "transitionID" TEXT NOT NULL,
    "transitiontype" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currencyType" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "SavingTransitions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavingTransitions" ADD CONSTRAINT "SavingTransitions_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
