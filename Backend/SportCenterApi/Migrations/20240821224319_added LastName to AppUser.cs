using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SportCenterApi.Migrations
{
    /// <inheritdoc />
    public partial class addedLastNametoAppUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserLastName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserLastName",
                table: "AspNetUsers");
        }
    }
}
