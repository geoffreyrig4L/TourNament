/*
  Warnings:

  - You are about to drop the `Teams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Teams";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "victory" INTEGER NOT NULL DEFAULT 0,
    "defeat" INTEGER NOT NULL DEFAULT 0,
    "total_matches" INTEGER NOT NULL DEFAULT 0,
    "sport" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");
