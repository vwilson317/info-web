CREATE TABLE [dbo].[Ingredients]
(
    ID INT PRIMARY KEY,
    BurgerID INT,
    [Name] NVARCHAR(255),
    CONSTRAINT FK_BurgerIngredient FOREIGN KEY (BurgerID) REFERENCES dbo.BurgersEaten(ID)
)