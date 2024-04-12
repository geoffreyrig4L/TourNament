/*
  Warnings:

  - You are about to drop the `Match` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tournament` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Match";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Team";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tournament";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "victory" INTEGER NOT NULL DEFAULT 0,
    "defeat" INTEGER NOT NULL DEFAULT 0,
    "total_matches" INTEGER NOT NULL DEFAULT 0,
    "sport" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tournaments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "member1" TEXT NOT NULL,
    "member2" TEXT NOT NULL,
    "winner" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Teams_name_key" ON "Teams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tournaments_name_key" ON "Tournaments"("name");
