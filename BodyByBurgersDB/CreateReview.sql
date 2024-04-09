CREATE PROCEDURE [dbo].[sp_CreateReview]
  @name NVARCHAR(255),
  @description NVARCHAR(MAX),
  @location NVARCHAR(255),
  @geoLocation NVARCHAR(MAX),
  @date DATETIME,
  @rating DECIMAL(2, 1),
  @price DECIMAL(5, 2),
  @insta NVARCHAR(255),
  @id INT OUTPUT
AS
-- Insert into Review table
INSERT INTO Review ([Name], [Description], [Location], GeoLocation, [Date], Rating, Price, Insta)
VALUES (@name, @description, @location, @geoLocation, @date, @rating, @price, @insta);

SET @id = SCOPE_IDENTITY();