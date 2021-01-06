using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Computer> Computers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Desktop>().ToTable("Desktops");
            builder.Entity<Laptop>().ToTable("Laptops");
        }
    }
}