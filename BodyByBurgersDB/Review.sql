CREATE TABLE [dbo].[Review]
(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    [Name] NVARCHAR(255),
    [Description] NVARCHAR(MAX),
    Rating DECIMAL(2,1),
    [Location] NVARCHAR(255) NULL,
    GeoLocation NVARCHAR(MAX),
    [Date] DATETIMEOFFSET DEFAULT (SYSDATETIMEOFFSET()),
    Price DECIMAL(5,2)
)
