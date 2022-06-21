﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using green_api.Data;

#nullable disable

namespace green_api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220619210415_imageupdate1")]
    partial class imageupdate1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("green_api.Models.Main_forms", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("PublicId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("agb")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("class_v")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("company")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("company_id")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("date")
                        .HasColumnType("datetime2");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gift_code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("iban")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("image1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("image2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("option")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("payee")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("price")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("price_tag")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("submission_id")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("surname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("terms")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("time")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("unique_id")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Forms");
                });
#pragma warning restore 612, 618
        }
    }
}
