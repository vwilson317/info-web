CREATE TABLE [dbo].[BurgersEaten]
(
    ID INT PRIMARY KEY,
    [Name] NVARCHAR(255),
    [Description] NVARCHAR(255),
    Rating TINYINT,
    Location NVARCHAR(255) NULL,
    GeoLocation NVARCHAR(MAX),
    Date DATETIMEOFFSET DEFAULT (SYSDATETIMEOFFSET())
)
