CREATE PROCEDURE [dbo].[sp_CreateReviewIngredient]
  @reviewId INT,
  @ingredientId INT
AS
  INSERT INTO [dbo].[ReviewIngredient] (ReviewId, IngredientId) 
  VALUES (@reviewId, @ingredientId)