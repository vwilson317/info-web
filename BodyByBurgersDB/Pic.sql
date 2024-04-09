CREATE TABLE [dbo].[Pic]
(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ReviewId INT,
    [Url] NVARCHAR(255),
    ThubnailUrl NVARCHAR(255),
    CONSTRAINT FK_ReviewPic FOREIGN KEY (ReviewId) REFERENCES dbo.Review(Id)
)