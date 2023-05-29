using Microsoft.EntityFrameworkCore;

namespace Homework5._24.Data
{
    public class CandidateDbContext : DbContext
    {
        private string _connectionString;

        public CandidateDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Candidate> Candidates { get; set; }
    }
}
