CREATE TABLE [dbo].[ReviewIngredient]
(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ReviewId INT NOT NULL,
    IngredientId INT NOT NULL,
    CONSTRAINT FK_Review_ReviewIngredient FOREIGN KEY (ReviewId) REFERENCES dbo.Review(Id),
    CONSTRAINT FK__Ingredient_ReviewIngredient FOREIGN KEY (IngredientId) REFERENCES dbo.Ingredient(Id)
)