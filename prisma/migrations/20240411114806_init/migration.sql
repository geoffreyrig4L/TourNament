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
CREATE TABLE "Tournament" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Match" (
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
CREATE UNIQUE INDEX "Tournament_name_key" ON "Tournament"("name");
