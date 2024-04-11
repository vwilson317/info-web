CREATE PROCEDURE [dbo].[sp_CreatePicture]
  @Url NVARCHAR(MAX),
  @ReviewId INT
AS
  INSERT INTO dbo.Pic([Url], ReviewId) 
  VALUES (@Url, @ReviewId)
RETURN SCOPE_IDENTITY()