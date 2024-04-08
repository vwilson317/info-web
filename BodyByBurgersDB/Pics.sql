CREATE TABLE [dbo].[Pics]
(
    ID INT PRIMARY KEY,
    BurgerID INT,
    [Url] NVARCHAR(255),
    CONSTRAINT FK_BurgerPic FOREIGN KEY (BurgerID) REFERENCES dbo.BurgersEaten(ID)
)