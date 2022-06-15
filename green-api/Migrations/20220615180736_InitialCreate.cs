using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace green_api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Forms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    submission_id = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    option = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    surname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    company = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    company_id = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    price = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    payee = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    iban = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gift_code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    image1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    image2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    time = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    agb = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    terms = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    class_v = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    price_tag = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    unique_id = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Forms", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Forms");
        }
    }
}
