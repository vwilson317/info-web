CREATE TABLE [dbo].[Ingredients]
(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ReviewId INT,
    [Name] NVARCHAR(255),
    CONSTRAINT FK_ReviewIngredient FOREIGN KEY (ReviewId) REFERENCES dbo.Review(Id)
)