CREATE PROCEDURE [dbo].[sp_SearchIngredient]
  @query NVARCHAR(255)
AS
  SELECT * FROM Ingredient
  WHERE [Name] LIKE @query + '%'