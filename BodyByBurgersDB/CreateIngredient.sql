CREATE PROCEDURE [dbo].[sp_CreateIngredient]
  @name NVARCHAR(255),
  @icon NVARCHAR(255),
  @id INT OUTPUT
AS
  INSERT INTO [dbo].[Ingredient] ([Name], [Icon]) 
  VALUES (@name, @icon)
  SET @id = SCOPE_IDENTITY()