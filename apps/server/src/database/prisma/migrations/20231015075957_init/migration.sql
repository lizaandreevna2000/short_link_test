-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "original_link" TEXT NOT NULL,
    "short_link" TEXT NOT NULL,
    "count_click" INTEGER NOT NULL DEFAULT 0,
    "code_link" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_original_link_key" ON "Link"("original_link");

-- CreateIndex
CREATE UNIQUE INDEX "Link_short_link_key" ON "Link"("short_link");

-- CreateIndex
CREATE UNIQUE INDEX "Link_code_link_key" ON "Link"("code_link");
