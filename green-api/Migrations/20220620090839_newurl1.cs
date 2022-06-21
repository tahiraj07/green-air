using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace green_api.Migrations
{
    public partial class newurl1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "url1",
                table: "Forms",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "url1",
                table: "Forms");
        }
    }
}
