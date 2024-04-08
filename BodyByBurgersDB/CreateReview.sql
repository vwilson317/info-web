CREATE PROCEDURE [dbo].[CreateReview]
  @name NVARCHAR(255),
  @description NVARCHAR,
  @location NVARCHAR(255),
  @geoLocation NVARCHAR,
  @date DATETIME,
  @rating DECIMAL(2, 1),
  @price DECIMAL(5, 2)
AS
-- Insert into Review table
INSERT INTO Review ([Name], [Description], [Location], GeoLocation, [Date], Rating, Price)
VALUES (@name, @description, @location, @geoLocation, @date, @rating, @price);