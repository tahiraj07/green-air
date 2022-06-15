using green_api.Models;
using Microsoft.EntityFrameworkCore;

namespace green_api.Data  
{
    public class DataContext : DbContext
    {
         public DataContext(DbContextOptions<DataContext> options) : base (options) {}

         public DbSet<Main_forms> Forms { get; set; } 
    }
}